"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DealsTable from "../../components/tables/DealsTable";
import { getDeals } from "../../services/dealService";
import Loader from "../../components/ui/Loader";
import useDebounce from "../../hooks/useDebounce";
import { filterDeals } from "../../features/deals/dealFilters";




export default function DealsPage() {
  const [deals, setDeals] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [risk, setRisk] = useState("");
  const [industry, setIndustry] =
    useState("");
  const [minROI, setMinROI] =
    useState("");

  // Sorting
  const [sortBy, setSortBy] =
    useState("");

  // Pagination
  const [currentPage, setCurrentPage] =
    useState(1);

  const dealsPerPage = 10;

  // Debounced search
  const debouncedSearch =
    useDebounce(search, 500);

  // Fetch deals
  useEffect(() => {
    const loadDeals = async () => {
      try {
        setLoading(true);

        const data = await getDeals();

        setDeals(data);

        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDeals();
  }, []);

  // Filters + Search + Sorting
  const filteredDeals = useMemo(() => {
    let filtered = filterDeals(deals, {
      risk,
      industry,
      minROI,
    });

    // Search
    filtered = filtered.filter((deal) => {
      const query =
        debouncedSearch.toLowerCase();

      return (
        deal.company
          .toLowerCase()
          .includes(query) ||
        deal.industry
          .toLowerCase()
          .includes(query)
      );
    });

    // Sorting
    if (sortBy === "roi-high") {
      filtered.sort(
        (a, b) => b.roi - a.roi
      );
    }

    if (sortBy === "roi-low") {
      filtered.sort(
        (a, b) => a.roi - b.roi
      );
    }

    return filtered;
  }, [
    deals,
    debouncedSearch,
    risk,
    industry,
    minROI,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredDeals.length / dealsPerPage
  );

  const startIndex =
    (currentPage - 1) * dealsPerPage;

  const paginatedDeals =
    filteredDeals.slice(
      startIndex,
      startIndex + dealsPerPage
    );

  // Pagination handlers
  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 1)
    );
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  }, [totalPages]);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Deals
        </h2>

        <p className="text-sm text-gray-500">
          Total: {filteredDeals.length}
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search deals..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-2 bg-white"
        />

        {/* Risk */}
        <select
          value={risk}
          onChange={(e) => {
            setRisk(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="">
            All Risks
          </option>

          <option value="low">
            Low
          </option>

          <option value="medium">
            Medium
          </option>

          <option value="high">
            High
          </option>
        </select>

        {/* Industry */}
        <select
          value={industry}
          onChange={(e) => {
            setIndustry(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="">All Industries</option>

          <option value="FinTech">FinTech</option>

          <option value="Energy">Energy</option>

          <option value="HealthTech">HealthTech</option>

          <option value="AI">AI</option>
        </select>

        {/* ROI */}
        <input
          type="number"
          placeholder="Min ROI"
          value={minROI}
          onChange={(e) => {
            setMinROI(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-2 bg-white"
        />

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="">
            Sort By
          </option>

          <option value="roi-high">
            ROI High → Low
          </option>

          <option value="roi-low">
            ROI Low → High
          </option>
        </select>
      </div>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl">
          {error}
        </div>
      ) : paginatedDeals.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500">
            No deals found
          </p>
        </div>
      ) : (
        <>
          <DealsTable
            deals={paginatedDeals}
          />

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg bg-white disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {currentPage} of{" "}
              {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={
                currentPage === totalPages
              }
              className="px-4 py-2 border rounded-lg bg-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
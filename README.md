# 🚀 Next.js Investment Dashboard Assignment

A highly interactive and data-rich **investment & corporate dashboard** built using **Next.js** with fully simulated backend behavior.  
This project focuses on **frontend architecture, scalable design, performance optimization, and advanced UI/UX** without using real APIs.

---
Live Demo : https://investment-dashboard-one-brown.vercel.app/

## 📌 Objective

To build a production-like dashboard for investors and corporates using:
- Mock datasets
- Simulated API calls
- Advanced frontend logic
- Optimized UI/UX performance

---

## 🧠 Key Highlights

- No real backend APIs used
- Fully simulated service layer (API-like behavior)
- Large dataset handling (50–100 deals)
- Scalable frontend architecture
- Real-world dashboard experience

---

## 🏗️ Project Architecture


components/ → Reusable UI components (charts, cards, layouts)
pages/ → Next.js pages (Dashboard, Deals, Corporate, etc.)
services/ → Mock API logic (dealService, investorService)
data/ → JSON mock datasets
hooks/ → Custom React hooks
utils/ → Helper functions (formatting, calculations)


---

## 📊 Features Implemented

### 1. Investor Dashboard
- Total Investments overview
- Active Deals tracking
- ROI analytics
- Risk distribution charts

### 2. Deal Explorer
- Debounced search
- Multi-filter system (ROI, risk, industry, budget)
- Sorting & pagination
- Efficient large dataset handling

### 3. Deal Details Page
- Company overview
- Financial metrics
- ROI projections
- Risk analysis
- Interactive UI (tabs & sections)

### 4. Recommendation Engine
- Frontend scoring logic based on:
  - Risk match
  - Industry preference
  - Budget compatibility
  - ROI attractiveness
- Optimized using memoization

### 5. My Investments
- Add/remove investments
- Local storage persistence

### 6. Corporate Dashboard
- Funding analytics
- Investor count
- Conversion rate tracking
- Trend visualization

---

## 🔄 Data Layer (Mock System)

- 50–100 deals dataset
- 10–20 investors dataset
- Stored in local JSON files

---

## ⚙️ Service Layer (Simulated Backend)

- API-like functions using Promises
- Artificial delay (300–800ms)
- Filtering, sorting, pagination logic
- Optional error simulation

---

## 📈 Data Visualization

- Recharts used for charts
- Line charts → Growth & ROI
- Bar charts → Investment trends
- Pie charts → Risk distribution
- Smooth animations + tooltips

---

## ⚡ Performance Optimizations

- useMemo & useCallback for expensive operations
- Debounced search inputs
- Lazy-loaded components
- Reduced re-renders
- Optimized state updates
- Efficient filtering logic for large datasets

---

## 🎨 UI/UX Design

- Clean fintech dashboard design
- Responsive layout (mobile + desktop)
- Consistent spacing & typography
- Smooth micro-interactions
- Modern card-based UI
- Dark mode ready structure (extendable)

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React.js
- Tailwind CSS
- Recharts
- JavaScript (ES6+)

---

## 🚀 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/aniketbagul242/investment-dashboard.git
2. Install Dependencies
npm install
3. Run Development Server
npm run dev
4. Open Application
http://localhost:3000

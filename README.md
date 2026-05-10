 Investment Dashboard (Next.js)

A highly interactive frontend-only investment dashboard built using Next.js, React, Redux Toolkit, and Recharts, simulating real-world fintech analytics without any backend APIs.

 Live Demo

(Add your Vercel link here)

📁 Project Overview :

This project simulates a real-world investor & corporate dashboard where all data is mocked locally and API behavior is replicated using service layers with artificial delays.

It focuses on:

Scalable frontend architecture
Data simulation (no backend APIs)
Advanced UI/UX design
Performance optimization
State management with Redux Toolkit



 Architecture:

The project follows a feature-based architecture:

/components   → Reusable UI components (charts, cards, layout)
/services     → Mock API layer (dealService, analyticsService)
/data         → Static JSON datasets
/store        → Redux Toolkit slices
/hooks        → Custom React hooks (if any)
/utils        → Helper functions
/app          → Next.js pages (dashboard, corporate, etc.)


 Data Layer (Mock Data) :

Instead of backend APIs, the app uses:

deals.json → 50–100 mock deals
investors.json → 10–20 investors

Stored locally in /data folder.

 Service Layer (API Simulation)

All data operations are handled via service files:

Features:
Simulated API calls using Promises
Artificial delay (300–800ms)
Filtering, sorting, pagination logic
Error simulation (optional)

Example:

await new Promise(res => setTimeout(res, 600));
📈 Features
🏠 Investor Dashboard
Total Deals
Average ROI
Total Investment
Charts:
ROI Performance
Investment Growth
Risk Distribution
🔍 Deal Explorer
Debounced search
Multi-filter (ROI, risk, industry, investment range)
Sorting
Pagination support
📄 Deal Details Page
Company overview
Financial metrics
ROI projections
Risk analysis
Tab-based UI
🧠 Recommendation Engine

Frontend-based scoring system:

Risk match
Industry match
Budget compatibility
ROI attractiveness

Deals are ranked using a computed score and memoized for performance.

💼 Corporate Dashboard
Total funding raised
Investor count
Conversion rate
Trend charts using Recharts
📊 Data Visualization

Libraries used:

Recharts

Charts implemented:

Line Chart → ROI / Growth trends
Bar Chart → Investment distribution
Pie Chart → Risk analysis
🧩 State Management
Redux Toolkit used for global state
Handles:
Loading states
Modal state
Theme state (light/dark optional)
Caching logic
⚡ Performance Optimization

Implemented optimizations:

useMemo for computed filtering
useCallback for event handlers
Debounced search input
Lazy loading of components
Avoid unnecessary re-renders
Efficient Redux state updates
🎨 UI/UX Design
Fintech-style dashboard UI
Clean spacing system
Responsive grid layout
Card-based analytics design
Smooth chart rendering
Modern typography
🛠 Tech Stack
Next.js (App Router)
React.js
Redux Toolkit
Recharts
Tailwind CSS
📂 Key Services Example
dealService.js
getDeals()
getDealById()
filterDeals()
analyticsService.js
getAnalytics()

All services simulate real API behavior using async functions.

📦 Installation
npm install
npm run dev
🧪 Testing Strategy

Since no backend exists:

Data validation handled in services
UI tested with mock datasets
Error states simulated manually
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./shared/components/feedback/LoadingSpinner";

import { MainLayout } from "@/shared/components/layout/MainLayaout";

const HomePage = lazy(() => import("@/module/portfolio/pages/HomePage"));
const NotFound = lazy(() => import("@/shared/pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

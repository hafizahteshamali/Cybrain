import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Contract_Center from "../pages/Dashboard/Contract_Center.jsx";
import Affairs from "../pages/Dashboard/Affairs";
import Documents from "../pages/Dashboard/Documents";
import Deadlines from "../pages/Dashboard/Deadlines";
import Communication from "../pages/Dashboard/Communication";
import Legal_Notice from "../pages/Dashboard/Legal_Notice";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Index Route = Vertragszentrum */}
        <Route index element={<Contract_Center />} />

        {/* Other Routes */}
        <Route path="angelegenheiten" element={<Affairs />} />
        <Route path="unterlagen" element={<Documents />} />
        <Route path="fristen" element={<Deadlines />} />
        <Route path="kommunikation" element={<Communication />} />
        <Route path="rechtliche-hinweise" element={<Legal_Notice />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

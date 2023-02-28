import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { LoginPage } from "./pages/Login";



export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<h1>123</h1>} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}
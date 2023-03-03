import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import BrandListing from './pages/Brand/Listing';
import BrandCreate from './pages/Brand/Create';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<h1>123</h1>} />

            {/* Brand Routes */}
            <Route path="/brands" element={<BrandListing />} />
            <Route path="/brands/+" element={<BrandCreate />} />
            
        </Routes>
    )
}
import { CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/mainStyle.scss";
import { UserRoute } from "./authorization/user";
import { AuthProvider } from "./contextProviders/authentication";
import {
  EmailVerification,
  ForgotPassword,
  Login,
  ResetPassword,
  ResetPasswordSuccess,
  Signup,
} from "./pages/Authnetication-Screens/index";
import ProductListing from "./pages/Product-Listing";
import { HomePage } from "./pages/home";
import { LandingPage } from "./pages/landingPage";
import { ProductdetailPage } from "./pages/productdetailPage";
import ManageInventory from "./pages/supplier/manage-inventory";
import ShippingQueue from "./pages/supplier/shipping-queue";
import { SupplierDashboard } from "./pages/supplier/supplierDashboard";
import { baseTheme } from "./theme";


export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/emailVerification/:email"
              element={<EmailVerification />}
            />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route
              path="/resetPasswordSuccess"
              element={<ResetPasswordSuccess />}
            />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<UserRoute><HomePage /></UserRoute>} />
            <Route path="/supplier" element={<SupplierDashboard />} />
            <Route path="/product-detail" element={<ProductdetailPage />} />
            <Route path="/manage-inventory" element={<ManageInventory />} />
            <Route path="/shipping-queue" element={<ShippingQueue />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

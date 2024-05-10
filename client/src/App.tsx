import { CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./assets/mainStyle.scss";
import { AuthProvider } from "./contextProviders/authentication";
import {
  EmailVerification,
  ForgotPassword,
  Login,
  ResetPassword,
  ResetPasswordSuccess,
  Signup,
} from "./pages/Authnetication-Screens/index";
import { LandingPage } from "./pages/landingPage";
import ProductListing from "./pages/Product-Listing";
import { HomePage } from "./pages/home";
import { SupplierDashboard } from "./pages/supplier/supplierDashboard";
import { UserRoute } from "./authorization/user";
import { ProductdetailPage } from "./pages/productdetailPage";
import { baseTheme } from "./theme";
import "./App.css"


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
            <Route path="/home" element={<UserRoute><HomePage/></UserRoute>} />
            <Route path="/supplier" element={<SupplierDashboard />} />
            <Route path="/product-detail" element={<ProductdetailPage />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

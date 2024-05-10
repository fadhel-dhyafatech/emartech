import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contextProviders/authentication";
import {
  Login,
  Signup,
  ForgotPassword,
  EmailVerification,
  ResetPassword,
  ResetPasswordSuccess,
} from "./pages/Authnetication-Screens/index";
import { baseTheme } from "./theme";
import { LandingPage } from "./pages/landingPage";
import ProductListing from "./pages/Product-Listing";
import { HomePage } from "./pages/home";
import { SupplierDashboard } from "./pages/supplier/supplierDashboard";
import "./App.css"
import { UserRoute } from "./authorization/user";

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
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

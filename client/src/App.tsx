import React from "react";
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
import { SupplierDashboard } from "./pages/supplierDashboard";
import { HomePage } from "./pages/home";

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
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/supplier" element={<SupplierDashboard />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

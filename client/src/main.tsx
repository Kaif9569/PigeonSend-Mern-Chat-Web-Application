import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import "./index.css";
import DelayedSuspense from "./components/delayedSuspense/DelayedSuspense";
import { lazyWithDelay } from "./utils/lazyWithDelay";

// Lazy load pages with 3-second delay
const Home = lazyWithDelay(() => import("./pages/home/Home"), 2000);
const Login = lazyWithDelay(() => import("./pages/authentication/Login"), 2000);
const OTPVerification = lazyWithDelay(() => import("./pages/authentication/OTP_Verification"), 2000);
const Welcome = lazyWithDelay(() => import("./pages/welcome/Welcome"), 2000);

const rootLoader = () => {
  const termsAccepted = localStorage.getItem("termsAccepted");

  if (!termsAccepted) {
    // Case 1: Terms not accepted → welcome page
    return redirect("/welcome");
  }

  // if (!isAuthenticated()) {
  //   // Case 2: Terms accepted but not authenticated → login page
  //   return redirect("/login");
  // }

  // Case 3: Terms accepted and authenticated → home page
  return redirect("/home");
};

const loginLoader = () => {
  const termsAccepted = localStorage.getItem("termsAccepted");
  if (!termsAccepted) return redirect("/welcome"); // redirect if terms not accepted
  return null; // allow access
};

const homeLoader = () => {
  const termsAccepted = localStorage.getItem("termsAccepted");
  if (!termsAccepted) return redirect("/welcome");
  // if (!isAuthenticated()) return redirect("/login");
  return null;
};

// const isAuthenticated = () => document.cookie.includes("token=");

const router = createBrowserRouter([
  { path: "/", loader: rootLoader }, // same as before
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login />, loader: loginLoader },
  { path: "/otp-verification", element: <OTPVerification />, loader: loginLoader },
  { path: "/home", element: <Home />, loader: homeLoader },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DelayedSuspense delay={2000}>
      <RouterProvider router={router} />
    </DelayedSuspense>
  </React.StrictMode>
);

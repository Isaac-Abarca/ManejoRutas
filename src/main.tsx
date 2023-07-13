import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.tsx";
import SignUp from "./routes/SingnUp.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import { AuthProvider } from "./auth/AuthProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/singUp",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = UserAuth();
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default ProtectedRoute;

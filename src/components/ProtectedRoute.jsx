import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const [isAllowed, setIsAllowed] = useState(null);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("unlocked") === "true";
    setIsAllowed(unlocked);
  }, []);

  // ⏳ Wait until we check storage
  if (isAllowed === null) {
    return null; // or loading spinner
  }

  // 🔐 Not unlocked → go to secret page
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  // ✅ Allowed
  return children;
}

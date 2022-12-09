import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/User/Home";
import Login from "./Screens/User/Login";
import Signup from "./Screens/Signup";
import AdminLogin from "./Screens/Admin/AdminLogin";
import Cart from "./Screens/User/Cart";
import Checkout from "./Screens/User/Checkout";
import { AuthContextProvider } from "./Context/AuthContext";
import LandingPage from "./Screens/LandingPage";
import ForgotPassword from "./Screens/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import AdminHome from "./Screens/Admin/AdminHome";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/admin/adminlogin" element={<AdminLogin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="/user/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/admin-home"
              element={
                <ProtectedRoute>
                  <AdminHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

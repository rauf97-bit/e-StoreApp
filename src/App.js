import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import AdminLogin from "./Screens/AdminLogin";
import Cart from "./Screens/Cart";
import Checkout from "./Screens/Checkout";

import { AuthContextProvider } from "./Context/AuthContext";
import LandingPage from "./Screens/LandingPage";
import ForgotPassword from "./Screens/ForgotPassword";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="adminlogin" element={<AdminLogin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

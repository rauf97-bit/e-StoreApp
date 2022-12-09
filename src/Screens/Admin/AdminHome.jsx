import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

function AdminHome() {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    setError("");
    try {
      await logout();
      navigate("/admin/adminlogin");
    } catch (err) {
      setError("Failed to Logout");
    }
  };
  console.log(user);
  return (
    <div className="text-center mt-5">
      <p className="text-4xl mb-3 text-center font-bold text-purple-800">
        Admin
      </p>
      <p className="text-3xl text-center">Welcome {user && user.email}</p>
      <button
        onClick={handleSubmit}
        className="p-3 bg-black text-white rounded-md text-center mt-4"
      >
        Logout
      </button>
      {error && <p className="bg-red-500 p-3 my-2 text-xl ">{error}</p>}
    </div>
  );
}

export default AdminHome;

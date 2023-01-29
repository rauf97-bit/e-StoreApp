import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
// import { AddUserContext } from "../../Context/addUserContext";
import { UserAuth } from "../../Context/AuthContext";
import { db } from "../../firebase";

function Home() {
  const navigate = useNavigate();
  const { currentUser, logout } = UserAuth();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    try {
      await logout();
      navigate("/user/login");
    } catch (err) {
      setInterval(() => {
        setError("");
      }, 4000);
      return setError("Failed to Logout");
    }
  };
  const fetchUserData = async () => {
    const response = db.collection("users").get();
    // const userData = await response.get();
    console.log(response);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  // console.log(currentUser);
  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <p className="text-3xl text-center">
          Welcome{" "}
          <span className="uppercase font-semibold">
            {currentUser && currentUser.Fullname}
          </span>
        </p>
        <p className="text-3xl text-center">
          You Logged in using {currentUser && currentUser.email}
        </p>
        <button
          onClick={handleSubmit}
          className="p-3 bg-black text-white rounded-md text-center mt-4"
        >
          Logout
        </button>
        {error && <p className="bg-red-500 p-3 my-2 text-xl ">{error}</p>}
      </div>
    </>
  );
}

export default Home;

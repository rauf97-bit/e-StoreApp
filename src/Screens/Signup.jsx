import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AddUserContext } from "../Context/addUserContext";
import { UserAuth } from "../Context/AuthContext";
function Signup() {
  const { createUser, currentUser } = UserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    Fullname: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const userHandler = (e) => {
    const { name, value } = e.target;
    console.log(name + "::::" + value);
    setUserData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  // const { dispatch } = useContext(AddUserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { Fullname, email, tel, password, confirmPassword } = userData;
      if (
        Fullname === "" ||
        email === "" ||
        tel === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        setInterval(() => {
          setError("");
        }, 4000);
        return setError("Please fill the required fields");
      } else if (password !== confirmPassword) {
        setInterval(() => {
          setError("");
        }, 4000);
        return setError("Passwords do not match");
      } else {
        createUser(email, password, Fullname, tel);
        navigate("/user/home");
        currentUser &&
          setUserData({
            Fullname: "",
            email: "",
            tel: "",
            password: "",
            confirmPassword: "",
          });
        setLoading(true);
      }
      // dispatch({ type: "NEW_USERNAME", payload: username });
      // dispatch({ type: "NEW_USER_CONTACT", payload: contact });
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample "
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              {error && <p className="bg-red-500 p-3 my-2 text-xl ">{error}</p>}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Full name"
                  name="Fullname"
                  value={userData.Fullname}
                  onChange={userHandler}
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  value={userData.email}
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  onChange={userHandler}
                />
              </div>
              <div className="mb-6">
                <input
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Phonenumber"
                  value={userData.tel}
                  onChange={userHandler}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput3"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={userHandler}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput4"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={userHandler}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <p className="text-gray-800 ">
                  Already have an account{" "}
                  <Link to={"/user/login"} className="text-blue-500 ">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;

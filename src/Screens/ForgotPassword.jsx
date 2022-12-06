import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { resetPassword } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email);
      setSuccess("Check Email for password reset link");
    } catch (err) {
      console.log(err.message);
      setError("Please use an email with an existing account");
    }
  };
  return (
    <div>
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
                {error && (
                  <p className="bg-red-500 p-3 my-2 text-xl ">{error}</p>
                )}
                {success && (
                  <p className="bg-green-500 p-3 my-2 text-xl ">{success}</p>
                )}
                <p className="text-4xl text-gray-800 text-center font-semibold my-4 sm:mb-6">
                  Password Reset
                </p>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex justify-around items-center mb-6">
                  <Link to={"/login"} className="text-gray-800">
                    Back to Login
                  </Link>
                </div>

                <div className="text-center lg:text-left">
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;

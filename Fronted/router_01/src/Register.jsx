import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
 
  const navigateLogin= useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  let inputHandler = (e) => {
    const { name, value } = e.target;

    setCredentials((oldData) => ({ ...oldData, [name]: value }));
  };
  const submitButton = (e) => {
    e.preventDefault();

     
    axios
      .post("http://localhost:8080/register", {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password, 
      })
      .then((response) => {
        console.log(response.data);
        
        if(response.data === true) {
          alert("Registration Successful");
          navigateLogin("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          Create Account
        </h2>
        <form onSubmit={submitButton}>
          <div className="mb-4">
            <label
              className="block mb-2 text-gray-700 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              value={credentials.name}
              onChange={inputHandler}
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              value={credentials.email}
              onChange={inputHandler}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-gray-700 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              value={credentials.password}
              onChange={inputHandler}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold rounded hover:from-blue-600 hover:to-green-500 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;

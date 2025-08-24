import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const[credentials, setCredentials] = React.useState({
    email: "",
    password: ""
  });

  const navigateDashboard=useNavigate();
  const navigateWellcome=useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }

  const submitButton = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8080/login",{email: credentials.email, password: credentials.password}) //we can pass the credentials directly
      .then((response) => {
        
        if(response.data==''){
          alert("Invalid Credential")
          navigateWellcome("/");
        }else{
          navigateDashboard("/dashboard",{state: response.data.email});
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login failure (e.g., show error message)
      });
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-400 via-blue-300 to-cyan-200">
      <div className="w-full max-w-md bg-white/90 p-10 rounded-2xl shadow-lg border border-blue-100">
        <h2 className="text-4xl font-black mb-8 text-center text-indigo-600 tracking-wide drop-shadow">
          Sign In
        </h2>
        <form>
          <div className="mb-5">
            <label
              className="block mb-2 text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
             name="email"
             value={credentials.email}
             onChange={inputHandler}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-7">
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
              className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
              placeholder="Your password"
              required
            />
          </div>
          <button
            onClick={submitButton}
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition duration-150"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateForm() {
  const location = useLocation();
  const navigateDashBoard = useNavigate();

  // if no state is passed (direct access to /updateform), use empty defaults
  //here we can use only id from the updatebutton and fire query to get the data use useParams
  const empData = location.state || {
    id: 0,
    name: "",
    email: "",
    password: "",
  };

  const [stoerData, setStoreData] = useState(empData);

  const inputHandler = (e) => {
    const { name, value } = e.target;
     setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  const submitButton = (e) => {
    e.preventDefault();

      axios
        .put("http://localhost:8080/update", stoerData)
        .then((response) => {
          
          alert("Updated Successfully");
          setStoreData({
            id: 0,
            name: "",
            email: "",
            password: "",
          });
          if(response.data){
            navigateDashBoard("/dashboard");
          }
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
  };
  return (
    <>
      <div>
        
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
            Update Account
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
                value={stoerData.name}
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
                value={stoerData.email}
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
                value={stoerData.password}
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
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateForm
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import { useLocation } from "react-router-dom";

function Dashboard() {

   const location = useLocation();

  const [emploees, setEmployees] = useState([]);

 
    const[email,setEmail]= useState(location.state || "");
    useEffect(() => {
      axios.get("http://localhost:8080/getAll").then((response) => {
        setEmployees(response.data);
      });
    }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-green-400 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-2xl tracking-wide">
              Employee
            </span>
          </div>
          <a
            href="/"
            className="px-5 py-2 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-blue-500 hover:text-white transition duration-150"
          >
            Log Out
          </a>
        </div>
      </header>
       
       <div>
        <h2 className="text-3xl font-bold text-center mt-6 text-gray-800">
          Welcome, <span className="text-green-600">{email}</span>
        </h2>
       </div>
      <div className="max-w-4xl mx-auto mt-10 px-2 border-l-4 border-r-4 border-blue-500 rounded-lg">
        <table className="w-full bg-white rounded-lg shadow overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-2 text-left font-bold text-white bg-gradient-to-r from-blue-500 to-green-400">
                Id
              </th>
              <th className="py-2 px-2 text-left font-bold text-white bg-gradient-to-r from-blue-500 to-green-400">
                Name
              </th>
              <th className="py-2 px-2 text-left font-bold text-white bg-gradient-to-r from-blue-500 to-green-400">
                Email
              </th>
              <th className="py-2 px-2 text-left font-bold text-white bg-gradient-to-r from-blue-500 to-green-400">
                Password
              </th>
              <th className="py-2 px-2 text-center font-bold text-white bg-gradient-to-r from-pink-500 to-red-400 rounded-tr-lg">
                {/* Action field with new color and rounded top-right */}
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {emploees.map((emp, index) => (
              <tr
                key={index}
                className="border-b-2 border-blue-200 hover:bg-blue-50"
              >
                <td className="py-2 px-2">{emp.id}</td>
                <td className="py-1 px-2">{emp.name}</td>
                <td className="py-1 px-2">{emp.email}</td>
                <td className="py-1 px-2">{"*".repeat(emp.password.length)}</td>

                <td className="py-4 px-3">
                  <div className="flex justify-center gap-4">
                    <DeleteButton emp={emp} setEmployees={setEmployees} />
                    <UpdateButton emp={emp} setEmployees={setEmployees} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;

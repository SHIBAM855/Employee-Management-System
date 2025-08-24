import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateButton({ emp, setEmployees }) {

  const navigateRegister = useNavigate();
  const [stoerData, setStoreData] = useState({
    id: 0,
    name: "",
    email: "",
    password: ""
  });

  const handleUpdate = (id) => {
    axios.get(`http://localhost:8080/getById/${id}`)
    .then((response) => {
      setStoreData(response.data);
       navigateRegister("/updateform", { state: response.data });
    });
  };
 


  return (
    <>
      <div>
        <button
          className="px-4 py-2 bg-gradient-to-r  from-blue-400  to-pink-300 text-white font-semibold rounded-full shadow  hover:to-blue-600 transition duration-150 flex items-center gap-2"
          onClick={() => handleUpdate(emp.id)}
        >
          Update
        </button>
      </div>

     
    </>
  );
}

export default UpdateButton;

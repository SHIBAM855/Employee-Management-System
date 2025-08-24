import axios from 'axios';
import React from 'react'

function DeleteButton({ emp, setEmployees }) {
    
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/delete/${id}`)

      .then((response) => {
        console.log(response.data);
        alert("Employee Deleted Successfully");
        setEmployees((prev) => prev.filter((employee) => employee.id != id));
      })
      .catch((error) => {
        console.error("There was an error deleting the employee!", error);
      });
  };
  return (
    <>
      <button
        className="px-4 py-2 bg-gradient-to-r  from-blue-200  to-pink-300 text-white font-semibold rounded-full shadow hover:from-red-600 hover:to-pink-600 transition duration-150 flex items-center gap-2"
        onClick={() => handleDelete(emp.id)}
      >
        Delete
      </button>
    </>
  );
}

export default DeleteButton
import React from "react";
import Header from "./Header";

function Wellcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-purple-100">
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="bg-white/90 rounded-2xl shadow-xl px-10 py-12 max-w-lg text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4 drop-shadow">
            Welcome, Employee!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We're glad to have you on board. Explore your dashboard, manage your
            profile, and get started with your tasks.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Employee"
            className="mx-auto mb-6 w-24 h-24 rounded-full shadow"
          />
          <a
            href="/#"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold rounded-full shadow hover:from-blue-600 hover:to-green-500 transition"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wellcome;

import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${backendUrl}api/user/admin`, {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token); // Persist token
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message);
      }
    //   console.log(response);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              className="rounded-md w-full py-2 px-3 border border-gray-300 outline-none focus:border-blue-500"
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              className="rounded-md w-full py-2 px-3 border border-gray-300 outline-none focus:border-blue-500"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            className="mt-4 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

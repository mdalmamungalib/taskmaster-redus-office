"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/features/users/userSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const { error, email } = useSelector((state) => state.userSlice);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (email) {
      toast.success("Sign-up successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [email, navigate]);

  const togglePasswordVisibility = () =>
    setShowPassword(!showPassword);

  const onSubmit = ({ name, email, password }) => {
    dispatch(
      createUser({
        email,
        password,
        name,
      })
    );
  };

  const password = watch("password");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-purple-50 md:p-8">
      <div className="w-full max-w-6xl mx-auto overflow-hidden bg-white shadow-lg rounded-2xl md:flex md:items-center">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5">
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid"
            alt="Sign up illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form Section */}
        <div className="w-full p-6 md:w-1/2 lg:w-2/5 sm:p-8 lg:p-12">
          <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-gray-900 text-center mb-6">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Email Field */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters",
                    },
                  })}
                  className="w-full px-4 py-3 pr-12 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 flex items-center right-4"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Login
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-sm text-gray-600">
            Create a new account?{" "}
            <Link
              to="/signUp"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </div>
          <div className="mt-2">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <span className="text-4xl"><FcGoogle /></span>
              Login Width Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

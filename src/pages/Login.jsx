import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://goatverse-backend-real-6yz46.ondigitalocean.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      navigate("/dashboard");
    } catch (err) {
      setErrors((prev) => ({ ...prev, email: err.message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-primary px-4'>
      <div
        className='
          bg-white
          rounded-[32px]
          w-full max-w-lg
          py-[100px] px-[48px]
          flex flex-col
          space-y-[24px]
          shadow-lg
        '
      >
        {/* Logo & Heading */}
        <div className='flex flex-col items-center space-y-3 mb-2'>
          <img src='/logo.png' alt='cantara pro' className='w-48 h-auto mb-4' />
          <h2 className='text-2xl font-semibold text-neutral_500'>Login</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Email Field */}
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 pt-7 flex items-center pointer-events-none justify-center '>
              <img
                src='/email.png'
                alt='email icon'
                className='w-5 h-5 object-contain'
              />
            </div>
            <label htmlFor='email' className='font-bold '>
              {" "}
              Email Address
            </label>
            <input
              type='text'
              name='email'
              placeholder='Enter your email or username'
              value={formData.email}
              onChange={handleChange}
              autoComplete='username'
              className={`w-full py-3 pl-12 pr-3 mt-1.5 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
            />

            {errors.email && (
              <p className='text-red-600 text-sm mt-1'>{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 pt-7 flex items-center pointer-events-none'>
              <img
                src='/password.png'
                alt='email icon'
                className='w-5 h-5 object-contain'
              />
            </div>
            <label htmlFor='password' className='font-bold '>
              {" "}
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              autoComplete='current-password'
              className={`w-full py-3 pl-12 pr-10 mt-1.5 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
            >
              <i
                className={`text-gray-400 text-lg ${
                  showPassword ? "ri-eye-off-line" : "ri-eye-line"
                }`}
              ></i>
            </div>
            {errors.password && (
              <p className='text-red-600 text-sm mt-1'>{errors.password}</p>
            )}
          </div>
          <div className='text-left'>
            <a
              href='/'
              className='text-sm text-primary_400 font-bold hover:underline'
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition flex justify-center items-center'
          >
            {isLoading ? (
              <>
                <svg
                  className='animate-spin h-5 w-5 mr-2 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 
                      0 0 5.373 0 12h4zm2 5.291A7.962 
                      7.962 0 014 12H0c0 3.042 1.135 
                      5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* Forgot Password */}
          <div>
            <p className='text-sm text-neutral_400 text-center mt-12'>
              New Scout?{" "}
              <a
                href='/signup'
                className='text-primary_400 font-bold hover:underline'
              >
                Sign Up here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

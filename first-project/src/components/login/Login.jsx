import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password } = formData;

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError("");
    console.log("Submitted!", formData);
    setFormData({ fullname: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-10">
      <div className="bg-white shadow-xl p-10 w-[350px] text-center rounded-lg">
        
        <h1 className="text-2xl font-bold text-teal-500">BTexx</h1>
        <h2 className="text-xl font-semibold mt-3">Seconds to sign up!</h2>

        {/* Google Button */}
        <button
          className="w-full border border-gray-300 mt-5 py-2 rounded-md flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-5">
          <div className="grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md mb-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Work email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md mb-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md mb-3"
            required
          />

          {error && <div className="text-red-500 text-sm mb-3">{error}</div>}

          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-md font-semibold"
          >
            Sign up with Email
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;

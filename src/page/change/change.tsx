import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff } from "lucide-react";
import Button from "../../components/Button/button";
import bgImage from "../../assets/fad41f600cf594b4b5e64f143070d50bd14bc482.jpg";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleChange = async () => {
    if (!password || !repeatPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    // TODO: API bo‘lsa shu yerga yozasan
    await new Promise((res) => setTimeout(res, 500));

    // SUCCESS → PROFILE PAGE
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex bg-[#f8faff]">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <div className="w-[380px]">

          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Change Password
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Enter your new password
          </p>

          {/* NEW PASSWORD */}
          <label className="text-sm text-blue-600">New password</label>
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-200 rounded-lg p-3 mt-1 outline-none focus:border-blue-500"
            />
            <EyeOff className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>

          {/* REPEAT PASSWORD */}
          <label className="text-sm text-blue-600">Repeat password</label>
          <div className="relative mb-8">
            <input
              type="password"
              placeholder="Repeat new password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full border border-blue-200 rounded-lg p-3 mt-1 outline-none focus:border-blue-500"
            />
            <EyeOff className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>

          <Button
            onClick={handleChange}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Change Password
          </Button>

          <button
            onClick={() => navigate("/forgot-password")}
            className="mt-4 text-blue-600 text-sm hover:underline"
          >
            ← Back
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 relative hidden md:block">
        <img
          src={bgImage}
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0 bg-blue-600/20"></div>
      </div>

    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import bgImage from "../../assets/fad41f600cf594b4b5e64f143070d50bd14bc482.jpg";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // demo flow (API o‘rniga)
    console.log("Reset link sent to:", email);

    // 👉 CHANGE PASSWORD PAGE GA O‘TADI
    navigate("/change-password");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* LEFT */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <div className="w-[380px]">

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full mb-10">
            Logotype
          </button>

          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Forgot password
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Enter your email to reset your password
          </p>

          <label className="text-sm text-blue-600">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-blue-200 rounded-lg p-3 mt-1 mb-6 outline-none focus:border-blue-500"
          />

          <Button
            onClick={handleSend}
            className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send reset link
          </Button>

          <button
            onClick={() => navigate("/signin")}
            className="text-blue-600 text-sm flex items-center gap-2 hover:underline"
          >
            ← Back to Sign in
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 relative hidden md:block">
        <img src={bgImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-600/20"></div>
      </div>

    </div>
  );
}
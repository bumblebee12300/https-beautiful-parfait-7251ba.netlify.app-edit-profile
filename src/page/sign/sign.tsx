import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import compyuter from "../../assets/image copy 2.png";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      
      <div className="bg-white w-[900px] h-[500px] flex rounded-xl shadow-lg overflow-hidden">
        
        {/* Left */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Sign in
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <Button className="w-full mb-4">
            Sign In
          </Button>

          <p
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 cursor-pointer"
          >
            Forgot password?
          </p>
        </div>

        {/* Right image */}
        <div className="w-1/2">
          <img
            src={compyuter}
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
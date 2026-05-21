import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Pencil } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        
        {/* Top Banner */}
        <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 relative">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white absolute -bottom-16 left-10 object-cover"
          />
        </div>

        {/* Content */}
        <div className="pt-20 px-10 pb-10">
          
          {/* Name + Edit */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Nozima Xasanova
              </h1>
              <p className="text-gray-500">
                Frontend Developer
              </p>
            </div>

            <button
              onClick={() => navigate("/edit-profile")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
            >
              <Pencil size={18} />
              Edit Profile
            </button>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            
            <div className="bg-gray-50 p-5 rounded-2xl">
              <h2 className="font-semibold text-lg mb-4">Personal Info</h2>

              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail size={18} />
                  nozima@gmail.com
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={18} />
                  +998 90 123 45 67
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={18} />
                  Tashkent, Uzbekistan
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 p-5 rounded-2xl">
              <h2 className="font-semibold text-lg mb-4">Statistics</h2>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-600">24</h3>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-purple-600">12</h3>
                  <p className="text-sm text-gray-500">Courses</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-green-600">5</h3>
                  <p className="text-sm text-gray-500">Awards</p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mt-8 bg-gray-50 p-5 rounded-2xl">
            <h2 className="font-semibold text-lg mb-3">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I am passionate frontend developer who loves creating modern
              websites using React, Tailwind CSS and beautiful UI designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
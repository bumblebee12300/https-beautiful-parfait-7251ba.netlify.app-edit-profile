import Button from "../../components/Button/button";
import { Phone, Mail, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans">
      
      {/* Navbar - Dizaynga mos oq va toza */}
      <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-10 md:px-20 sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-[#0066ff] tracking-tight">
          EduManSim
        </h1>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2 text-slate-600 font-medium">
            <Phone size={16} className="text-[#0066ff]" />
            <span className="text-sm">(90) 417-47-56</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2 border-slate-200 text-slate-600 rounded-xl h-10">
              <Globe size={16} />
              Eng
            </Button>

            <Button 
              onClick={() => navigate("/signin")}
              className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 rounded-xl h-10 font-bold transition-all shadow-lg shadow-blue-100"
            >
              Log in
            </Button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center py-16 px-10 gap-16 lg:gap-32">
        
        {/* Left Form - Dizayndagi kabi yumshoq ko'k inputlar bilan */}
        <div className="bg-white w-full max-w-[480px] p-10 rounded-[32px] shadow-xl shadow-blue-900/5">
          <h2 className="text-2xl font-bold text-[#022144] text-center mb-8">
            Fill out an application
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-[#f0f6ff] border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
              <input type="text" placeholder="Surname" className="bg-[#f0f6ff] border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            </div>
            <input type="text" placeholder="+998" className="w-full bg-[#f0f6ff] border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            <input type="email" placeholder="Email" className="w-full bg-[#f0f6ff] border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            <input type="text" placeholder="Company name" className="w-full bg-[#f0f6ff] border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all" />

            <Button className="w-full h-14 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-200 mt-4">
              Send Application
            </Button>
          </form>

          <div className="mt-8 border-t border-slate-100 pt-6 flex items-center justify-between">
            <span className="text-sm text-slate-400 font-medium">
              Already registered?
            </span>
            <button 
              onClick={() => navigate("/signin")}
              className="text-[#0066ff] font-bold hover:underline transition-all"
            >
              Go to Login
            </button>
          </div>
        </div>

        {/* Right Side - Matnli qism */}
        <div className="max-w-md text-center lg:text-left">
          <span className="bg-blue-50 text-[#0066ff] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Get Started
          </span>
          <h2 className="text-5xl font-extrabold text-[#022144] mb-6 leading-tight">
            Request <span className="text-[#0066ff]">demo</span>
          </h2>

          <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
            If you want to know more about options and opportunities,
            fill out the application and enjoy <span className="text-[#022144] font-bold">14 days for free</span>.
          </p>

          <div className="space-y-5">
            <h3 className="text-[#022144] font-bold text-lg">
              Contact us for questions:
            </h3>

            <div className="flex flex-col gap-4 items-center lg:items-start">
              <div className="flex items-center gap-4 text-slate-600 bg-white p-4 rounded-2xl w-full max-w-[300px] shadow-sm border border-slate-50">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0066ff]"><Phone size={20} /></div>
                <span className="font-bold">(90) 417-47-56</span>
              </div>

              <div className="flex items-center gap-4 text-slate-600 bg-white p-4 rounded-2xl w-full max-w-[300px] shadow-sm border border-slate-50">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0066ff]"><Mail size={20} /></div>
                <span className="font-bold">info@edumansim.uz</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
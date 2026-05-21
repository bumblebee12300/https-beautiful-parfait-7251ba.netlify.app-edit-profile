import Button from "../../components/Button/button";
import { Phone, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Navbar */}
      <header className="h-20 w-full border-b flex items-center justify-between px-10 bg-white">
        <h1 className="text-3xl font-bold text-blue-600">
          EduManSim
        </h1>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={18} />
            <span>(90) 417-47-56</span>
          </div>

          <Button variant="outline">
            <Globe className="mr-2 h-4 w-4" />
            Uz
          </Button>

          {/* Login page */}
          <Button onClick={() => navigate("/login")}>
            Kirish
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="flex-1 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-white text-5xl md:text-7xl font-bold max-w-4xl">
            Ta’lim uchun qulay boshqaruv tizimi
          </h2>

          <p className="text-gray-200 text-xl mt-6 max-w-2xl">
            O‘quv jarayonini boshqarish, hisobotlar va kommunikatsiya
          </p>

          {/* Demo button → login page */}
          <Button
            className="mt-8 px-10 py-6 text-lg"
            onClick={() => navigate("/login")}
          >
            Demo so‘rash
          </Button>
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm z-10">
          © 2024 edumansim.uz
        </div>
      </section>
    </div>
  );
}
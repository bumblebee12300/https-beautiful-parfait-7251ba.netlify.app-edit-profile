// src/components/header/Header.tsx

import {
  Bell,
  Search,
  Settings,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-white border-b px-6 flex items-center justify-between">
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back, Nozima 👋
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 h-11 rounded-xl">
          <Search className="w-4 h-4 text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm"
          />
        </div>

        {/* NOTIFICATION */}
        <button className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-gray-100 transition">
          <Bell className="w-5 h-5" />
        </button>

        {/* SETTINGS */}
        <button className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-gray-100 transition">
          <Settings className="w-5 h-5" />
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <h3 className="text-sm font-semibold">
              Nozima
            </h3>

            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
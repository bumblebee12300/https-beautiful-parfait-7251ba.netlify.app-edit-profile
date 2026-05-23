// src/components/sidebar/Sidebar.tsx

import {
  LayoutDashboard,
  User,
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Profile",
      icon: User,
    },
    {
      title: "Students",
      icon: Users,
    },
    {
      title: "Teachers",
      icon: GraduationCap,
    },
    {
      title: "Groups",
      icon: BookOpen,
    },
    {
      title: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-[280px] h-screen bg-white border-r p-5 flex flex-col justify-between">
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">
            EduAdmin
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Dashboard Panel
          </p>
        </div>

        {/* MENU */}
        <nav className="space-y-2">
          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all
                  
                  ${
                    index === 0
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                <Icon className="w-5 h-5" />

                <span className="font-medium">
                  {item.title}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-red-50 text-red-500 transition-all">
        <LogOut className="w-5 h-5" />

        <span className="font-medium">
          Logout
        </span>
      </button>
    </aside>
  );
}
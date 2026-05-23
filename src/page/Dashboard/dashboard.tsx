import {
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  ArrowUpRight,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    job: "",
    telegram: "",
    phone: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("profile");

    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  const stats = [
    { title: "Students", value: "1,245", icon: Users },
    { title: "Teachers", value: "48", icon: GraduationCap },
    { title: "Groups", value: "32", icon: BookOpen },
    { title: "Settings", value: "12", icon: Settings },
  ];

  return (
    <div className="space-y-6">

      {/* WELCOME PROFILE CARD */}
      <div className="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 className="text-xl font-bold">
          Welcome {profile.name || "User"} 👋
        </h2>

        <p className="text-gray-500">
          {profile.job || "No job yet"}
        </p>
      </div>

      {/* TOP */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back 👋</p>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-xl">
          Create New
        </button>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
                </div>

                <div className="p-3 rounded-xl bg-gray-100">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-center gap-1 mt-6 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                +12% this month
              </div>
            </div>
          );
        })}
      </div>

      {/* CONTENT */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* RECENT STUDENTS */}
        <div className="lg:col-span-2 bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Recent Students
          </h2>

          {["Nozima", "Ali", "Jasur", "Madina", "Aziza"].map(
            (student, index) => (
              <div
                key={index}
                className="flex justify-between border rounded-xl p-4 mb-3"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                    {student[0]}
                  </div>

                  <div>
                    <p className="font-medium">{student}</p>
                    <p className="text-sm text-gray-500">
                      Frontend Student
                    </p>
                  </div>
                </div>

                <button className="bg-gray-100 px-4 py-2 rounded-xl">
                  Profile
                </button>
              </div>
            )
          )}
        </div>

        {/* ACTIVITY */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Activity
          </h2>

          {[
            "New student added",
            "Teacher updated profile",
            "New group created",
            "Settings changed",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 mb-4">
              <div className="w-2 h-2 mt-2 bg-black rounded-full"></div>
              <div>
                <p className="text-sm font-medium">{item}</p>
                <span className="text-xs text-gray-500">
                  2 min ago
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
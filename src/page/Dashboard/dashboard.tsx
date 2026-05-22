import {
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Students",
      value: "1,245",
      icon: Users,
    },
    {
      title: "Teachers",
      value: "48",
      icon: GraduationCap,
    },
    {
      title: "Groups",
      value: "32",
      icon: BookOpen,
    },
    {
      title: "Settings",
      value: "12",
      icon: Settings,
    },
  ];

  return (
    <div className="space-y-6">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back 👋
          </p>
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
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Recent Students
            </h2>

            <button className="border px-4 py-2 rounded-xl">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {[
              "Nozima",
              "Ali",
              "Jasur",
              "Madina",
              "Aziza",
            ].map((student, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                    {student.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-medium">
                      {student}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Frontend Student
                    </p>
                  </div>
                </div>

                <button className="bg-gray-100 px-4 py-2 rounded-xl">
                  Profile
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Activity
          </h2>

          <div className="space-y-5">
            {[
              "New student added",
              "Teacher updated profile",
              "New group created",
              "Settings changed",
            ].map((activity, index) => (
              <div
                key={index}
                className="flex gap-3"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-black" />

                <div>
                  <p className="text-sm font-medium">
                    {activity}
                  </p>

                  <span className="text-xs text-gray-500">
                    2 min ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
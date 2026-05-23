import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  const profile = location.state?.profile || {
    name: "",
    surname: "",
    job: "",
    telegram: "",
    phone: "",
  };

  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [job, setJob] = useState(profile.job);
  const [telegram, setTelegram] = useState(profile.telegram);
  const [phone, setPhone] = useState(profile.phone);

  const handleSave = () => {
    navigate("/dashboard/profile");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[450px] bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-5">
          Edit Profile
        </h1>

        <input
          className="border p-3 rounded-lg w-full mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg w-full mb-3"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg w-full mb-3"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg w-full mb-3"
          placeholder="Telegram"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg w-full mb-5"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          Save
        </button>
      </div>
    </div>
  );
}
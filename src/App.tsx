import { Routes, Route } from "react-router-dom";

import Home from "./page/home/home";
import Login from "./page/login/login";
import SignIn from "./page/sign/sign";
import ForgotPassword from "./page/forgot/forgot";
import ChangePassword from "./page/change/change";

import Profile from "./page/profile/profile";
import EditProfile from "./page/Edit/editprofile";

import DashboardLayout from "./components/dashboardlaylout/DashboardLaylout";
import Dashboard from "./page/Dashboard/dashboard";

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />

      {/* DASHBOARD ROUTES */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="profile" element={<Profile />} />

        <Route
          path="edit-profile"
          element={<EditProfile />}
        />
      </Route>
    </Routes>
  );
}

export default App;
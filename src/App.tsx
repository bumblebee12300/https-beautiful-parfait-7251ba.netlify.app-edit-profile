import { Routes, Route } from "react-router-dom";
import Home from "./page/home/home";
import Login from "./page/login/login";
import SignIn from "./page/sign/sign";
import ForgotPassword from "./page/forgot/forgot";
import ChangePassword from "./page/change/change";
import Profile from "./page/profile/profile";
import EditProfile from "./page/Edit/editprofile";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    
  );
}

export default App;
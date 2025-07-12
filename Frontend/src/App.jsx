import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/AdminLogin';
import UserLoginPage from "./components/Login";
 import Dashboard from './components/DashBoard';
import UserOnboarding from "./components/UserOnBoard";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route can redirect or be user login */}
        <Route path="/" element={<UserLoginPage  />} />

        {/* User Login Page */}
        <Route path="/login" element={<UserLoginPage />} />

        {/* Admin Login Page */}
        <Route path="/admin-login" element={<LoginPage />} />
        <Route path="/user-onboarding" element={<UserOnboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;

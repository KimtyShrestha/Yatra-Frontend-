import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import UpcomingTrips from './components/UpcomingTrips';
import TravelGroups from './components/TravelGroups';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/upcoming-trips" element={<UpcomingTrips />} />
        <Route path="/travel-groups" element={<TravelGroups/>} />
      </Routes>
    </Router>
  );
}

export default App;
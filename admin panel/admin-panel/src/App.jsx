import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectRoute from './components/ProtectRoute';   // ← აქ არის სწორი სახელი

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Trips from "./pages/Trips";
import Bookings from "./pages/Bookings";

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* საჯარო გვერდები */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* დაცული გვერდები */}
          <Route 
            path="/" 
            element={
              <ProtectRoute>
                <div className="flex h-screen bg-[#F1F5F9] overflow-hidden">
                  <Sidebar />
                  <main className="flex-1 overflow-y-auto ml-72 p-8">
                    <Dashboard />
                  </main>
                </div>
              </ProtectRoute>
            } 
          />

          <Route 
            path="/trips" 
            element={
              <ProtectRoute>
                <div className="flex h-screen bg-[#F1F5F9] overflow-hidden">
                  <Sidebar />
                  <main className="flex-1 overflow-y-auto ml-72 p-8">
                    <Trips />
                  </main>
                </div>
              </ProtectRoute>
            } 
          />

          <Route 
            path="/bookings" 
            element={
              <ProtectRoute>
                <div className="flex h-screen bg-[#F1F5F9] overflow-hidden">
                  <Sidebar />
                  <main className="flex-1 overflow-y-auto ml-72 p-8">
                    <Bookings />
                  </main>
                </div>
              </ProtectRoute>
            } 
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

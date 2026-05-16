import { LayoutDashboard, Bus, Calendar, LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-72 bg-slate-900 text-white h-screen flex flex-col fixed">
      {/* Header */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-black tracking-tighter">
          Admin <span className="text-blue-500">Panel</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-1">
        <div 
          onClick={() => navigate("/")} 
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 cursor-pointer transition text-slate-300 hover:text-white"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div 
          onClick={() => navigate("/trips")} 
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 cursor-pointer transition text-slate-300 hover:text-white"
        >
          <Bus size={20} />
          <span>Trips</span>
        </div>

        <div 
          onClick={() => navigate("/bookings")} 
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 cursor-pointer transition text-slate-300 hover:text-white"
        >
          <Calendar size={20} />
          <span>Bookings</span>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800 mt-auto">
        
      </div>
    </div>
  );
}
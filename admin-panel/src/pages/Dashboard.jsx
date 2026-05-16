import { useState } from 'react';

const Dashboard = () => {
  const [trips, setTrips] = useState([
    { id: 1, destination: "სათაფლია", date: "2026-05-05", status: "Active", passengers: 28 },
    { id: 2, destination: "გელათი", date: "2026-05-07", status: "Active", passengers: 15 },
    { id: 3, destination: "სიღნაღი", date: "2026-05-10", status: "Planned", passengers: 42 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [form, setForm] = useState({ destination: "", date: "", status: "Planned", passengers: "" });

  const openAddModal = () => {
    setEditingTrip(null);
    setForm({ destination: "", date: "", status: "Planned", passengers: "" });
    setShowModal(true);
  };

  const openEditModal = (trip) => {
    setEditingTrip(trip);
    setForm(trip);
    setShowModal(true);
  };

  const saveTrip = () => {
    if (editingTrip) {
      setTrips(trips.map(t => t.id === editingTrip.id ? { ...form, id: t.id } : t));
    } else {
      setTrips([...trips, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const deleteTrip = (id) => {
    if (window.confirm("do you want to delete?")) {
      setTrips(trips.filter(t => t.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      {/* Welcome + Stats */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Dashboard</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Friday, May 1st 2026</p>
          <p className="text-lg font-semibold text-emerald-600">All systems operational</p>
        </div>
      </div>

      {/* Beautiful Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-500/30">
          <p className="text-blue-200 text-sm">TOTAL BUSES</p>
          <p className="text-6xl font-black mt-2">42</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 rounded-3xl shadow-xl shadow-emerald-500/30">
          <p className="text-emerald-200 text-sm">ACTIVE NOW</p>
          <p className="text-6xl font-black mt-2">39</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-3xl shadow-xl shadow-orange-500/30">
          <p className="text-amber-200 text-sm">ON BREAK</p>
          <p className="text-6xl font-black mt-2">18</p>
        </div>
        <div className="bg-gradient-to-br from-rose-500 to-red-600 text-white p-8 rounded-3xl shadow-xl shadow-red-500/30">
          <p className="text-rose-200 text-sm">IN SERVICE</p>
          <p className="text-6xl font-black mt-2">4</p>
        </div>
      </div>

      {/* Trips Management Table */}
      <div className="bg-white rounded-3xl shadow">
        <div className="flex justify-between items-center p-8 border-b">
          <h3 className="text-2xl font-bold">Recent / Upcoming Trips</h3>
          <button 
            onClick={openAddModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2"
          >
            + Add New Trip
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-6">Destination</th>
              <th className="text-left p-6">Date</th>
              <th className="text-left p-6">Status</th>
              <th className="text-left p-6">Passengers</th>
              <th className="text-right p-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trips.map(trip => (
              <tr key={trip.id} className="border-b hover:bg-slate-50">
                <td className="p-6 font-medium">{trip.destination}</td>
                <td className="p-6">{trip.date}</td>
                <td className="p-6">
                  <span className={`px-4 py-1 rounded-full text-sm ${trip.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {trip.status}
                  </span>
                </td>
                <td className="p-6">{trip.passengers}</td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => openEditModal(trip)} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => deleteTrip(trip.id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-6">{editingTrip ? "Edit Trip" : "Add New Trip"}</h2>
            
            <input type="text" placeholder="Destination" value={form.destination} onChange={e => setForm({...form, destination: e.target.value})} className="w-full p-4 border rounded-2xl mb-4" />
            <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full p-4 border rounded-2xl mb-4" />
            
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full p-4 border rounded-2xl mb-4">
              <option value="Planned">Planned</option>
              <option value="Active">Active</option>
            </select>
            
            <input type="number" placeholder="Passengers" value={form.passengers} onChange={e => setForm({...form, passengers: e.target.value})} className="w-full p-4 border rounded-2xl mb-6" />

            <div className="flex gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 py-4 border rounded-2xl font-medium">Cancel</button>
              <button onClick={saveTrip} className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
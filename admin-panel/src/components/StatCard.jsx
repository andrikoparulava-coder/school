export default function StatCard({ title, value, icon: Icon, gradient }) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-white shadow-lg ${gradient}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</h3>
      <p className="text-3xl font-black text-slate-800 mt-1">{value}</p>
    </div>
  );
} 
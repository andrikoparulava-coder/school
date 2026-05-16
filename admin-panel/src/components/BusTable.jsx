const StatusBadge = ({ status }) => {
  const styles = {
  };

};

export default function BusTable() {
  const data = [ 
   
  ];
  
  return (
    <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
      <table className="w-full">
        <thead>  

        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.map((bus) => (
            <tr key={bus.id} className="hover:bg-blue-50/40 transition-colors group">
              <td className="px-10 py-6">
                <div className="font-bold text-slate-800">{bus.id}</div>
                <div className="text-xs text-slate-400">{bus.model}</div>
              </td>
              <td className="px-8 py-6 text-sm font-semibold text-slate-600">{bus.driver}</td>
              <td className="px-8 py-6"><StatusBadge status={bus.status} /></td>
              <td className="px-10 py-6 text-right">
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
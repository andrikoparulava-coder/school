function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div className={`flex items-center p-3 cursor-pointer ${active ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
      {Icon && <Icon size={22} />}
      <span className="ml-3 font-semibold text-sm">{label}</span>
    </div>
  );
}

export default SidebarItem;
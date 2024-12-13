import React from "react";
import { Home, Info, Image, Mail, Search } from "lucide-react";

const MobileMenu = () => {
  const menuItems = [
    { id: "beranda", label: "Beranda", Icon: Home },
    { id: "info", label: "Informasi", Icon: Info },
    { id: "galeri", label: "Galeri", Icon: Image },
    { id: "kontak", label: "Kontak", Icon: Mail },
  ];

  return (
    <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`flex items-center px-6 py-2 space-x-2 text-gray-700 hover:text-blue-600 transition font-medium`}
        >
          <item.Icon className="w-5 h-5" />
          <span>{item.label}</span>
        </a>
      ))}
      <div className="flex items-center px-6 py-2 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
        <input
          type="text"
          placeholder="Cari..."
          className="pl-10 pr-4 py-2 bg-white/60 backdrop-blur-md border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
    </div>
  );
};

export default MobileMenu;

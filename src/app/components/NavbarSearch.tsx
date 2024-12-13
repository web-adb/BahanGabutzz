import React from "react";
import { Search } from "lucide-react";

interface NavbarSearchProps {
  className?: string;
}

const NavbarSearch: React.FC<NavbarSearchProps> = ({ className }) => {
  return (
    <div className={`items-center relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
      <input
        type="text"
        placeholder="Cari..."
        className="pl-10 pr-4 py-2 bg-white/60 backdrop-blur-lg border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default NavbarSearch;

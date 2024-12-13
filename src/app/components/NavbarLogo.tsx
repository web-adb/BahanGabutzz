import React from "react";

const NavbarLogo = () => {
  return (
    <a href="#beranda" className="flex items-center space-x-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4135/4135890.png"
        alt="Logo Icon"
        className="w-8 h-8"
      />
      <span className="text-2xl font-bold text-blue-600">Wisata Gunung</span>
    </a>
  );
};

export default NavbarLogo;

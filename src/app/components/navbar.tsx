"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/60 backdrop-blur-lg shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarSearch className="hidden md:flex" />
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;

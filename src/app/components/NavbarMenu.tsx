import React, { useEffect, useState } from "react";
import { Home, Info, Image, Mail } from "lucide-react";

const NavbarMenu = () => {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const menuItems = [
    { id: "beranda", label: "Beranda", Icon: Home },
    { id: "info", label: "Informasi", Icon: Info },
    { id: "galeri", label: "Galeri", Icon: Image },
    { id: "kontak", label: "Kontak", Icon: Mail },
  ];

  return (
    <div className="hidden md:flex space-x-8 justify-center flex-grow">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition font-medium ${
            activeSection === item.id ? "text-blue-600 font-semibold" : ""
          }`}
        >
          <item.Icon className="w-5 h-5" />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default NavbarMenu;

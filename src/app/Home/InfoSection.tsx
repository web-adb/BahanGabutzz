import React from "react";
import { Mountain, Info, MapPin } from "lucide-react";

const InfoSection = () => {
  const infoCards = [
    {
      title: "Gunung Tertinggi",
      description:
        "Jelajahi puncak tertinggi dengan jalur yang aman dan menantang bagi pendaki dari segala tingkat.",
      Icon: Mountain,
    },
    {
      title: "Informasi Wisata",
      description:
        "Dapatkan panduan lengkap tentang lokasi, waktu terbaik untuk mendaki, dan tips perjalanan.",
      Icon: Info,
    },
    {
      title: "Lokasi Strategis",
      description:
        "Akses mudah dengan jalur transportasi umum dan area parkir luas untuk kendaraan pribadi.",
      Icon: MapPin,
    },
  ];

  return (
    <div id="info" className="container mx-auto px-6 md:px-12 py-10 space-y-8">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Temukan Keindahan Alami
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Nikmati keindahan gunung, udara segar, dan pemandangan spektakuler yang
        tidak akan Anda lupakan.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full">
                <card.Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-600 mt-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

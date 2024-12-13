import React from "react";

const GallerySection = () => {
  return (
    <div id="galeri" className="container mx-auto px-6 md:px-12 py-10 space-y-8">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Galeri Keindahan
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array(8)
          .fill(null)
          .map((_, idx) => (
            <img
              key={idx}
              src={`https://picsum.photos/300/200?random=${idx}`}
              alt={`Galeri ${idx}`}
              className="rounded-lg shadow-md hover:shadow-lg transition duration-300 object-cover w-full h-full"
            />
          ))}
      </div>
    </div>
  );
};

export default GallerySection;

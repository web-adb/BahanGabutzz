import React from "react";

const ContactSection = () => {
  return (
    <div id="kontak" className="container mx-auto px-6 md:px-12 py-10 space-y-8">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Hubungi Kami
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut,
        jangan ragu untuk menghubungi kami.
      </p>
      <form className="max-w-3xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Pesan"
          rows={5}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactSection;

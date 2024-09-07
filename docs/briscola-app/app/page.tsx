import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-8">
      {/* Prima card */}
      <div className="relative w-[300px] h-[400px] overflow-hidden bg-gray-200 rounded-lg shadow-lg group">
        {/* Immagine */}
        <img
          src="/img.webp" // Percorso relativo alla cartella public
          alt="Giocatori di Briscola"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-100%]"
        />
        {/* Bottone nascosto sotto l'immagine */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Gioca a Briscola
          </button>
        </div>
      </div>

      {/* Seconda card (duplicata) */}
      <div className="relative w-[300px] h-[400px] overflow-hidden bg-gray-200 rounded-lg shadow-lg group">
        {/* Immagine */}
        <img
          src="/img.webp" // Puoi cambiare l'immagine se necessario
          alt="Giocatori di Briscola"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-100%]"
        />
        {/* Bottone nascosto sotto l'immagine */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Gioca a Briscola
          </button>
        </div>
      </div>
    </div>
  );
}

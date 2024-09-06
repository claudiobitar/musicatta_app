// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./components/Modal"; // Importe o modal
import Header from "./components/Header";
import Logo from "./components/Logo"; // Importe o Logo

// Definindo a interface para os arquivos MP3
interface Mp3File {
  name: string;
  url: string;
}

import mp3Files from './data/mp3Files.json'; // Caminho do JSON

export default function Mp3ListPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMp3, setSelectedMp3] = useState<Mp3File | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  const openModal = (mp3: Mp3File) => {
    setSelectedMp3(mp3);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMp3(null);
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-slate-800"
        style={{
          backgroundImage: "url('/images/mesa_de_som_transp2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Logo /> {/* Usando o componente Logo */}
        <div className="container mx-auto flex flex-col items-center text-white">
          <div
            className="w-full max-w-2xl bg-gray-800 bg-opacity-80 shadow-2xl rounded-lg p-6"
            style={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-white bg-fixed"></h1>
              <button
                onClick={handleLogout}
                className="text-slate-300 px-4 hover:underline hover:text-slate-100 cursor-pointer select-none"
              >
                Sair (Logout)
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <ul className="space-y-4">
                {mp3Files.map((mp3, index) => (
                  <li
                    key={index}
                    className="bg-gray-700 bg-opacity-75 p-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => openModal(mp3)}
                    >
                      <span className="text-lg font-medium text-gray-100">
                        {mp3.name}
                      </span>

                      <div className="flex items-center text-indigo-400 hover:text-indigo-200 transition duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                          />
                        </svg>
                        <span className="ml-2">Ouvir</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {selectedMp3 && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            mp3Url={selectedMp3.url}
            mp3Name={selectedMp3.name}
          />
        )}
      </div>
    </>
  );
}

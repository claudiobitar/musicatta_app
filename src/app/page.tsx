"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Logo from "./components/Logo";

// Definindo a interface para os arquivos MP3
interface Mp3 {
  name: string;
  url: string;
  new: boolean;
  category: string; // Adicionada a propriedade 'category'
}

import mp3List from "./data/mp3_list.json"; // Caminho do JSON

export default function Mp3ListPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMp3, setSelectedMp3] = useState<Mp3 | null>(null);

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

  const openModal = (mp3: Mp3) => {
    setSelectedMp3(mp3);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMp3(null);
  };

  // Função para renderizar uma lista de músicas por categoria
  const renderCategory = (category: string, title: string) => {
    const filteredMp3s = mp3List.filter((mp3) => mp3.category === category);
    if (filteredMp3s.length === 0) return null; // Se não houver músicas, não renderiza nada

    return (
      <>
        <div className="flex items-center mt-6 mb-4">
          <div className="w-4 h-4 bg-green-500 mr-2"></div>
          <h2 className="text-[20px] text-white leading-none">{title}</h2>
        </div>
        <ul className="space-y-4">
          {filteredMp3s.map((mp3, index) => (
            <li
              key={index}
              className="bg-gray-700 bg-opacity-75 p-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => openModal(mp3)}
              >
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-100">
                    {mp3.name}
                  </span>
                  {mp3.new && (
                    <span className="ml-2.5 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Novo
                    </span>
                  )}
                </div>
                <div className="flex items-center text-indigo-400 hover:text-indigo-200 transition duration-300 pl-5">
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
      </>
    );
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
        <Logo />
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

            {/* Renderizando as categorias */}
            {renderCategory("main", "Selecionadas")}
            {renderCategory("without_guitar", "Sem guitarra")}
            {renderCategory("others", "Outras")}
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

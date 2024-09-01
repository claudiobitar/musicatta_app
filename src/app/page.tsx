"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./components/Modal"; // Importe o modal
import Header from "./components/Header";

// Definindo a interface para os arquivos MP3
interface Mp3File {
  name: string;
  url: string;
}

export default function Mp3ListPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMp3, setSelectedMp3] = useState<Mp3File | null>(null); // Tipagem correta

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // Ou pode retornar um loading spinner enquanto verifica a autenticação
  }

  // Array de MP3s tipado
  const mp3Files: Mp3File[] = [
    {
      name: "Ciclo Vicioso (2023-12-18)",
      url: "/mp3/CicloVicioso(2023-12-18).m4a",
    },
    {
      name: "Espiral do Regresso (2019-11-08)",
      url: "/mp3/EspiralDoRegresso(2019-11-08).mp3",
    },
    {
      name: "Silêncio (2022-07-30)",
      url: "/mp3/Silencio(2022-07-30).m4a",
    },
    {
      name: "Almas Cinzentas (2023-12-18)",
      url: "/mp3/AlmasCinzentas(2023-12-18).m4a",
    },
    {
      name: "O Preço que se Paga (2019-08-20)",
      url: "/mp3/OPreçoQueSePAga(2019-08-20).mp3",
    },
    {
      name: "Novo Sol (2022-07-30)",
      url: "/mp3/NovoSol(2022-07-30).m4a",
    },
    {
      name: "Dentro da Noite (2019-11-08)",
      url: "/mp3/DentroDaNoite(2019-11-08).mp3",
    },
    {
      name: "Fora da Curva (2019-11-08)",
      url: "/mp3/ForaDaCurva(2019-11-08).mp3",
    },
  ];

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
    <Header/> 
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
      <h1
        className="text-7xl py-7 tracking-wide flex justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <object
          type="image/svg+xml"
          data="/svg/logo_vetor.svg"
          className="w-[80%] sm:w-[400px] h-auto mx-auto"
        >
          Seu navegador não suporta SVG.
        </object>
      </h1>

      <div className="container mx-auto flex flex-col items-center text-white">
        <div
          className="w-full max-w-2xl bg-gray-800 bg-opacity-80 shadow-2xl rounded-lg p-6"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-white bg-fixed"></h1>
            <a
              onClick={handleLogout}
              className="text-slate-300 px-4 hover:underline hover:text-slate-100 cursor-pointer"
            >
              Sair (Logout)
            </a>
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

      {/* Modal para o player de MP3 */}
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

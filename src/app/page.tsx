"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Logo from "./components/Logo";

interface Mp3 {
  name: string;
  url: string;
  new: boolean;
  category: string;
}

const fetcher = (url: string) =>
  fetch(url, { headers: { "Cache-Control": "no-cache" } }).then((res) =>
    res.json()
  );

export default function Mp3ListPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMp3, setSelectedMp3] = useState<Mp3 | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const {
    data: mp3s,
    error,
    mutate,
  } = useSWR<Mp3[]>("/api/getMp3s", fetcher, { refreshInterval: 10000 });

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
    if (mp3.category === "sheet music") {
      window.open(mp3.url, "_blank"); // abre o PDF em nova aba
    } else {
      setSelectedMp3(mp3);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMp3(null);
  };

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const renderCategory = (category: string, title: string) => {
    const filteredMp3s = mp3s?.filter((mp3) => mp3.category === category);
    if (!filteredMp3s || filteredMp3s.length === 0) return null;

    const isOpen = openCategory === category;

    return (
      <div className="w-full">
        <button
          className="w-full flex items-center justify-between bg-gray-700 p-4 rounded-md mb-2 shadow hover:bg-gray-700 transition duration-300"
          onClick={() => toggleCategory(category)}
        >
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-3 pb-3 squared-full"></div>

            <h2 className="text-lg text-white">{title}</h2>
          </div>
          <svg
            className={`w-5 h-5 text-white transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[9999px]" : "max-h-0"
          }`}
        >
          <ul className="space-y-4 px-2 pt-2 pb-4">
            {filteredMp3s.map((mp3, index) => (
              <li
                key={index}
                className={`bg-gray-700 bg-opacity-75 p-4  rounded-md shadow-md transition-all duration-500 ease-in-out
                  ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }
                `}
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
                    {mp3.category === "sheet music" ? (
                      <>
                        {/* Ícone de documento */}
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
                            d="M19.5 14.25v4.125a2.625 2.625 0 0 1-2.625 2.625H7.125A2.625 2.625 0 0 1 4.5 18.375V5.625A2.625 2.625 0 0 1 7.125 3h6.375L19.5 8.25v6z"
                          />
                        </svg>
                        <span className="ml-2">Abrir PDF</span>
                      </>
                    ) : (
                      <>
                        {/* Ícone de play */}
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
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
              <h1 className="text-3xl font-bold text-white bg-fixed">
                Arquivos
              </h1>
              <button
                onClick={handleLogout}
                className="text-slate-300 px-4 hover:underline hover:text-slate-100 cursor-pointer select-none"
              >
                Sair (Logout)
              </button>
            </div>

            {/* Categorias */}
            {renderCategory("main", "Áudio - Selecionadas")}
            {renderCategory("mids", "Áudio - MID's")}
            {renderCategory("early", "Áudio - Gravações Antigas")}
            {renderCategory("sheet music", "Partituras")}
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

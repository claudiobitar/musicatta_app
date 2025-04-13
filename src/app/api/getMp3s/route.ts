// src/app/api/getMp3s/route.ts
import { NextResponse } from 'next/server';

// Simulação de dados de MP3 para o exemplo

const mp3s = [  
  {
    name: "Ciclo Vicioso (2025-02-16)",
    url: "/mp3/CicloVicioso(2025-02-16).m4a",
    new: false,
    category: "main"
  }, 
  
  {
    name: "Espiral do Regresso (2019-11-08)",
    url: "/mp3/EspiralDoRegresso(2019-11-08).mp3",
    new: false,
    category: "main"
  },
  {
    name: "Silêncio (2022-07-30)",
    url: "/mp3/Silencio(2022-07-30).m4a",
    new: false,
    category: "main"
  },

  {
    name: "A Brigada do Ego (2025-02-23)",
    url: "/mp3/ABrigadaDoEgo(2025-02-23).m4a",
    new: false,
    category: "main"
  },

  {
    name: "Alma Cinzentas (2024-11-24)",
    url: "/mp3/AlmasCinzentas2_2024-11-24_.flac",
    new: false,
    category: "main"
  },
  
  {
    name: "O Preço que se Paga (2019-08-20)",
    url: "/mp3/OPreçoQueSePAga(2019-08-20).mp3",
    new: false,
    category: "main"
  },

  {
    name: "Olhos Vetados (2025-02-16)",
    url: "/mp3/OlhosVetados(2025-02-16).m4a",
    new: false,
    category: "main"
  },

  {
    name: "Inadequado (2025-02-23)",
    url: "/mp3/Inadequado(2025-02-23).m4a",
    new: false,
    category: "main"
  },

  {
    name: "Novo Sol (2024-09-22)",
    url: "/mp3/NovoSol(2024-09-22).m4a",
    new: false,
    category: "main"
  },
 
  {
    name: "Dentro da Noite (2019-11-08)",
    url: "/mp3/DentroDaNoite(2019-11-08).mp3",
    new: false,
    category: "main"
  },
  
  {
    name: "Groove Aliens",
    url: "/mp3/mids/Groove-aliens-mid-2_EDIT.flac",
    new: false,
    category: "mids"
  },
  
  {
    name: "Ciclo Vicioso (2023-12-18)",
    url: "/mp3/early/CicloVicioso(2023-12-18).m4a",
    new: false,
    category: "early"
  }   
];



export async function GET() {
  return NextResponse.json(mp3s);
}
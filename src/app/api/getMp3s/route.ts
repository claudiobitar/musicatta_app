// src/app/api/getMp3s/route.ts
import { NextResponse } from 'next/server';

// Simulação de dados de MP3 para o exemplo

const mp3s = [
  {
    name: "Ciclo Vicioso (2023-12-18)",
    url: "/mp3/CicloVicioso(2023-12-18).m4a",
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
    name: "Almas Cinzentas (2023-12-18)",
    url: "/mp3/AlmasCinzentas(2023-12-18).m4a",
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
    name: "Novo Sol (2022-07-30)",
    url: "/mp3/NovoSol(2022-07-30).m4a",
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
    name: "Espiral do Regresso - Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/EspiralDoRegresso_semGuitarra(2024-09-08).m4a",
    new: true,
    category: "without_guitar"
  },

  {
    name: "Silêncio - Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/Silencio_semGuitarra(2024-09-08).m4a",
    new: true,
    category: "without_guitar"
  },

  {
    name: "Almas Cinzentas - Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/AlmasCinzentas_semGuitarra(2024-09-08).m4a",
    new: true,
    category: "without_guitar"
  },

  {
    name: "O Preço que se Paga - Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/OPrecoQueSePaga_semGuitarra(2024-09-08).m4a",
    new: true,
    category: "without_guitar"
  },

  {
    name: "Novo Sol - Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/NovoSol_semGuitarra(2024-09-08)-1.m4a",
    new: true,
    category: "without_guitar"
  },

  {
    name: "Fora da Curva - VERSÃO NOVA Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/ForaDaCurva_semGuitarra(2024-09-09)-1.m4a",
    new: true,
    category: "without_guitar"
  },

  {
    name: "Dentro da Noite - Sem Guitarra (2024-09-08)",
    url: "/mp3/sem_guitarra/DentroDaNoite_semGuitarra(2024-09-08).m4a",
    new: true,
    category: "without_guitar"
  },
  
  {
    name: "Fora da Curva - VERSÃO ANTIGA (2019-11-08)",
    url: "/mp3/ForaDaCurva(2019-11-08).mp3",
    new: false,
    category: "others"
  },

  {
    name: "Teste",
    url: "/mp3/ForaDaCurva(2019-11-08).mp3",
    new: false,
    category: "others"
  } 
];



export async function GET() {
  return NextResponse.json(mp3s);
}
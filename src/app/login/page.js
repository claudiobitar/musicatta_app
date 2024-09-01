'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderLogin from "../components/HeaderLogin";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Convertendo o username digitado para minúsculas
    const normalizedUsername = username.toLowerCase();

    if (normalizedUsername === 'user' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/');
    } else {
      alert('Login ou senha incorretos!');
    }
  };

  return (
    <>
      <HeaderLogin/> 
      <div className="flex justify-center min-h-screen bg-gray-100 px-6">  
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-[400px] mt-[100px]">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Login:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu login"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua senha"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-500 text-white py-2 rounded-lg font-semibold hover:bg-slate-400 transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

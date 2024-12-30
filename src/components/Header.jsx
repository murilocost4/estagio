import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

export function Header({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-800 shadow border-b p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Desktop) */}
        <div className="hidden md:flex items-center text-3xl">
          LOGO
        </div>
        
        {/* Logo (Mobile) */}
        <div className="md:hidden flex-grow text-center self-center text-3xl">
          LOGO
        </div>

        {/* Botão para abrir o menu (Mobile) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Fechar' : <CiMenuBurger className='size-8'/>}
        </button>

        {/* Menu de Navegação (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="hover:underline">Saúde</button>
            <div className="absolute left-0 hidden mt-0 bg-gray-100 group-hover:block z-50">
              <a href="/saude/plano" className="block px-4 py-2 hover:bg-gray-200">Plano Costa</a>
              <a href="/saude/ambulancias" className="block px-4 py-2 hover:bg-gray-200">Costa Ambulâncias</a>
              <a href="/saude/centroclinico" className="block px-4 py-2 hover:bg-gray-200">Centro Clínico</a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:underline">Luto</button>
            <div className="absolute left-0 hidden mt-0 bg-gray-100 group-hover:block z-50">
              <a href="/luto/funeraria" className="block px-4 py-2 hover:bg-gray-200">Funerária Costa</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Memorial da Paz</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Capela Santo Antônio</a>
            </div>
          </div>
          <a href="#contato" className="hover:underline">Emergência</a>
          <a href="#saibamais" className="hover:underline">Saiba Mais</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </div>

      {/* Menu de Navegação (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <nav className="flex flex-col space-y-2">
            <div className="relative group">
              <button className="w-full text-left">Saúde</button>
              <div className="absolute left-0 hidden mt-2 bg-gray-200 rounded-md group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Plano Costa</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Costa Ambulâncias</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Centro Clínico</a>
              </div>
            </div>
            <div className="relative group">
              <button className="w-full text-left">Luto</button>
              <div className="absolute left-0 hidden mt-2 bg-gray-200 rounded-md group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Funerária Costa</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Memorial da Paz</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Capela Santo Antônio</a>
              </div>
            </div>
            <a href="#" className="hover:underline">Emergência</a>
            <a href="#" className="hover:underline">Saiba Mais</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};


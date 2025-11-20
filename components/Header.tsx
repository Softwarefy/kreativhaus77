'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-dark/95 backdrop-blur-md shadow-lg border-b border-primary-pink/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-white group-hover:text-primary-pink transition-colors">
                Kreativ
              </span>{' '}
              <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent group-hover:from-primary-purple group-hover:to-primary-pink transition-all">
                Haus 77
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-primary-pink font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-pink to-primary-purple group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary-pink/50 transition-all duration-200"
            >
              Entre em Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-light/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-primary-pink font-medium text-left py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-200 w-full"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

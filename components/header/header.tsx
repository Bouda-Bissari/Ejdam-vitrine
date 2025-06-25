"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-beige border-b border-pine/10 sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-pine tracking-tight hover:opacity-80 transition-opacity">
                            Sandales
                        </Link>
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-pine hover:text-pine/70 transition-colors font-medium">
                            Accueil
                        </Link>
                        <Link href="/collections" className="text-pine hover:text-pine/70 transition-colors font-medium">
                            Collections
                        </Link>
                        <Link href="/nouveautes" className="text-pine hover:text-pine/70 transition-colors font-medium">
                            Nouveautés
                        </Link>
                        <Link href="/about" className="text-pine hover:text-pine/70 transition-colors font-medium">
                            À propos
                        </Link>
                        <Link href="/contact" className="text-pine hover:text-pine/70 transition-colors font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* Actions Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-pine hover:text-pine/70 transition-colors p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="text-pine hover:text-pine/70 transition-colors p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        <button className="text-pine hover:text-pine/70 transition-colors p-2 relative">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3M7 13L5.4 5M7 13l-2.293 2.293c-.195.195-.195.512 0 .707L7 18M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-pine text-beige text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-pine hover:text-pine/70 transition-colors p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-pine/10 py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="text-pine hover:text-pine/70 transition-colors font-medium">
                                Accueil
                            </Link>
                            <Link href="/collections" className="text-pine hover:text-pine/70 transition-colors font-medium">
                                Collections
                            </Link>
                            <Link href="/nouveautes" className="text-pine hover:text-pine/70 transition-colors font-medium">
                                Nouveautés
                            </Link>
                            <Link href="/about" className="text-pine hover:text-pine/70 transition-colors font-medium">
                                À propos
                            </Link>
                            <Link href="/contact" className="text-pine hover:text-pine/70 transition-colors font-medium">
                                Contact
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-pine/10">
                            <button className="text-pine hover:text-pine/70 transition-colors p-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="text-pine hover:text-pine/70 transition-colors p-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                            <button className="text-pine hover:text-pine/70 transition-colors p-2 relative">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3M7 13L5.4 5M7 13l-2.293 2.293c-.195.195-.195.512 0 .707L7 18M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-pine text-beige text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx global>{`
        .bg-beige {
          background-color: #FFF7E6;
        }
        .text-pine {
          color: #00311F;
        }
        .border-pine {
          border-color: #00311F;
        }
        .bg-pine {
          background-color: #00311F;
        }
        .text-beige {
          color: #FFF7E6;
        }
        .hover\\:text-pine\\/70:hover {
          color: rgba(0, 49, 31, 0.7);
        }
      `}</style>
        </header>
    );
};

export default Header;
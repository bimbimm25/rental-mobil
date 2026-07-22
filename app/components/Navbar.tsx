'use client';

import { useState, useEffect } from 'react';
import { Crown, Phone } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                    ? 'bg-[#0B0C0E]/95 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl'
                    : 'bg-transparent border-b border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-400/20">
                        <Crown className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-lg font-black tracking-wider text-white block leading-none">
                            PT ANUGERAH BERKAH SOLUTION
                        </span>
                        <span className="text-[10px] tracking-[0.25em] font-bold text-amber-400 block mt-1 uppercase">
                            Transport & Luxury Car Rental
                        </span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-slate-400">
                    <a href="#beranda" className="hover:text-amber-400 transition-colors">Beranda</a>
                    <a href="#layanan" className="hover:text-amber-400 transition-colors">Layanan</a>
                    <a href="#keunggulan" className="hover:text-amber-400 transition-colors">Mengapa Kami</a>
                    <a href="#armada" className="hover:text-amber-400 transition-colors">Armada</a>
                    <a href="#testimoni" className="hover:text-amber-400 transition-colors">Testimoni</a>
                </nav>

                {/* NOMOR WA DIUPDATE DI SINI */}
                <a
                    href="https://wa.me/6281333984636?text=Halo%20PT%20Anugerah%20Berkah%20Solution,%20saya%20ingin%20sewa%20armada."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all shadow-lg shadow-amber-400/20 hover:scale-105 items-center gap-2"
                >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Hubungi Kami</span>
                </a>
            </div>
        </header>
    );
}
'use client';

import { useState } from 'react';
import { Users, Briefcase, Settings, MessageCircle, Crown } from 'lucide-react';

interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    capacity: number;
    transmission: string;
    price_per_day: number;
    image_url: string;
    category: string;
}

export default function CarCatalog({ cars }: { cars: Car[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

    const categories = ['Semua', ...Array.from(new Set(cars.map((c) => c.category || 'VIP Class')))];

    const filteredCars = selectedCategory === 'Semua'
        ? cars
        : cars.filter((c) => c.category === selectedCategory);

    return (
        <div>
            {/* Tab Kategori */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === cat
                            ? 'bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-400/20 scale-105'
                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400/40'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid Kartu Armada */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCars.map((car, idx) => {
                    const waMessage = encodeURIComponent(
                        `Halo PT Anugerah Berkah Solution, saya tertarik untuk menyewa unit ${car.brand} ${car.model}. Mohon informasi ketersediaan dan penawarannya.`
                    );

                    return (
                        <div
                            key={car.id}
                            style={{ animationDelay: `${idx * 100}ms` }}
                            className="animate-fade-in-up group bg-slate-900/90 border border-slate-800/80 hover:border-amber-400/60 rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/10 flex flex-col justify-between"
                        >
                            <div>
                                {/* Gambar Mobil */}
                                <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-950 mb-4 border border-slate-800/60">
                                    {car.image_url ? (
                                        <img
                                            src={car.image_url}
                                            alt={`${car.brand} ${car.model}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-600 text-xs font-bold uppercase tracking-widest">
                                            Foto Armada
                                        </div>
                                    )}

                                    {/* Badge */}
                                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md border border-amber-400/30 flex items-center gap-1">
                                        <Crown className="w-3 h-3" />
                                        <span>{car.category || 'VIP'}</span>
                                    </div>
                                </div>

                                {/* Judul & Detail */}
                                <h3 className="text-base font-extrabold text-white text-center group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                                    {car.brand} {car.model}
                                </h3>

                                {/* Icon Spesifikasi */}
                                <div className="grid grid-cols-2 gap-2 my-3 py-2.5 px-3 bg-slate-950/80 rounded-xl text-[11px] text-slate-400 border border-slate-800/60">
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5 text-amber-400" />
                                        <span>{car.capacity} Kursi</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                                        <span>Penumpang</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 col-span-2">
                                        <Settings className="w-3.5 h-3.5 text-amber-400" />
                                        <span>Transmisi: {car.transmission}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Harga & Tombol Sewa */}
                            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between mt-2">
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 block">Mulai Dari</span>
                                    <span className="text-base font-black text-amber-400">
                                        Rp {Number(car.price_per_day).toLocaleString('id-ID')}
                                    </span>
                                </div>

                                <a
                                    // NOMOR WA DIUPDATE DI SINI
                                    href={`https://wa.me/6281333984636?text=${waMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-md shadow-amber-400/20 flex items-center justify-center gap-1.5 uppercase tracking-wider"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Sewa</span>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
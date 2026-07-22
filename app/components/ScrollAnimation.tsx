'use client';

import { useEffect, ReactNode } from 'react';

export default function ScrollAnimation({ children }: { children: ReactNode }) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Hapus kelas yang menyembunyikan elemen
                        entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
                        // Tambahkan kelas untuk menampilkan elemen
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');

                        // PENTING: Hentikan observasi agar animasi hanya jalan 1x (Anti Glitch)
                        observerInstance.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15, // Memicu saat 15% bagian section terlihat
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return <>{children}</>;
}
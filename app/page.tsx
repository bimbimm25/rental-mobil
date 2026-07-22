import { supabase } from '../lib/supabase';
import CarCatalog from './components/CarCatalog';
import ScrollAnimation from './components/ScrollAnimation';
import Navbar from './components/Navbar'; // Memanggil Navbar dinamis
import {
  Car,
  Calendar,
  Clock,
  Award,
  UserCheck,
  Phone,
  Star,
  CheckCircle2,
  Crown,
  Plane,
  Heart,
  MapPin,
  Mail,
  FileText,
  CreditCard,
  ShieldAlert
} from 'lucide-react';

export const revalidate = 0;

export default async function Home() {
  const { data: cars } = await supabase
    .from('cars')
    .select('*')
    .eq('is_available', true);

  return (
    <ScrollAnimation>
      <div className="min-h-screen bg-[#0B0C0E] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">

        {/* 1. NAVBAR DINAMIS */}
        <Navbar />

        {/* 2. HERO SECTION */}
        <section
          id="beranda"
          className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out relative h-screen min-h-150 flex flex-col items-center justify-center bg-[#0B0C0E] overflow-hidden mt-5"
        >
          {/* Efek Cahaya Halus di Latar Belakang */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center mt-12">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              Sewa Mobil Surabaya & Sidoarjo <br />
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Kualitas Luxury VIP</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-200 mx-auto leading-relaxed mb-10">
              PT Anugerah Berkah Solution merupakan perusahaan penyedia jasa transportasi yang telah berpengalaman. Berkomitmen menyediakan armada Luxury dan VIP berkualitas dengan driver profesional.
            </p>

            {/* NOMOR WA DIUPDATE DI SINI */}
            <a
              href="https://wa.me/62812835557?text=Halo%20PT%20Anugerah%20Berkah%20Solution,%20saya%20ingin%20konsultasi%20sewa%20mobil."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-950 px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 shadow-[0_0px_40px_-10px_rgba(245,158,11,0.5)]"
            >
              Pesan Sekarang
            </a>

          </div>
        </section>

        {/* 3. LAYANAN KAMI - Delay 150ms */}
        <section
          id="layanan"
          className="reveal-on-scroll opacity-0 translate-y-12 delay-150 transition-all duration-1000 ease-out py-20 bg-slate-950/80 border-y border-slate-800/80"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Layanan Kami</h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
              PT Anugerah Berkah Solution menyediakan berbagai jenis layanan transportasi profesional yang dapat disesuaikan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base">Sewa Mobil Harian</h3>
                <p className="text-xs text-slate-400 mt-2">Untuk keperluan perjalanan pribadi, bisnis, maupun wisata harian.</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base">Sewa Mobil Bulanan</h3>
                <p className="text-xs text-slate-400 mt-2">Layanan sewa jangka panjang untuk operasional perusahaan dan operasional dinas.</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base">Airport Transfer</h3>
                <p className="text-xs text-slate-400 mt-2">Antar jemput Bandara Juanda secara tepat waktu, aman, dan nyaman.</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base">Wedding & VIP Car</h3>
                <p className="text-xs text-slate-400 mt-2">Unit Alphard & Luxury SUV dengan dekorasi khusus untuk pernikahan dan penjemputan tamu VIP.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MENGAPA HARUS MEMILIH - Delay 300ms */}
        <section
          id="keunggulan"
          className="reveal-on-scroll opacity-0 translate-y-12 delay-300 transition-all duration-1000 ease-out py-20"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-2">Keunggulan Utama</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase">
                Mengapa Harus Memilih <br />
                <span className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  PT Anugerah Berkah Solution?
                </span>
              </h2>
              <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                Kami memberikan jaminan kenyamanan dan keamanan bagi setiap pelanggan melalui standar armada berkualitas tinggi dan modifikasi interior eksklusif.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg border border-amber-400/20">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Driver Profesional</h4>
                    <p className="text-xs text-slate-400 mt-1">Sopir berpengalaman, ramah, dan menguasai rute perjalanan Jawa-Bali.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg border border-amber-400/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Layanan 24 Jam</h4>
                    <p className="text-xs text-slate-400 mt-1">Customer service kami siap membantu Anda kapan saja dibutuhkan.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg border border-amber-400/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Harga Kompetitif</h4>
                    <p className="text-xs text-slate-400 mt-1">Tarif sewa transparan tanpa biaya tersembunyi dengan kualitas VIP.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg border border-amber-400/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Armada Terawat & Luxury</h4>
                    <p className="text-xs text-slate-400 mt-1">Unit rutin diservis, bersih higienis, dan dilengkapi interior *Captain Seat*.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative reveal-on-scroll opacity-0 translate-y-12 delay-500 transition-all duration-1000 ease-out">
              <div className="bg-linear-to-tr from-amber-500/20 to-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl">
                <div className="bg-slate-950 rounded-2xl h-80 w-full flex items-center justify-center text-slate-500 font-bold border border-slate-800 overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTtCTsr278OByqDd4j9t2ay7zXeMcLTLur2ciYlNl1lyJzcsMzd99RU_IwVvDrm6NWAKhR7-V8j_3DZGYfg8sgnaft4k2PdP-Q0NoIwh2ehetXmx92yBxsQyAJjmdIv7Oogd5s=s1360-w1360-h1020-rw" className="w-full h-full object-cover"></img>
                </div>
                <div className="bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-800 -mt-10 mx-6 flex items-center gap-4">
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-white">10K+ Pelanggan Puas</p>
                    <p className="text-xs text-slate-400">Pilihan Terpercaya di Surabaya & Sidoarjo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DAFTAR ARMADA - Delay 150ms */}
        <section
          id="armada"
          className="reveal-on-scroll opacity-0 translate-y-12 delay-150 transition-all duration-1000 ease-out py-20 bg-slate-950/60 border-y border-slate-800/80"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-2">Pilihan Terbaik</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-wider">Daftar Armada Kami</h2>
              <p className="text-slate-400 mt-2 text-sm">Pilihan kendaraan terbaik untuk kenyamanan perjalanan Anda.</p>
            </div>

            <CarCatalog cars={cars || []} />
          </div>
        </section>

        {/* 6. TESTIMONI - Delay 300ms */}
        <section
          id="testimoni"
          className="reveal-on-scroll opacity-0 scale-95 delay-300 transition-all duration-1000 ease-out py-20 bg-slate-900/80 border-b border-slate-800/80"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-wider">Apa Kata Pelanggan Kami</h2>
            <p className="text-slate-400 mt-2 text-sm">Kepercayaan Anda adalah motivasi terbesar bagi kami.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:-translate-y-2 transition duration-300 shadow-xl">
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Pelayanan sangat memuaskan. Unit Hiace Premio interiornya luar biasa nyaman, driver tepat waktu dan sangat profesional!"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold rounded-full flex items-center justify-center text-xs">
                    BS
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Budi Santoso</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Business Traveler</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:-translate-y-2 transition duration-300 shadow-xl">
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Sewa Alphard untuk acara pernikahan, unit sangat bersih, wangi, dan perjalanannya sangat mulus. Terima kasih PT Anugerah Berkah Solution!"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold rounded-full flex items-center justify-center text-xs">
                    KW
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Kevin Wijaya</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Wedding Client</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:-translate-y-2 transition duration-300 shadow-xl">
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Sewa Innova Reborn untuk perjalanan keluarga ke Malang. Pelayanan mas driver ramah sekali dan unit sangat terawat."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold rounded-full flex items-center justify-center text-xs">
                    CH
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Christine</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Family Vacation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SYARAT & KETENTUAN */}
        <section
          id="syarat"
          className="reveal-on-scroll opacity-0 translate-y-12 delay-150 transition-all duration-1000 ease-out py-20 bg-[#0B0C0E]"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-2">Informasi Penting</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-wider">Syarat & Ketentuan Rental</h2>
              <p className="text-slate-400 mt-2 text-sm">Pahami syarat dan ketentuan di bawah ini untuk pengalaman penyewaan yang lancar dan nyaman.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex items-start gap-5 group shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 shrink-0 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">Pemesanan & Pembayaran</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Reservasi dinyatakan sah setelah pembayaran Uang Muka (DP) minimal 30% dari total sewa. Sisa pelunasan wajib diselesaikan maksimal pada hari penjemputan armada.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex items-start gap-5 group shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 shrink-0 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">Dokumen Administrasi</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Penyewa wajib mengirimkan foto Kartu Identitas Asli (KTP) yang masih aktif. Khusus untuk penyewaan keperluan operasional perusahaan, wajib melampirkan berkas NPWP & NIB.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex items-start gap-5 group shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 shrink-0 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">Durasi Sewa & Overtime</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Durasi sewa harian terhitung per tanggal kalender (maksimal pukul 23:59 WIB). Kelebihan waktu pemakaian (overtime) akan dikenakan biaya tambahan sebesar 10% dari harga per jam.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex items-start gap-5 group shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 shrink-0 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-400/20 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">Asuransi & Tanggung Jawab</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Barang bawaan adalah tanggung jawab penumpang. Dilarang keras membawa barang berbahaya, benda berbau menyengat, atau melanggar hukum selama berada di dalam kabin armada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section
          className="reveal-on-scroll opacity-0 translate-y-12 delay-300 transition-all duration-1000 ease-out py-20 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-center border-t border-slate-800"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Siap Menemani Perjalanan <br></br><span className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent italic">Terbaik Anda?ㅤ</span>
            </h2>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Jangan ragu untuk menghubungi kami. Tim kami siap memberikan penawaran terbaik untuk kebutuhan transportasi Anda.
            </p>
            {/* NOMOR WA DIUPDATE DI SINI */}
            <a
              href="https://wa.me/62812835557?text=Halo%20PT%20Anugerah%20Berkah%20Solution,%20saya%20ingin%20sewa%20armada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl mt-8 transition-all shadow-xl shadow-amber-400/20 text-xs uppercase tracking-widest hover:-translate-y-1"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </section>

        {/* 9. FOOTER PROFESIONAL DENGAN NATIVE SVG SOCIAL ICONS */}
        <footer className="bg-[#0B0C0E] border-t border-slate-800/80 pt-20 pb-8 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

            <div className="md:col-span-5 space-y-6">
              <div>
                <span className="text-xl font-black text-white uppercase tracking-widest block leading-none">
                  PT ANUGERAH BERKAH <span className="text-amber-400">SOLUTION</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-slate-500 block mt-2 uppercase">
                  (@ab.trans) • Premium Car Rental
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Penyedia layanan transportasi VIP dan Luxury terbaik di Surabaya & Sidoarjo. Mengutamakan kenyamanan, keamanan, dan pelayanan berkelas dengan armada Modifikasi Premium untuk setiap perjalanan Anda.
              </p>

              {/* Media Sosial Menggunakan Native SVG agar Bebas Error */}
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.6 6.3 3 5.6 3.7 5.1c1.2-.5 4.3-.8 8.3-.8s7.1.3 8.3.8c.7.5 1.1 1.2 1.2 2 .2 1.6.2 4.9.2 4.9s0 3.3-.2 4.9c-.1.8-.5 1.5-1.2 2-.5.5-2.2.8-5.3.9h-3c-3.1-.1-4.8-.4-5.3-.9-.7-.5-1.1-1.2-1.2-2C2.3 15.3 2.3 12 2.3 12s0-3.3.2-4.9Z" /><path d="m10 15 5-3-5-3v6Z" /></svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Tautan Cepat</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li>
                  <a href="#beranda" className="hover:text-amber-400 transition-colors flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span> Beranda
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="hover:text-amber-400 transition-colors flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span> Layanan Kami
                  </a>
                </li>
                <li>
                  <a href="#armada" className="hover:text-amber-400 transition-colors flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span> Katalog Armada
                  </a>
                </li>
                <li>
                  <a href="#syarat" className="hover:text-amber-400 transition-colors flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span> Syarat & Ketentuan
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Informasi Kontak</h4>
              <ul className="space-y-5 text-sm text-slate-400">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="leading-relaxed mt-1">Sidoarjo & Surabaya, Jawa Timur, Indonesia</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  {/* TEKS NOMOR HP DIUPDATE DI SINI */}
                  <span className="mt-1">+62 812-8355-57</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="mt-1">info@abtrans.co.id</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} PT Anugerah Berkah Solution. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-600 font-medium">
              <a href="#syarat" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-400 transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </footer>

      </div>
    </ScrollAnimation>
  );
}
import { Metadata } from 'next';
import MotorList from '@/components/MotorList';

export const metadata: Metadata = {
  title: 'Katalog Motor Listrik Polytron | Showroom EV',
  description: 'Jelajahi seluruh lineup motor listrik Polytron. Temukan spesifikasi, fitur, dan teknologi terbaru.',
};

export default function MotorCatalogPage() {
  return (
    <main>
      {/* Hero banner mini */}
      <section className="relative bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Katalog Motor Listrik
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Pilih kendaraan masa depan Anda. Inovasi elektrik dari Polytron siap menemani mobilitas harian.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Filter & list */}
      <MotorList />
    </main>
  );
}

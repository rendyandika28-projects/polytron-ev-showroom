import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getMotorBySlug, getAllMotors } from '@/lib/motor';
import MotorSpecs from '@/components/MotorSpecs';
import MotorGallery from '@/components/MotorGallery';
import { ArrowLeft, Share2, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const motors = getAllMotors();
  return motors.map((motor) => ({ slug: motor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const motor = getMotorBySlug(slug);
  if (!motor) return { title: 'Motor tidak ditemukan' };
  return {
    title: `${motor.name} | Polytron EV Showroom`,
    description: motor.description || `Spesifikasi lengkap ${motor.name}.`,
  };
}

export default async function MotorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const motor = getMotorBySlug(slug);

  if (!motor) notFound();

  return (
    <main className="bg-background">
      {/* Back navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/motor"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition cursor-pointer font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Katalog
        </Link>
      </div>

      {/* Hero with name and rating */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">{motor.name}</h1>
            {motor.tagline && (
              <p className="text-xl text-foreground/70 mt-2">{motor.tagline}</p>
            )}
          </div>
          <div className="flex items-center gap-6">
            {motor.rating && (
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-amber-400 stroke-amber-400" />
                <span className="text-2xl font-bold text-foreground">{motor.rating}</span>
                <span className="text-foreground/50">/5</span>
              </div>
            )}
            <button
              className="p-3 rounded-full border border-border text-foreground/70 hover:bg-muted transition cursor-pointer"
              aria-label="Bagikan"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MotorGallery images={motor.gallery || [motor.image]} />

      {/* Description and specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {motor.description && (
            <>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Tentang Motor</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">{motor.description}</p>
            </>
          )}
        </div>
        <MotorSpecs specs={motor.specs} />
      </section>

      {/* CTA section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Siap untuk test ride?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Kunjungi dealer resmi Polytron untuk merasakan pengalaman berkendara listrik secara langsung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition cursor-pointer"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/motor"
              className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer"
            >
              Katalog Lengkap
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

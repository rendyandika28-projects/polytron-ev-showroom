import { contactInfo } from '@/lib/contact';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-muted py-20 md:py-28">
      {/* Subtle geometric accents */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            Punya pertanyaan atau ingin coba langsung? Tim kami siap membantu.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact details card */}
          <div className="lg:col-span-5 bg-background rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading mb-6">
                Informasi Kontak
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground font-heading">Telepon</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-foreground/80 hover:text-accent transition-colors font-body"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground font-heading">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-foreground/80 hover:text-accent transition-colors font-body"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground font-heading">Alamat</p>
                    <p className="text-foreground/80 font-body">{contactInfo.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl hover:bg-amber-600 hover:shadow-lg transition-all duration-300 font-body"
            >
              <MessageCircle className="w-6 h-6" />
              Chat WhatsApp
            </a>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-7 bg-background rounded-2xl shadow-lg overflow-hidden min-h-[300px] lg:min-h-full relative">
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                <p className="text-foreground/40 font-body">Lokasi Showroom Kami</p>
              </div>
            </div>
            {/* If you embed a real map later, just replace this div with an iframe */}
            {/* <iframe src={contactInfo.mapEmbedUrl} className="w-full h-full" style={{border:0}} loading="lazy" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

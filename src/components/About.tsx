import { aboutData } from '@/data/about';
import { Battery, Zap, Sparkles } from 'lucide-react';

export default function About() {
  const iconsMap: Record<string, React.ReactNode> = {
    battery: <Battery className="w-8 h-8" />,
    zap: <Zap className="w-8 h-8" />,
    sparkles: <Sparkles className="w-8 h-8" />,
  };

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            {aboutData.heading}
          </h2>
          <p className="text-lg text-foreground/70 font-body">
            {aboutData.subheading}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text + stats */}
          <div>
            <p className="text-foreground/80 leading-relaxed text-lg mb-8 font-body">
              {aboutData.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <span className="block text-2xl font-bold text-accent font-heading">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-foreground/70 font-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative visual block */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md aspect-square bg-muted rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground font-heading">EV Ready</h3>
                <p className="text-foreground/70 mt-2 font-body">100% listrik · nol emisi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.features.map((feat) => (
            <div
              key={feat.title}
              className="group bg-muted rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {iconsMap[feat.icon]}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                {feat.title}
              </h3>
              <p className="text-foreground/70 font-body leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

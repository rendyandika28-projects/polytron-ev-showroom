import { Zap, Gauge, Battery, Clock, Award } from 'lucide-react';

interface SpecItem {
  label: string;
  value: string;
  icon?: keyof typeof specIcons;
}

const specIcons = {
  power: Zap,
  speed: Gauge,
  battery: Battery,
  range: Battery,
  charge: Clock,
  warranty: Award,
};

interface MotorSpecsProps {
  specs: SpecItem[];
}

export default function MotorSpecs({ specs }: MotorSpecsProps) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="bg-muted rounded-xl shadow-lg p-6 md:p-8 h-fit">
      <h3 className="text-xl font-heading font-bold text-foreground mb-6">Spesifikasi Utama</h3>
      <ul className="space-y-4">
        {specs.map((spec, idx) => {
          const IconComponent = spec.icon ? specIcons[spec.icon] : null;
          return (
            <li
              key={idx}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-background transition cursor-default"
            >
              {IconComponent && (
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-accent" />
                </div>
              )}
              <div>
                <p className="text-sm text-foreground/50 font-medium">{spec.label}</p>
                <p className="text-lg font-semibold text-foreground">{spec.value}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

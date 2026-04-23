import { Award, DollarSign, Zap, Package, Cpu, Heart } from "lucide-react";

const items = [
  { icon: Award, title: "Certified Mechanics", desc: "ASE-certified technicians with deep brand expertise." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent quotes — no hidden fees, ever." },
  { icon: Zap, title: "Fast Service", desc: "Most repairs completed the same day you book." },
  { icon: Package, title: "Genuine Parts", desc: "Only OEM and trusted aftermarket components." },
  { icon: Cpu, title: "Modern Equipment", desc: "Computerized diagnostics & 3D wheel alignment." },
  { icon: Heart, title: "Customer Satisfaction", desc: "98% of our customers come back. We take pride in that." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              [ 02 — Why Choose Us ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6">
              Built on <span className="text-primary">trust.</span>
              <br />
              Powered by skill.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade we&apos;ve been the workshop people recommend to
              friends and family. We don&apos;t cut corners, we don&apos;t up-sell,
              and we treat every car like it&apos;s our own.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative bg-surface p-8 hover:bg-background transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 h-14 w-14 grid place-items-center border border-border group-hover:border-primary group-hover:bg-primary transition-all">
                  <it.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-xl mb-2 tracking-tight">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

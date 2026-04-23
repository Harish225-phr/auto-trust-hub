import { ArrowRight, ShieldCheck, Clock, Users, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-mechanic.jpg";

const stats = [
  { icon: Wrench, value: "5,000+", label: "Cars Serviced" },
  { icon: ShieldCheck, value: "10+", label: "Years Experience" },
  { icon: Users, value: "25+", label: "Expert Mechanics" },
  { icon: Clock, value: "Same Day", label: "Service Available" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional mechanic repairing a car in modern workshop"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-lines opacity-60" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-16">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/40 bg-primary/10 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 bg-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">
              Trusted since 2014 · Open today
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
            Professional Car Repair
            <br />
            & <span className="text-primary">Auto Service</span>
            <br />
            <span className="text-stroke">You Can Trust.</span>
          </h1>

          <p className="font-mono text-sm sm:text-base text-muted-foreground max-w-2xl mb-10 uppercase tracking-wider">
            Engine · Service · Denting · Painting · AC Repair · Full Car Care
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors red-glow"
            >
              Book Service
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface/60 backdrop-blur-sm border border-border text-foreground font-semibold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Get Free Inspection
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border max-w-5xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background/80 backdrop-blur-sm p-5 lg:p-6 flex flex-col gap-2 hover:bg-surface transition-colors"
            >
              <s.icon className="h-5 w-5 text-primary" />
              <div className="font-display text-2xl lg:text-3xl">{s.value}</div>
              <div className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

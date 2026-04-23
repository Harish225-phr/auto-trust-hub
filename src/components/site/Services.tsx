import {
  Car,
  Cog,
  Paintbrush,
  Snowflake,
  BatteryCharging,
  Gauge,
  SprayCan,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car Servicing",
    desc: "Complete periodic maintenance to keep your vehicle running smoothly all year round.",
    num: "01",
  },
  {
    icon: Cog,
    title: "Engine Repair",
    desc: "From minor tuning to major overhauls — handled by certified engine specialists.",
    num: "02",
  },
  {
    icon: Paintbrush,
    title: "Denting & Painting",
    desc: "Restore your car to factory finish with professional bodywork and color matching.",
    num: "03",
  },
  {
    icon: Snowflake,
    title: "Car AC Repair",
    desc: "Gas refill, compressor service and complete cooling system diagnostics.",
    num: "04",
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    desc: "Genuine batteries with free installation and on-site jump-start support.",
    num: "05",
  },
  {
    icon: Gauge,
    title: "Wheel Alignment",
    desc: "Computerized 3D alignment and balancing for smoother, safer drives.",
    num: "06",
  },
  {
    icon: SprayCan,
    title: "Washing & Detailing",
    desc: "Premium foam wash, ceramic coating and interior deep-cleaning packages.",
    num: "07",
  },
  {
    icon: ArrowUpRight,
    title: "Custom Request",
    desc: "Need something specific? Talk to us about custom modifications and care plans.",
    num: "08",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              [ 01 — What We Do ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Full-spectrum care
              <br />
              for every <span className="text-primary">vehicle.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From a quick oil change to a full body restoration — our workshop is
            equipped to handle it all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-background p-7 hover:bg-surface transition-colors cursor-pointer overflow-hidden"
            >
              <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
                {s.num}
              </div>
              <div className="h-12 w-12 grid place-items-center bg-surface group-hover:bg-primary transition-colors mb-6">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="h-3 w-3" />
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

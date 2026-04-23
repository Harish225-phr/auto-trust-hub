import { CalendarCheck, Search, Wrench, KeyRound } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Pick a date and time that works for you — online, by phone, or via WhatsApp.",
  },
  {
    icon: Search,
    title: "Car Inspection",
    desc: "Our experts run a free multi-point inspection and walk you through findings.",
  },
  {
    icon: Wrench,
    title: "Repair Work",
    desc: "Approved repairs are completed using genuine parts and modern equipment.",
  },
  {
    icon: KeyRound,
    title: "Delivery",
    desc: "Pick up your car the same day or get it dropped at your doorstep.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            [ 03 — How It Works ]
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Simple, transparent
            <br />
            <span className="text-primary">4-step</span> process.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border" />
          <div className="hidden lg:block absolute top-10 left-0 h-px w-1/4 bg-primary" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-20 w-20 shrink-0 bg-background border border-border grid place-items-center group hover:border-primary transition-colors">
                    <s.icon className="h-8 w-8 text-primary" />
                    <div className="absolute -top-2 -right-2 h-7 w-7 bg-primary text-primary-foreground font-display text-sm grid place-items-center">
                      {i + 1}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block lg:hidden flex-1 h-px bg-border" />
                  )}
                </div>
                <h3 className="font-display text-2xl mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Workshop",
    lines: ["1842 Industrial Avenue", "Brooklyn, NY 11201"],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+1 (555) 555-0123", "+1 (555) 555-0911 · Emergency"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@ironfix.auto", "service@ironfix.auto"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Sat · 8:00 AM – 8:00 PM", "Sunday · 10:00 AM – 4:00 PM"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            [ 09 — Visit Us ]
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Drive in.
            <br />
            <span className="text-primary">Drive happy.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-border border border-border">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-px bg-border">
            {info.map((it) => (
              <div key={it.label} className="bg-surface p-6 lg:p-8 flex gap-4">
                <div className="h-11 w-11 shrink-0 grid place-items-center border border-border">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    {it.label}
                  </div>
                  {it.lines.map((l) => (
                    <div key={l} className="text-sm text-foreground/90 leading-relaxed">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7 bg-background min-h-[400px] relative">
            <iframe
              title="IronFix Workshop location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9942%2C40.6892%2C-73.9742%2C40.7092&layer=mapnik&marker=40.6992%2C-73.9842"
              className="absolute inset-0 w-full h-full grayscale invert opacity-90"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest">
              IronFix HQ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

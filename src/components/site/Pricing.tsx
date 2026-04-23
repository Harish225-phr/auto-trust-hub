import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Service",
    price: "$89",
    tagline: "Essential care for daily drivers.",
    features: [
      "Engine oil + filter change",
      "Multi-point inspection",
      "Tire pressure check",
      "Battery health test",
      "Exterior wash",
    ],
  },
  {
    name: "Full Service",
    price: "$199",
    tagline: "Comprehensive maintenance package.",
    featured: true,
    features: [
      "Everything in Basic",
      "Brake fluid + coolant top-up",
      "AC performance check",
      "Wheel alignment",
      "Interior vacuum + dressing",
      "30-day service warranty",
    ],
  },
  {
    name: "Premium Package",
    price: "$349",
    tagline: "Total care for premium vehicles.",
    features: [
      "Everything in Full Service",
      "Engine bay detailing",
      "Ceramic spray coating",
      "Computerized diagnostics",
      "Free pickup & drop",
      "60-day service warranty",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            [ 05 — Pricing ]
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Honest pricing.
            <br />
            <span className="text-primary">Zero surprises.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative p-8 lg:p-10 flex flex-col",
                p.featured ? "bg-primary text-primary-foreground" : "bg-background"
              )}
            >
              {p.featured && (
                <div className="absolute top-0 right-0 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest px-3 py-1.5">
                  Most Popular
                </div>
              )}

              <div className="font-mono text-xs uppercase tracking-widest opacity-70 mb-3">
                {p.name}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-5xl lg:text-6xl">{p.price}</span>
                <span className="font-mono text-xs opacity-70">/ visit</span>
              </div>
              <p className={cn("text-sm mb-8", p.featured ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {p.tagline}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={cn("h-4 w-4 mt-0.5 shrink-0", p.featured ? "text-primary-foreground" : "text-primary")} />
                    <span className={p.featured ? "" : "text-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3.5 font-semibold uppercase tracking-wider text-sm transition-colors",
                  p.featured
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Choose {p.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          Custom pricing available · talk to our team
          <span className="h-px w-10 bg-border" />
        </div>
      </div>
    </section>
  );
}

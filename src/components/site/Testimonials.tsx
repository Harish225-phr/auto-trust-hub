import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus Chen",
    role: "BMW 5 Series Owner",
    rating: 5,
    text: "These guys diagnosed an electrical issue three other shops missed. Honest pricing, fast turnaround, and they explained everything clearly. Found my new shop.",
  },
  {
    name: "Priya Sharma",
    role: "Honda Civic Owner",
    rating: 5,
    text: "Booked online, dropped my car in the morning, picked it up by evening — fully serviced and washed. The team is friendly and the workshop is spotless.",
  },
  {
    name: "David Okafor",
    role: "Toyota Hilux Owner",
    rating: 5,
    text: "Had a major dent fixed and a partial respray. The color match is perfect — you can&apos;t tell anything happened. Worth every penny.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              [ 06 — Customer Stories ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Trusted by
              <br />
              <span className="text-primary">drivers like you.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <div className="font-display text-xl">4.9 / 5</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Based on 1,200+ reviews
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {reviews.map((r) => (
            <div key={r.name} className="bg-surface p-8 lg:p-10 relative group hover:bg-background transition-colors">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
              <div className="flex gap-1 mb-5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-8">&ldquo;{r.text}&rdquo;</p>
              <div className="pt-5 border-t border-border">
                <div className="font-display text-base">{r.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical service take?",
    a: "Most basic services are completed in 2–4 hours. Full services typically take a single working day. We always give you an honest time estimate before starting work.",
  },
  {
    q: "How much will my repair cost?",
    a: "We offer transparent pricing — you receive a detailed quote after the free inspection, and we never start work without your written approval. Custom pricing is available for fleets and premium vehicles.",
  },
  {
    q: "Do you offer pickup and drop-off?",
    a: "Yes. Free pickup and drop within a 10 km radius is included on all Premium packages. For other services it&apos;s available at a small flat fee.",
  },
  {
    q: "Is there a warranty on your work?",
    a: "Absolutely. All repairs come with a 30-day service warranty (60 days on Premium packages), and genuine parts carry the manufacturer&apos;s warranty.",
  },
  {
    q: "Do you service all car brands?",
    a: "We service all major brands including Toyota, Honda, BMW, Mercedes-Benz, Audi, Hyundai, Ford, Mazda, Nissan and more. If unsure, just ask!",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              [ 08 — FAQ ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6">
              Got <span className="text-primary">questions?</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before booking. Can&apos;t find your
              answer? Call us — we&apos;re happy to help.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span className="flex items-center gap-5">
                        <span className="font-mono text-xs text-primary">
                          0{i + 1}
                        </span>
                        <span className="font-display text-lg sm:text-xl tracking-tight group-hover:text-primary transition-colors">
                          {f.q}
                        </span>
                      </span>
                      <span className="shrink-0 h-9 w-9 grid place-items-center border border-border group-hover:border-primary group-hover:bg-primary transition-colors">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                        ) : (
                          <Plus className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-12 pr-12 text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

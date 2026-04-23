import { Phone, AlertTriangle } from "lucide-react";

export function Emergency() {
  return (
    <section className="relative py-16 lg:py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 diagonal-stripes opacity-10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="relative h-16 w-16 grid place-items-center bg-primary-foreground text-primary shrink-0">
              <AlertTriangle className="h-7 w-7" />
              <span className="absolute inset-0 animate-pulse-ring" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-1">
                24 / 7 Emergency
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Breakdown? We&apos;re on the way.
              </h3>
            </div>
          </div>
          <a
            href="tel:+15555550911"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            <Phone className="h-4 w-4 group-hover:animate-pulse" />
            Call Emergency · +1 555 555 0911
          </a>
        </div>
      </div>
    </section>
  );
}

import { Wrench, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          <div className="col-span-2 lg:col-span-5">
            <a href="#top" className="flex items-center gap-2 mb-5">
              <div className="h-10 w-10 grid place-items-center bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="font-display text-xl tracking-tight">
                IRON<span className="text-primary">FIX</span>
              </div>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Premium auto service trusted by 5,000+ drivers. Honest pricing,
              certified mechanics, same-day delivery.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-10 w-10 grid place-items-center border border-border hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-5">
              Quick Links
            </div>
            <ul className="space-y-3 text-sm">
              {["Services", "Process", "Gallery", "Pricing", "Booking"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-5">
              Services
            </div>
            <ul className="space-y-3 text-sm">
              {["Servicing", "Engine", "Painting", "AC Repair", "Detailing"].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>1842 Industrial Ave</li>
              <li>Brooklyn, NY</li>
              <li>+1 (555) 555-0123</li>
              <li>hello@ironfix.auto</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} IronFix Auto Service. All rights reserved.
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Powered by <span className="text-primary">TechHim Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#booking", label: "Booking" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 grid place-items-center bg-primary text-primary-foreground">
              <Wrench className="h-5 w-5" strokeWidth={2.5} />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-tight">
                IRON<span className="text-primary">FIX</span>
              </div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                Auto Service
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+15555550123"
              className="hidden sm:flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +1 (555) 555-0123
            </a>
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 grid place-items-center bg-surface border border-border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-border/50 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center px-5 py-3 bg-primary text-primary-foreground font-semibold"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

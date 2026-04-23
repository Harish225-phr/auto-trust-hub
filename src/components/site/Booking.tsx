import { useState } from "react";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  carModel: z.string().trim().min(2, "Enter your car model").max(80),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Pick a date"),
});

const services = [
  "Car Servicing",
  "Engine Repair",
  "Denting & Painting",
  "AC Repair",
  "Battery Replacement",
  "Wheel Alignment",
  "Detailing & Wash",
  "Other",
];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      carModel: String(form.get("carModel") ?? ""),
      service: String(form.get("service") ?? ""),
      date: String(form.get("date") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitted(true);
    toast.success("Booking received — we'll call you shortly!");
  };

  return (
    <section id="booking" className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 diagonal-stripes opacity-[0.04] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              [ 07 — Book A Slot ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6">
              Reserve your
              <br />
              <span className="text-primary">service slot.</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us a few details about your car and we&apos;ll confirm your
              booking within 30 minutes during working hours.
            </p>
            <div className="space-y-4 font-mono text-sm">
              {[
                "Free multi-point inspection",
                "Pickup & drop available",
                "30-day service warranty",
                "No advance payment needed",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-surface border border-border p-10 lg:p-14 text-center">
                <div className="mx-auto h-16 w-16 grid place-items-center bg-primary text-primary-foreground mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl mb-3 tracking-tight">Booking received</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thanks! Our team will call you to confirm your appointment within
                  the next 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-surface border border-border p-6 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 mb-6">
                  <Field label="Full Name" name="name" placeholder="John Doe" required />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+1 555 555 0123" required />
                  <Field label="Car Model" name="carModel" placeholder="e.g. Honda Civic 2019" required />
                  <Select label="Service Needed" name="service" options={services} required />
                  <Field label="Preferred Date" name="date" type="date" required wide />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors red-glow"
                >
                  Book Your Service
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-4 text-xs text-muted-foreground text-center font-mono uppercase tracking-wider">
                  By booking you agree to our terms · No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  wide?: boolean;
}) {
  return (
    <label className={`bg-surface p-5 sm:p-6 block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-base"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="bg-surface p-5 sm:p-6 block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-transparent text-foreground focus:outline-none text-base appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-background">
          Select a service…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

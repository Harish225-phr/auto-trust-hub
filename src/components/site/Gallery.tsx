import engine from "@/assets/gallery-engine.jpg";
import lift from "@/assets/gallery-lift.jpg";
import detail from "@/assets/gallery-detail.jpg";
import paint from "@/assets/gallery-paint.jpg";

const items = [
  { src: engine, label: "Engine Repair", tag: "01 / Mechanical" },
  { src: lift, label: "Workshop", tag: "02 / Service Bay" },
  { src: detail, label: "Detailing", tag: "03 / Finishing" },
  { src: paint, label: "Paint Booth", tag: "04 / Bodywork" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              [ 04 — Inside The Garage ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Where craft meets
              <br />
              <span className="text-primary">precision.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A peek inside our workshop — from heavy mechanical to mirror-finish detailing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <a
              key={it.label}
              href="#booking"
              className={`group relative overflow-hidden bg-background border border-border ${
                i === 0 ? "lg:row-span-2 aspect-square lg:aspect-[1/2]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={it.src}
                alt={it.label}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                  {it.tag}
                </div>
                <div className="font-display text-2xl tracking-tight">{it.label}</div>
              </div>
              <div className="absolute top-4 right-4 h-8 w-8 bg-primary text-primary-foreground grid place-items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-lg">+</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

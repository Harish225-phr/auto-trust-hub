import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/15555550123"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group h-14 w-14 grid place-items-center bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-none animate-pulse-ring pointer-events-none" />
      </a>
      <a
        href="tel:+15555550123"
        aria-label="Call us"
        className="h-14 w-14 grid place-items-center bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

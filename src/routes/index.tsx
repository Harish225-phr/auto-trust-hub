import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Emergency } from "@/components/site/Emergency";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "IronFix — Professional Car Repair & Auto Service You Can Trust",
      },
      {
        name: "description",
        content:
          "Premium car repair, engine service, denting, painting, AC repair and detailing. 5,000+ cars serviced, certified mechanics, same-day delivery.",
      },
      { property: "og:title", content: "IronFix — Trusted Car Repair & Auto Service" },
      {
        property: "og:description",
        content:
          "Honest pricing, expert mechanics, modern equipment. Book your car service in 30 seconds.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
        <Emergency />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
    </div>
  );
}

import Announce from "@/components/ondesk/Announce";
import Nav from "@/components/ondesk/Nav";
import Hero from "@/components/ondesk/Hero";
import Trust from "@/components/ondesk/Trust";
import Problem from "@/components/ondesk/Problem";
import HowItWorks from "@/components/ondesk/HowItWorks";
import Between from "@/components/ondesk/Between";
import Features from "@/components/ondesk/Features";
import InboxPreview from "@/components/ondesk/InboxPreview";
import UseCases from "@/components/ondesk/UseCases";
import ConnIntoDark from "@/components/ondesk/ConnIntoDark";
import Testimonials from "@/components/ondesk/Testimonials";
import Integrations from "@/components/ondesk/Integrations";
import Pricing from "@/components/ondesk/Pricing";
import Faq from "@/components/ondesk/Faq";
import DemoSection from "@/components/ondesk/DemoSection";
import Footer from "@/components/ondesk/Footer";

export default function Home() {
  return (
    <>
      <Announce />
      <Nav />
      <main id="top">
        <Hero />
        <Trust />
        <Problem />
        <HowItWorks />
        <div className="conn-v" aria-hidden="true"></div>
        <Between />
        <Features />
        <InboxPreview />
        <UseCases />
        <ConnIntoDark />
        <Testimonials />
        <Integrations />
        <Pricing />
        <Faq />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}

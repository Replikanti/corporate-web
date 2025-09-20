import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { WhatsAppFeatures } from '@/components/whatsapp-features';
import { Contact } from '@/components/contact';
import { CTA } from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhatsAppFeatures />
      <About />
      <CTA />
      <Contact />
    </>
  );
}
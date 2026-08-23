import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ShippingLog from './components/ShippingLog';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <ShippingLog />
      <About />
      <Skills />
      <Contact />
      <Analytics />
    </div>
  );
}

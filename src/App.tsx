// ============================================
// App.tsx
// 🚀 Blast Off
// ============================================
import { Background } from './components/Background';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Work } from './sections/Work';
import { Principles } from './sections/DesignPrinciples';
import { Community } from './sections/Community';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { colours } from './data/portfolioData';

export default function App() {

  return (
    <div style={{background: colours.bg,color: colours.text,fontFamily: "'Plus Jakarta Sans', sans-serif",}}
      className="min-h-screen overflow-x-hidden">

      <Background />
      <Navigation /> 

      <main>
        <Hero />
        <Skills />
        <Work />
        <Principles />
        <Community />
        <Contact />  
      </main>
      <Footer />

    </div>
  );
}

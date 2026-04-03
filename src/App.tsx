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


export default function App() {

  return (
    <div className="min-h-screen overflow-x-hidden text-main font-ui">

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

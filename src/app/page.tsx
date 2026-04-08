import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ethos from '@/components/Ethos';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Scene from '@/components/Scene';

export default function Home() {
  return (
    <>
      <Scene />
      <Header />
      <main>
        <Hero />
        <Ethos />
        <Facilities />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

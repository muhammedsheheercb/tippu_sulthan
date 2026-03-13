import Hero from './section/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Reviews from './section/review/Review';
import Explore from './section/Explore';
import Reserve from './section/Reserve';
import Welcome from './section/Welcome';
import Open from './section/open/Open';
import Menu from './section/menu/Menu';
import Kingdom from './section/kingdom/Kindom';
import Follow from './section/follow/Follow';
import About from './section/about/About';

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
        <Welcome />
        {/* <Special /> */}
        <About />
        <Menu />
        <Explore />
        <Reserve />
        <Kingdom />
        <Reviews />
        <Follow />
        <Open />
        <Footer />
      </div>
      <div className="fixed bottom-6 right-2 z-50 flex md:bottom-[54px] md:right-[48px]"></div>
    </main>
  );
}

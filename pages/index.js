import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCollection from '../components/FeaturedCollection';
import Categories from '../components/Categories';
import NewArrivals from '../components/NewArrivals';
import WhyChoose from '../components/WhyChoose';
import Fabric from '../components/Fabric';
import Lookbook from '../components/Lookbook';
import Testimonials from '../components/Testimonials';
import Instagram from '../components/Instagram';
import Promo from '../components/Promo';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head><title>Vanya — Timeless Women's Fashion</title></Head>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedCollection />
        <Categories />
        <NewArrivals />
        <WhyChoose />
        <Fabric />
        <Lookbook />
        <Testimonials />
        <Instagram />
        <Promo />
        <FAQ />
        <Newsletter />
       
      </main>
      <Footer />
    </>
  );
}

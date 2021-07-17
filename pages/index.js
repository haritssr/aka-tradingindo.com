import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurProducts from '../components/OurProducts';

const Home = () => {
  return (
    <main className='mx-auto '>
      <Nav title='AKA Trading Indonesia' />
      <Hero />
      <AboutUs />
      <OurProducts />
      <Footer />
    </main>
  );
};

export default Home;

import Header from './components/Header';
import Hero from './components/Hero';
import Badge from './components/badge';
import Arrivals from './components/newarrivals'
import FAQ from './components/faq'
import Gap from './components/gap'
import Products from './components/products'
import Testemonials from './components/testemonials'
import Blog from './components/blog'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Badge />
      <Arrivals />
      <FAQ />
      <Gap />
      <Products />
      <Testemonials />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

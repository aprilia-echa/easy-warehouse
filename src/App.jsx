import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Product from "./components/Product";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <About />
      <FAQ />
      <Footer/>

    </div>
  );
}

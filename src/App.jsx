import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fitur from "./components/Fitur";
import Produk from "./components/Produk";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Fitur />
      <Produk />
      <About />
      <FAQ />
      <Footer/>

    </div>
  );
}

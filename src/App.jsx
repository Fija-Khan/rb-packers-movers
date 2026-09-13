import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import GetFreeQuote from "./components/GetFreeQuote";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <GetFreeQuote/>
      <HowItWorks/>
      <Footer />
    </>
  );
}

export default App;

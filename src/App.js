import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FormSection from "./components/FormSection";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ShortenedLinks from "./components/ShortenedLinks";
import DataProvider from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <main>
          <HeroSection />
          <section className="product-section bg-light-gray pt-10 pb-20">
            <FormSection />
            <ShortenedLinks />
            <Features />
          </section>
          <CallToAction />
        </main>
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;

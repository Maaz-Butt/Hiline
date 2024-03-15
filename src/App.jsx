import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./sections/Blog";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Pakages from "./sections/Pakages";
import QnT from "./sections/QnT";
import Quote from "./sections/Quote";
import RenovationProcess from "./sections/RenovationProcess";
import Services from "./sections/Services";
import Whole from "./sections/Whole";
import Work from "./sections/Work";
import WorkExtra from "./sections/WorkExtra";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Services />
      <Features />
      <Work />
      <WorkExtra />
      <Quote />
      <Pakages />
      <QnT />
      <Features />
      <RenovationProcess />
      <Whole />
      <Quote />
      <Blog />
      <Footer />
    </>
  )
}
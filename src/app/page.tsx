
import Hero from "./../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import GameZone from "../../components/Lumberjack/Lumberjack";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="main">
      <Hero/>
      </main>
      <About />
      <Footer/>
    </>
  );
}

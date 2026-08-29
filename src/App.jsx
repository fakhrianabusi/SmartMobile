import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import Offers from "./components/Offers.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatbaseWidget from "./components/ChatbaseWidget.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Offers />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* Floating Chatbase chatbot (bottom-right) — mounts once for the whole app */}
      <ChatbaseWidget />
    </div>
  );
}

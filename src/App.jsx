import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Join from "./pages/Join";
import Footer from "./components/Footer";
function App() {
  // Simple routing without react-router (for now)
  const isJoinPage = window.location.pathname === "/join";

  if (isJoinPage) {
    return (
      <>
        <Navbar />
        <Join />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

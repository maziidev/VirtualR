import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonial from "./components/Testimonial"
import WorkFlow from "./components/WorkFlow"

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonial />

        <Footer/>
      </main>
    </>
  )
}

export default App
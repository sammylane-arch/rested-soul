import Header from './components/Header'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import About from './components/About'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Treatments />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

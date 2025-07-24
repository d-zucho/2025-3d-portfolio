import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import LogoSection from './sections/LogoSection'
import ShowcaseSection from './sections/ShowcaseSection'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  )
}

export default App

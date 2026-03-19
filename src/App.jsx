import HeroSection from "./components/HeroSection";
import ResultsSection from "./components/ResultsSection";
import TipsSection from "./components/TipsSection";
import LimitsSection from "./components/LimitsSection";

function App() {
  return (
    <main className="text-base leading-base text-grey-500 flex flex-col gap-15 pb-12">
      <HeroSection />
      <ResultsSection />
      <TipsSection />
      <LimitsSection />
    </main>
  )
}

export default App;

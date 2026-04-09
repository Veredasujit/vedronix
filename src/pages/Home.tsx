import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import {CoreValueSection} from "../components/CoreValueSection"
import {HowItWorksSection} from "../components/HowItWorksSection"
import {WorkflowBuilderSection} from "../components/WorkflowBuilderSection"
import {UseCasesSection} from "../components/UseCasesSection"
import {LiveDashboardSection} from "../components/LiveDashboardSection"
import {StatsSection} from "../components/StatsSection"
import {IntegrationsSection} from "../components/IntegrationsSection"
import {FAQSection} from "../components/FAQSection"
import {ROISection} from "../components/ROISection"
import {FinalCTASection} from "../components/FinalCTASection"
import {Footer} from "../components/Footer"


const Home = () => {
  return (
     <div className="min-h-screen bg-white selection:bg-[#00B4D8] selection:text-white">
      <Header />
      <main>
        <HeroSection/>
        <StatsSection />
        <CoreValueSection />
        <HowItWorksSection />
        <WorkflowBuilderSection />
        <UseCasesSection />
        <LiveDashboardSection />
        <IntegrationsSection />
        <ROISection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer/>
    </div>
  )
}

export default Home
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { CoreValueSection } from "./components/CoreValueSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { WorkflowBuilderSection } from "./components/WorkflowBuilderSection";
import { LiveDashboardSection } from "./components/LiveDashboardSection";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { ROISection } from "./components/ROISection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#00B4D8] selection:text-white">
      <Header />
      <main>
        <HeroSection />
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
      <Footer />
    </div>
  );
}

export default App;

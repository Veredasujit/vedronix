import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("healthcare");

  const useCases = {
    healthcare: {
      title: "Healthcare",
      subtitle: "Streamline patient coordination and reduce administrative overhead.",
      features: [
        "Automated Appointment Confirmations",
        "Lab Result Notification Workflows",
        "Prescription Refill Outreach",
        "Post-Visit Feedback Collection"
      ],
      metrics: [
        { label: "Patient Retention", value: "+28%", sub: "Improved follow-ups" },
        { label: "No-Show Rate", value: "-45%", sub: "Automated reminders" },
        { label: "Admin Time", value: "320hr", sub: "Saved per month" }
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
    },
    realestate: {
      title: "Real Estate",
      subtitle: "Accelerate deal cycles by qualifying prospects instantly.",
      features: [
        "Instant Lead Qualification",
        "Automated Site Visit Scheduling",
        "Budget & Location Verification",
        "Payment Reminder Automation"
      ],
      metrics: [
        { label: "Qualified Leads", value: "3.5x", sub: "Higher throughput" },
        { label: "Response Time", value: "<1m", sub: "Instant engagement" },
        { label: "Conversion", value: "+22%", sub: "Lead to site visit" }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop"
    },
    government: {
      title: "Government",
      subtitle: "Enhance civic engagement with reliable automated outreach.",
      features: [
        "Public Scheme Awareness Calls",
        "Citizen Feedback & Surveys",
        "Emergency Notification Broadcasts",
        "Grievance Redressal Follow-ups"
      ],
      metrics: [
        { label: "Citizen Outreach", value: "100k+", sub: "Calls per day" },
        { label: "Engagement", value: "+40%", sub: "Better survey ROI" },
        { label: "Processing", value: "-60%", sub: "Faster data entry" }
      ],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
    }
  };
  
  return (
    <section id="use-cases" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4 tracking-tight">
              Purpose-Built for <span className="text-[#00B4D8]">Your Industry.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Vedronix is pre-configured with industry-specific knowledge and compliance frameworks.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Industry selector buttons could go here if not using Tabs component */}
          </div>
        </div>
        
        <Tabs defaultValue="healthcare" onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex w-fit bg-gray-100/50 p-1 rounded-xl mb-12 border border-gray-100">
            <TabsTrigger value="healthcare" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm">
              Healthcare
            </TabsTrigger>
            <TabsTrigger value="realestate" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm">
              Real Estate
            </TabsTrigger>
            <TabsTrigger value="government" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm">
              Government
            </TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            {Object.entries(useCases).map(([key, useCase]) => (
              <TabsContent key={key} value={key} className="mt-0 outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-16 items-center"
                >
                  <div className="space-y-8 order-2 lg:order-1">
                    <div>
                      <h3 className="text-3xl font-bold text-[#0A2463] mb-4">
                        {useCase.title} Solutions
                      </h3>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {useCase.subtitle}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold text-[#0A2463] mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                            {metric.label}
                          </div>
                          <div className="text-xs text-[#00B4D8]">
                            {metric.sub}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="ghost" className="text-[#0A2463] font-semibold p-0 h-auto hover:bg-transparent hover:text-[#00B4D8] group">
                      Explore {useCase.title} Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="relative order-1 lg:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#0A2463]/5 to-[#00B4D8]/5 rounded-3xl -z-10" />
                    <img 
                      src={useCase.image}
                      alt={useCase.title}
                      className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-[200px]">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-teal-500" />
                        <span className="text-xs font-bold text-[#0A2463]">Real-time Impact</span>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Average of {useCase.metrics[0].value} improvement across deployments.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}

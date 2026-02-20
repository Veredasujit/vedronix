import { Button } from "./ui/button";
import { Check, Phone, ArrowRight, Star } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export function HeroSection() {
  return (
    <>
    <Helmet>
        {/* Primary SEO */}
        <title>Vedronix AI Calls – Automate Sales & Support</title>
        <meta
          name="description"
          content="Vedronix automates high-stakes conversations with AI voice agents. Qualify leads, book meetings, and sync CRMs automatically."
        />
        <meta
          name="keywords"
          content="AI calling, voice AI, sales automation, AI phone calls, CRM automation"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Vedronix AI Calls" />
        <meta
          property="og:description"
          content="AI voice agents that qualify leads, book appointments, and deliver results."
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedronix AI Calls" />
        <meta
          name="twitter:description"
          content="AI Calls That Don’t Just Talk — They Deliver."
        />
      </Helmet>
   
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#0A2463]/5 px-4 py-2 rounded-full border border-[#0A2463]/10">
              <Star className="w-4 h-4 text-[#00B4D8] fill-[#00B4D8]" />
              <span className="text-sm font-semibold text-[#0A2463]">Trusted by 500+ Enterprises Worldwide</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#0A2463] tracking-tight">
                AI Calls That Don't Just Talk — <span className="text-[#00B4D8]">They Deliver.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Vedronix automates high-stakes conversations. Qualify leads, book appointments, and update CRMs with professional AI voice agents.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#0A2463] hover:bg-[#0A2463]/90 text-white font-semibold text-lg px-8 py-7 shadow-xl shadow-blue-900/20 group"
              >
                Schedule Live Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-200 text-[#0A2463] font-semibold hover:bg-gray-50 text-lg px-8 py-7"
              >
                Watch Product Video
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-bold text-[#0A2463]">99% Uptime</span>
                </div>
                <p className="text-xs text-gray-500">Enterprise Reliability</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-bold text-[#0A2463]">HIPAA Ready</span>
                </div>
                <p className="text-xs text-gray-500">Secure & Compliant</p>
              </div>
              <div className="space-y-1 hidden md:block">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-bold text-[#0A2463]">1,000+ Integrations</span>
                </div>
                <p className="text-xs text-gray-500">Native CRM Support</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4D8]/20 to-transparent rounded-3xl -m-4 blur-2xl" />
            <div className="relative z-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
              <DashboardMockup />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -right-8 top-1/4 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden xl:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Current Call Success</div>
                  <div className="text-lg font-bold text-[#0A2463]">94.8%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
     </>
  );
}

import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0A2463] to-[#062050] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00B4D8] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let AI Execute Your Calling Operations
        </h2>
        <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
          Join leading organizations automating thousands of calls daily with intelligent voice workflows
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-[#0A2463] hover:bg-gray-100 text-lg px-8 py-6 group"
          >
            Request Enterprise Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <Phone className="mr-2 w-5 h-5" />
            Talk to Sales
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00B4D8] rounded-full" />
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00B4D8] rounded-full" />
            <span className="text-sm">Setup in 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00B4D8] rounded-full" />
            <span className="text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

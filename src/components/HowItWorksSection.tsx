import { Upload, Workflow, Phone, Database } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Contacts / Connect CRM",
      description: "Import your contact lists or connect directly to your CRM system"
    },
    {
      number: "02",
      icon: Workflow,
      title: "Define Task Workflow",
      description: "Build your call flow with our visual workflow builder"
    },
    {
      number: "03",
      icon: Phone,
      title: "AI Calls & Interacts Naturally",
      description: "AI handles conversations with natural language understanding"
    },
    {
      number: "04",
      icon: Database,
      title: "System Executes & Updates Data",
      description: "Automatically execute actions and sync data back to your systems"
    }
  ];
  
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to automate your calling operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A2463] via-[#00B4D8] to-[#0A2463] opacity-20" 
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#00B4D8] transition-all h-full">
                  <div className="text-6xl font-bold text-[#00B4D8]/10 mb-4">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-[#0A2463] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#0A2463] mb-3 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Workflow Preview */}
        <div className="mt-16 bg-gradient-to-r from-[#0A2463]/5 to-[#00B4D8]/5 rounded-2xl p-8 border border-[#00B4D8]/20">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <div className="bg-white px-6 py-3 rounded-lg border-2 border-[#0A2463] whitespace-nowrap font-medium text-sm">
              IF interested
            </div>
            <div className="text-[#00B4D8] font-bold">→</div>
            <div className="bg-white px-6 py-3 rounded-lg border-2 border-[#00B4D8] whitespace-nowrap font-medium text-sm">
              Schedule visit
            </div>
            <div className="text-[#00B4D8] font-bold">→</div>
            <div className="bg-white px-6 py-3 rounded-lg border-2 border-[#00B4D8] whitespace-nowrap font-medium text-sm">
              Send SMS
            </div>
            <div className="text-[#00B4D8] font-bold">→</div>
            <div className="bg-white px-6 py-3 rounded-lg border-2 border-[#00B4D8] whitespace-nowrap font-medium text-sm">
              Update CRM
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Example workflow: Lead qualification with automated follow-up
          </p>
        </div>
      </div>
    </section>
  );
}

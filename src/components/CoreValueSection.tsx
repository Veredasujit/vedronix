import { Calendar, Target, Bell, Database, ArrowUpRight, MessageSquare, Clock, Send } from "lucide-react";

export function CoreValueSection() {
  const features = [
    {
      icon: Calendar,
      title: "Book Appointments Automatically",
      description: "Schedule appointments based on availability and send confirmations"
    },
    {
      icon: Target,
      title: "Qualify & Score Leads",
      description: "Ask structured questions and automatically score lead quality"
    },
    {
      icon: Bell,
      title: "Send Payment & Visit Reminders",
      description: "Reduce no-shows with timely, personalized reminder calls"
    },
    {
      icon: Database,
      title: "Update CRM After Call",
      description: "Automatically log call outcomes and update contact records"
    },
    {
      icon: ArrowUpRight,
      title: "Escalate to Human When Needed",
      description: "Smart handoff to live agents for complex situations"
    },
    {
      icon: MessageSquare,
      title: "Collect Structured Responses",
      description: "Gather feedback and data through conversational surveys"
    },
    {
      icon: Clock,
      title: "Schedule Follow-Up Calls",
      description: "Chain calls based on outcomes and time preferences"
    },
    {
      icon: Send,
      title: "Send SMS/WhatsApp Trigger",
      description: "Trigger multi-channel communications post-call"
    }
  ];
  
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Automation That Delivers Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond simple voice interactions — execute complete workflows
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#00B4D8] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00B4D8]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <h3 className="font-semibold text-[#0A2463] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

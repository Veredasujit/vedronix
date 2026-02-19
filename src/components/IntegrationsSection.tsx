import { Database, Phone, MessageSquare, Send, Cloud, Server } from "lucide-react";

export function IntegrationsSection() {
  const integrations = [
    {
      icon: Database,
      name: "CRM Systems",
      examples: "Salesforce, HubSpot, Zoho"
    },
    {
      icon: Phone,
      name: "SIP Telephony",
      examples: "Twilio, Plivo, Exotel"
    },
    {
      icon: MessageSquare,
      name: "SMS Gateway",
      examples: "TextLocal, MSG91"
    },
    {
      icon: Send,
      name: "WhatsApp Business",
      examples: "WhatsApp API"
    },
    {
      icon: Cloud,
      name: "REST API",
      examples: "Custom integrations"
    },
    {
      icon: Server,
      name: "On-Premise",
      examples: "Private server deployment"
    }
  ];
  
  return (
    <section id="integrations" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Connect With Your Existing Systems Seamlessly
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pre-built integrations with popular platforms and custom API support
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00B4D8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-2">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {integration.examples}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0A2463]/5 to-[#00B4D8]/5 border border-[#00B4D8]/30 rounded-2xl p-8 inline-block">
            <p className="text-lg text-[#0A2463] font-medium mb-4">
              Need a custom integration?
            </p>
            <p className="text-gray-600 mb-6">
              Our API-first architecture supports any system integration
            </p>
            <button className="bg-[#0A2463] text-white px-6 py-3 rounded-lg hover:bg-[#0A2463]/90 transition-colors">
              View API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

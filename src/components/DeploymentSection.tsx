import { Card } from "./ui/card";
import { Cloud, Server, Building2, Check } from "lucide-react";

export function DeploymentSection() {
  const deployments = [
    {
      icon: Cloud,
      title: "Cloud SaaS",
      description: "Managed service with zero infrastructure overhead",
      features: [
        "Setup in 24 hours",
        "Standard customization",
        "24/7 email support",
        "99.5% SLA uptime"
      ],
      recommended: false
    },
    {
      icon: Server,
      title: "Dedicated Server",
      description: "Private cloud instance for enhanced control",
      features: [
        "Setup in 3-5 days",
        "Advanced customization",
        "Priority phone support",
        "99.9% SLA uptime"
      ],
      recommended: true
    },
    {
      icon: Building2,
      title: "On-Premise Deployment",
      description: "Full data sovereignty and complete control",
      features: [
        "Custom setup timeline",
        "Complete customization",
        "Dedicated account manager",
        "Custom SLA agreement"
      ],
      recommended: false
    }
  ];
  
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Flexible Deployment Options
          </h2>
          <p className="text-xl text-gray-600">
            Choose the deployment model that fits your organization
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {deployments.map((deployment, index) => {
            const Icon = deployment.icon;
            return (
              <Card 
                key={index}
                className={`p-8 relative ${
                  deployment.recommended 
                    ? 'border-2 border-[#00B4D8] shadow-xl bg-gradient-to-b from-white to-[#00B4D8]/5' 
                    : 'border-2 border-gray-200 hover:border-[#00B4D8]/50 transition-colors'
                }`}
              >
                {deployment.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B4D8] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 ${
                  deployment.recommended ? 'bg-gradient-to-br from-[#0A2463] to-[#00B4D8]' : 'bg-gray-100'
                } rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${deployment.recommended ? 'text-white' : 'text-[#0A2463]'}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0A2463] mb-3">
                  {deployment.title}
                </h3>
                
                <p className="text-gray-600 mb-6 min-h-[3rem]">
                  {deployment.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {deployment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    deployment.recommended 
                      ? 'bg-[#0A2463] text-white hover:bg-[#0A2463]/90' 
                      : 'bg-gray-100 text-[#0A2463] hover:bg-gray-200'
                  }`}
                >
                  Contact Sales
                </button>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include core features: Multi-language, CRM integration, Analytics dashboard
          </p>
          <p className="text-sm text-gray-500">
            Custom enterprise plans available. Contact our sales team for volume pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

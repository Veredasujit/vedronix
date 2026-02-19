import { Card } from "./ui/card";
import { Clock, TrendingDown, Users, Zap } from "lucide-react";

export function ROISection() {
  const benefits = [
    {
      icon: Clock,
      metric: "24/7 Availability",
      description: "Never miss a lead or appointment opportunity"
    },
    {
      icon: TrendingDown,
      metric: "No Training Required",
      description: "AI learns from your workflows instantly"
    },
    {
      icon: Zap,
      metric: "Instant Scalability",
      description: "Handle 10 or 10,000 calls simultaneously"
    },
    {
      icon: Users,
      metric: "Lower Operational Cost",
      description: "Reduce overhead by up to 40%"
    }
  ];
  
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Reduce Manual Calling Costs by Up to 40%
          </h2>
          <p className="text-xl text-gray-600">
            Measurable ROI from day one
          </p>
        </div>
        
        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Manual Agent</h3>
              <p className="text-gray-600">Traditional calling approach</p>
            </div>
            <div className="space-y-4">
              <ComparisonItem label="Working Hours" value="8 hours/day" negative />
              <ComparisonItem label="Calls per Day" value="~80 calls" negative />
              <ComparisonItem label="Training Time" value="2-4 weeks" negative />
              <ComparisonItem label="Consistency" value="Variable" negative />
              <ComparisonItem label="Cost per Month" value="₹30,000+" negative />
              <ComparisonItem label="Scalability" value="Limited" negative />
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-[#0A2463] to-[#062050] border-2 border-[#00B4D8] shadow-2xl relative">
            <div className="absolute -top-4 right-8 bg-[#00B4D8] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Recommended
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">AI Automation</h3>
              <p className="text-blue-200">Vedronix platform</p>
            </div>
            <div className="space-y-4">
              <ComparisonItem label="Working Hours" value="24/7 availability" positive />
              <ComparisonItem label="Calls per Day" value="Unlimited" positive />
              <ComparisonItem label="Training Time" value="Instant setup" positive />
              <ComparisonItem label="Consistency" value="100% uniform" positive />
              <ComparisonItem label="Cost per Month" value="₹18,000" positive />
              <ComparisonItem label="Scalability" value="Infinite" positive />
            </div>
          </Card>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-[#00B4D8]/5 to-transparent border border-[#00B4D8]/20"
              >
                <div className="w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-[#0A2463] mb-2">
                  {benefit.metric}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({ 
  label, 
  value, 
  positive, 
  negative 
}: { 
  label: string; 
  value: string; 
  positive?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={positive ? "text-blue-200" : "text-gray-600"}>
        {label}
      </span>
      <span className={`font-semibold ${positive ? "text-white" : "text-gray-800"}`}>
        {value}
      </span>
    </div>
  );
}

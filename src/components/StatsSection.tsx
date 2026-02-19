import { motion } from "motion/react";
import { TrendingUp, Users, Clock, ShieldCheck } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      label: "Lead Response Time",
      value: "< 1 Min",
      sub: "vs Industry Avg: 42 Hours",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      label: "Operational Efficiency",
      value: "10x",
      sub: "Scaling without hiring",
      icon: TrendingUp,
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      label: "Accuracy Rate",
      value: "99.2%",
      sub: "Reliable structured data",
      icon: ShieldCheck,
      color: "text-[#0A2463]",
      bg: "bg-[#0A2463]/5"
    },
    {
      label: "Human Handoff",
      value: "15%",
      sub: "Complex escalations only",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100/50"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className={`${stat.bg} ${stat.color} p-3 rounded-lg mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-[#0A2463] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

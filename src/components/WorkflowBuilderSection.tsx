import { Phone, MessageSquare, GitBranch, Database, Send, CheckCircle, Plus, Play, MousePointer2 } from "lucide-react";
import { motion } from "motion/react";

export function WorkflowBuilderSection() {
  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] tracking-tight">
              Visual Workflow Builder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Map out complex conversational logic with a simple drag-and-drop interface. No coding required.
            </p>
          </motion.div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-8 md:p-12 relative">
          {/* Editor Header */}
          <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#0A2463] p-2 rounded-lg text-white">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A2463]">Lead Qualification Flow</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Draft · Updated 2m ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50">
                <Play className="w-4 h-4" /> Test Flow
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0A2463] text-white rounded-lg text-sm font-semibold hover:bg-[#0A2463]/90 shadow-lg shadow-blue-900/10">
                Publish Agent
              </button>
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle, #0A2463 2px, transparent 2px)',
              backgroundSize: '40px 40px'
            }} />
            
            {/* Workflow Canvas */}
            <div className="relative flex flex-col md:flex-row items-center gap-12">
              <WorkflowNode 
                icon={Phone}
                title="Trigger: Call Start"
                color="bg-[#0A2463]"
                status="ready"
              />
              
              <Connector />
              
              <WorkflowNode 
                icon={MessageSquare}
                title="Ask Question"
                subtitle="Purpose of interest?"
                color="bg-[#00B4D8]"
                status="active"
              />
              
              <Connector />
              
              <div className="flex flex-col gap-12">
                <WorkflowNode 
                  icon={CheckCircle}
                  title="Success"
                  subtitle="Update CRM & Notify"
                  color="bg-teal-500"
                />
                <WorkflowNode 
                  icon={GitBranch}
                  title="Escalation"
                  subtitle="Transfer to Live"
                  color="bg-orange-500"
                />
              </div>

              {/* Cursor Simulation */}
              <motion.div 
                animate={{ 
                  x: [0, -200, -100, 0], 
                  y: [0, 100, -50, 0] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute z-50 pointer-events-none"
              >
                <MousePointer2 className="w-6 h-6 text-[#0A2463] fill-white" />
              </motion.div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-100">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center">
                <GitBranch className="w-4 h-4 text-[#00B4D8]" />
              </div>
              <h4 className="font-bold text-[#0A2463]">Branching Logic</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Create complex nested if-else conditions based on real-time sentiment or keywords.</p>
            </div>
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-[#00B4D8]" />
              </div>
              <h4 className="font-bold text-[#0A2463]">Native Variables</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Map caller responses directly to CRM fields like Name, Budget, or Timeline.</p>
            </div>
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center">
                <Plus className="w-4 h-4 text-[#00B4D8]" />
              </div>
              <h4 className="font-bold text-[#0A2463]">Custom Actions</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Trigger SMS, WhatsApp, or Emails automatically during or after the call.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({ icon: Icon, title, subtitle, color, status }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative p-6 rounded-2xl bg-white border-2 ${status === 'active' ? 'border-[#00B4D8] shadow-xl shadow-[#00B4D8]/10' : 'border-gray-100 shadow-sm'} w-56`}
    >
      <div className={`${color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="font-bold text-[#0A2463] text-sm mb-1">{title}</div>
      {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
      
      {status === 'active' && (
        <div className="absolute -top-3 -right-3">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00B4D8]"></span>
          </span>
        </div>
      )}
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="relative w-12 h-0.5 bg-gray-200">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300" />
    </div>
  );
}

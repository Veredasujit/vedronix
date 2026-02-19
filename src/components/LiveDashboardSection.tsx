import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Circle, BarChart3, Clock, PhoneIncoming, MessageSquare, Activity } from "lucide-react";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";

export function LiveDashboardSection() {
  const callLogs = [
    { id: "C-9421", contact: "Vikram Malhotra", status: "Completed", duration: "3:12", sentiment: "Positive", score: 96, time: "2m ago" },
    { id: "C-9420", contact: "Anjali Gupta", status: "In Progress", duration: "1:45", sentiment: "Neutral", score: 82, time: "Live" },
    { id: "C-9419", contact: "David Miller", status: "Completed", duration: "2:05", sentiment: "Positive", score: 89, time: "8m ago" },
    { id: "C-9418", contact: "Sarah Chen", status: "Completed", duration: "4:32", sentiment: "Positive", score: 94, time: "15m ago" },
  ];
  
  return (
    <section className="py-24 px-6 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20 px-3 py-1">
              Live Monitor
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Real-Time AI <span className="text-[#00B4D8]">Command Center.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl">
              Monitor thousands of concurrent calls. Watch transcripts live and see sentiment scores update in real-time.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest">Concurrent Calls</div>
                <div className="text-2xl font-bold">1,284</div>
              </div>
              <div className="h-10 w-[2px] bg-white/10" />
              <Activity className="w-8 h-8 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Monitor */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="bg-[#0f172a]/40 backdrop-blur-xl border-white/5 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BarChart3 className="w-32 h-32" />
              </div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <PhoneIncoming className="w-5 h-5 text-[#00B4D8]" /> 
                  Live Activity Stream
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Circle className="w-2 h-2 fill-green-500 text-green-500" /> Auto-Updating
                  </span>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                {callLogs.map((call, idx) => (
                  <motion.div 
                    key={call.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-4 flex items-center gap-6 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-white/5 text-gray-400 group-hover:bg-[#00B4D8]/20 group-hover:text-[#00B4D8] transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <div className="text-xs text-gray-500 font-mono">{call.id}</div>
                        <div className="font-bold text-gray-200">{call.contact}</div>
                      </div>
                      <div>
                        <Badge 
                          variant="outline"
                          className={call.status === "In Progress" 
                            ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" 
                            : "bg-teal-500/10 text-teal-500 border-teal-500/20"
                          }
                        >
                          {call.status}
                        </Badge>
                      </div>
                      <div className="hidden md:block text-sm text-gray-400">
                        {call.duration} · {call.sentiment}
                      </div>
                      <div className="flex items-center gap-3 justify-end">
                        <div className="text-right">
                          <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Score</div>
                          <div className="text-sm font-bold">{call.score}%</div>
                        </div>
                        {call.status === "Completed" && (
                          <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                            <Play className="w-4 h-4 text-white" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Daily Call Volume", value: "48,291", trend: "+12%" },
                { label: "Avg. Resolution", value: "84.2%", trend: "+5%" },
                { label: "Human Escalation", value: "14.8%", trend: "-2%" },
              ].map((stat, i) => (
                <Card key={i} className="bg-white/5 border-white/5 p-6">
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold flex items-baseline gap-2">
                    {stat.value}
                    <span className={`text-xs ${stat.trend.startsWith('+') ? 'text-teal-400' : 'text-red-400'}`}>
                      {stat.trend}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Side Panel: Transcript & Intelligence */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-teal-900/10 border-teal-500/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold">Live Intelligence</h3>
              </div>
              
              <div className="space-y-6 text-sm">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00B4D8] flex items-center justify-center text-[10px] font-bold">AI</div>
                    <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-3 text-gray-300">
                      Hello Mr. Vikram, I'm calling from Vedronix regarding your interest in the new property.
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-[10px] font-bold">VC</div>
                    <div className="flex-1 bg-[#00B4D8]/10 rounded-2xl rounded-tr-none p-3 text-white">
                      Yes, I'm interested but I have a budget of around 1.5 Cr. Can you help?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00B4D8] flex items-center justify-center text-[10px] font-bold">AI</div>
                    <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-3 text-gray-300 italic">
                      Checking availability in Sector 45...
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-2 text-gray-400 uppercase tracking-widest font-bold">
                      Confidence Score
                      <span className="text-white">98%</span>
                    </div>
                    <Progress value={98} className="h-1 bg-white/10" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-2 text-gray-400 uppercase tracking-widest font-bold">
                      Sentiment Analysis
                      <span className="text-teal-400 font-bold">High Intent</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#0f172a]/40 border-white/5 p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-500" /> Agent Health
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Response Latency</span>
                  <span className="text-teal-400">420ms</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Naturalness Score</span>
                  <span className="text-white">4.9/5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">API Uptime</span>
                  <span className="text-white">100%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

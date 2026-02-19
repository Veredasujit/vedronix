import { Phone, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function DashboardMockup() {
  const [waveform, setWaveform] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveform(Array.from({ length: 40 }, () => Math.random() * 100));
    }, 150);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative">
      <Card className="p-6 bg-white border-2 border-gray-200 shadow-2xl">
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Active Calls</div>
              <div className="text-3xl font-bold text-[#0A2463]">24</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12%</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Completed</div>
              <div className="text-3xl font-bold text-[#0A2463]">1,847</div>
              <div className="text-xs text-gray-500">Today</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Success Rate</div>
              <div className="text-3xl font-bold text-[#00B4D8]">94.2%</div>
              <div className="text-xs text-gray-500">This week</div>
            </div>
          </div>
          
          {/* Waveform */}
          <div className="bg-gradient-to-r from-[#0A2463]/5 to-[#00B4D8]/5 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Live Call in Progress</span>
            </div>
            <div className="flex items-end justify-between h-16 gap-1">
              {waveform.map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#0A2463] to-[#00B4D8] rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.15 }}
                />
              ))}
            </div>
          </div>
          
          {/* Recent Transcript */}
          <div className="space-y-3">
            <div className="text-sm font-medium text-gray-700">Real-time Transcript</div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-[#00B4D8] font-medium">AI:</span>
                <span className="text-gray-600">Good morning! I'm calling to confirm your appointment for tomorrow at 2 PM.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 font-medium">User:</span>
                <span className="text-gray-600">Yes, that works for me.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#00B4D8] font-medium">AI:</span>
                <span className="text-gray-600">Perfect! I've updated your record and sent a reminder.</span>
              </div>
            </div>
          </div>
          
          {/* Workflow Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-900">Workflow Executed</span>
              </div>
              <span className="text-xs text-green-700">CRM Updated • SMS Sent</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Floating Action Indicator */}
      <motion.div
        className="absolute -right-4 -bottom-4 bg-[#00B4D8] text-white px-4 py-2 rounded-lg shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">Processing 24 calls</span>
        </div>
      </motion.div>
    </div>
  );
}

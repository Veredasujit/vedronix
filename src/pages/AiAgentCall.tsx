import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff } from "lucide-react";
import { Header } from "../components/Header";

export default function AiAgentCall() {
  const [inCall, setInCall] = useState(false);

  return (
    <>
    <Header/>
    <div className="h-screen bg-[#015d70] flex items-center justify-center relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GLOW CIRCLE */}
      <motion.div
        animate={{ scale: [2, 1.2, 2], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-3xl"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-10">

       

        {/* STATUS */}
        <AnimatePresence mode="wait">
          {!inCall ? (
            <motion.p
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white text-lg"
            >
              Tap to start AI call
            </motion.p>
          ) : (
            <motion.p
              key="calling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-300 text-lg"
            >
              Calling AI Agent...
            </motion.p>
          )}
        </AnimatePresence>

        {/* CALL / END BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setInCall(!inCall)}
          className={`w-50 h-50 flex items-center justify-center rounded-full shadow-xl cursor-pointer ${
            inCall ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {inCall ? <PhoneOff size={30} /> : <Phone size={30} />}
        </motion.button>

        {/* CALL CONTROLS */}
        <AnimatePresence>
          {inCall && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute bottom-10 flex gap-80"
            >
              <button className="px-6 py-3 bg-white/10 backdrop-blur rounded-full text-white">
                Mute
              </button>

              <button className="px-6 py-3 bg-red-500 rounded-full text-white">
                End Call
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
    </>
  );
}
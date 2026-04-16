import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Mic, MicOff, Volume2, Loader2, Languages } from "lucide-react";

export default function AiAgentCall() {
  const [inCall, setInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [transcription, setTranscription] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [appointmentData, setAppointmentData] = useState<Record<string, any>>({});
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const [language, setLanguage] = useState<"hi" | "en">("hi"); // Default to Hindi
  
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || " https://api.vedronix.com";
  const WS_URL = BACKEND_URL.replace("https", "ws");

  // Language toggle
  const toggleLanguage = () => {
    setLanguage(prev => prev === "hi" ? "en" : "hi");
  };

  // Get status message based on language
  const getStatusMessage = () => {
    if (language === "hi") {
      switch (status) {
        case "connecting": return "रिया से कनेक्ट हो रहा है...";
        case "connected": return "✅ कनेक्टेड - रिया तैयार है";
        case "listening": return "🎤 सुन रही हूँ...";
        case "thinking": return "🤔 रिया सोच रही है...";
        case "speaking": return "🔊 रिया बोल रही है...";
        case "error": return error || "❌ कनेक्शन में समस्या";
        default: return "📞 अपॉइंटमेंट बुक करने के लिए फोन टैप करें";
      }
    } else {
      switch (status) {
        case "connecting": return "Connecting to Riiya...";
        case "connected": return "✅ Connected - Riiya is ready";
        case "listening": return "🎤 Listening...";
        case "thinking": return "🤔 Riiya is thinking...";
        case "speaking": return "🔊 Riiya is speaking...";
        case "error": return error || "❌ Connection error";
        default: return "📞 Tap phone to book appointment";
      }
    }
  };

  // Test backend endpoints
  const testBackend = useCallback(async () => {
    setDebugInfo("Testing backend endpoints...\n");
    
    try {
      const response = await fetch(`${BACKEND_URL}/`);
      setDebugInfo(prev => prev + `✅ GET /: ${response.status}\n`);
    } catch (err) {
      setDebugInfo(prev => prev + `❌ GET /: ${err}\n`);
    }
    
    try {
      const ws = new WebSocket(`${WS_URL}/ws`);
      ws.onopen = () => {
        setDebugInfo(prev => prev + `✅ WebSocket connected\n`);
        ws.close();
      };
      ws.onerror = () => {
        setDebugInfo(prev => prev + `❌ WebSocket failed\n`);
      };
      setTimeout(() => ws.close(), 3000);
    } catch (err) {
      setDebugInfo(prev => prev + `❌ WebSocket error: ${err}\n`);
    }
  }, [BACKEND_URL, WS_URL]);

  // Start WebRTC call
  const startCall = useCallback(async () => {
    console.log("📞 Starting WebRTC call...");
    console.log("🔗 Backend URL:", BACKEND_URL);
    
    setStatus("connecting");
    setInCall(true);
    setError(null);
    
    try {
      const configuration = {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
          { urls: "stun:stun2.l.google.com:19302" }
        ],
        iceCandidatePoolSize: 10
      };
      
      const pc = new RTCPeerConnection(configuration);
      peerConnectionRef.current = pc;
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      localStreamRef.current = stream;
      
      const audioTrack = stream.getAudioTracks()[0];
      pc.addTrack(audioTrack, stream);
      console.log("🎤 Added audio track");
      
      const dataChannel = pc.createDataChannel("chat", {
        ordered: true,
        reliable: true
      });
      dataChannelRef.current = dataChannel;
      
      dataChannel.onopen = () => {
        console.log("📡 Data channel opened");
        setStatus("connected");
        dataChannel.send(JSON.stringify({
          type: "init",
          language: language,
          hospital: "Lifeline Hospital"
        }));
      };
      
      dataChannel.onclose = () => {
        console.log("📡 Data channel closed");
      };
      
      dataChannel.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          console.log("📨 Received:", message);
          
          switch (message.type) {
            case "transcription":
              setTranscription(message.text);
              break;
            case "ai_response":
              setAiResponse(message.text);
              if (message.text.includes("?") || message.text.includes("?")) {
                setStatus("listening");
              } else {
                setStatus("speaking");
              }
              break;
            case "appointment_update":
              setAppointmentData(prev => ({ ...prev, ...message.data }));
              break;
            case "status":
              setStatus(message.status);
              break;
          }
        } catch (err) {
          console.error("Error parsing message:", err);
        }
      };
      
      pc.onicecandidate = (event) => {
        if (event.candidate) {
          console.log("🧊 ICE candidate:", event.candidate.candidate);
          fetch(`${BACKEND_URL}/ice`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ candidate: event.candidate })
          }).catch(err => console.error("Failed to send ICE candidate:", err));
        }
      };
      
      pc.oniceconnectionstatechange = () => {
        console.log("🔌 ICE state:", pc.iceConnectionState);
        if (pc.iceConnectionState === "failed") {
          setError(language === "hi" ? "कनेक्शन विफल" : "Connection failed");
          endCall();
        }
      };
      
      pc.onconnectionstatechange = () => {
        console.log("🔌 Connection state:", pc.connectionState);
        if (pc.connectionState === "connected") {
          setStatus("connected");
        } else if (pc.connectionState === "disconnected" || pc.connectionState === "failed") {
          endCall();
        }
      };
      
      pc.ontrack = (event) => {
        console.log("🎵 Received remote track:", event.track.kind);
        if (event.track.kind === "audio") {
          const audioElement = new Audio();
          audioElement.srcObject = event.streams[0];
          audioElement.play().catch(e => console.error("Audio play error:", e));
        }
      };
      
      console.log("📤 Creating offer...");
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      
      const possibleEndpoints = [
        `${BACKEND_URL}/offer`,
        `${BACKEND_URL}/connect`,
        `${BACKEND_URL}/webrtc/offer`,
        `${BACKEND_URL}/api/offer`,
        `${WS_URL}/offer`
      ];
      
      let answerReceived = false;
      
      for (const endpoint of possibleEndpoints) {
        if (answerReceived) break;
        
        try {
          console.log(`Trying endpoint: ${endpoint}`);
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              sdp: offer.sdp,
              type: "offer",
              language: language
            })
          });
          
          if (response.ok) {
            const answer = await response.json();
            await pc.setRemoteDescription(new RTCSessionDescription({
              type: "answer",
              sdp: answer.sdp || answer.answer
            }));
            console.log(`✅ Connected via ${endpoint}`);
            answerReceived = true;
            break;
          }
        } catch (err) {
          console.log(`Failed on ${endpoint}:`, err);
        }
      }
      
      if (!answerReceived) {
        throw new Error(language === "hi" ? "कोई काम करने वाला एंडपॉइंट नहीं मिला" : "No working signaling endpoint found");
      }
      
    } catch (err: any) {
      console.error("Error starting call:", err);
      setError(err.message || (language === "hi" ? "कनेक्ट करने में विफल" : "Failed to connect"));
      setStatus("error");
      endCall();
    }
  }, [BACKEND_URL, WS_URL, language]);

  // End the call
  const endCall = useCallback(() => {
    console.log("📞 Ending call...");
    
    if (dataChannelRef.current) {
      dataChannelRef.current.close();
      dataChannelRef.current = null;
    }
    
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
      localStreamRef.current = null;
    }
    
    setInCall(false);
    setStatus("idle");
    setTranscription("");
    setAiResponse("");
    setAppointmentData({});
  }, []);

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = isMuted;
        setIsMuted(!isMuted);
        console.log(`${!isMuted ? "Muted" : "Unmuted"} microphone`);
      }
    }
  }, [isMuted]);

  const getStatusInfo = () => {
    switch (status) {
      case "connecting": 
        return { color: "text-yellow-300", icon: <Loader2 className="animate-spin" size={18} /> };
      case "connected": 
        return { color: "text-green-300", icon: null };
      case "listening": 
        return { color: "text-blue-300", icon: <Mic className="animate-pulse" size={18} /> };
      case "thinking": 
        return { color: "text-purple-300", icon: <Loader2 className="animate-spin" size={18} /> };
      case "speaking": 
        return { color: "text-orange-300", icon: <Volume2 className="animate-pulse" size={18} /> };
      case "error": 
        return { color: "text-red-300", icon: null };
      default: 
        return { color: "text-white", icon: null };
    }
  };

  const statusInfo = getStatusInfo();
  const statusMessage = getStatusMessage();

  return (
    <div className="h-screen overflow-y bg-gradient-to-br from-[#015d70] to-[#013a44] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <motion.div
        animate={{ 
          scale: status === "speaking" ? [1, 1.5, 1] : [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-2xl px-4">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg rounded-full p-2 hover:bg-white/20 transition-all"
        >
          {/* <Languages size={20} className="text-white" />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-xs whitespace-nowrap">
            {language === "hi" ? "English" : "हिंदी"}
          </span> */}
        </button>

        {/* Avatar */}
        <motion.div
          animate={{ scale: status === "speaking" ? [1, 1.1, 1] : 1 }}
          transition={{ repeat: status === "speaking" ? Infinity : 0, duration: 0.5 }}
          className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mb-2 shadow-2xl"
        >
          {status === "speaking" ? <Volume2 className="text-white animate-pulse" size={40} />
            : status === "listening" ? <Mic className="text-white animate-pulse" size={40} />
            : <Phone className="text-white" size={40} />}
        </motion.div>

        {/* Hospital Info - Bilingual */}
        {/* {!inCall && !error && (
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-4 w-full text-center border border-white/10">
            <p className="text-white font-bold text-lg">🏥 Lifeline Hospital & Urology Institute</p>
            <p className="text-white/70 text-sm">डॉ. संजय कुमार गोयल | Dr. Sanjay Kumar Goyal</p>
            <p className="text-white/50 text-xs mt-1">
              सुबह: 9AM-2PM | शाम: 3PM-5PM | शुल्क: ₹600
            </p>
          </div>
        )} */}
{/* 
        Debug Info Button
        {!inCall && (
          <button
            onClick={testBackend}
            className="text-white/50 text-xs underline"
          >
            {language === "hi" ? "कनेक्शन टेस्ट करें" : "Test Connection"}
          </button>
        )} */}

        {/* Debug Info */}
        {debugInfo && (
          <div className="bg-black/50 backdrop-blur-lg rounded-xl p-3 w-full text-xs font-mono">
            <pre className="text-green-300 whitespace-pre-wrap">{debugInfo}</pre>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/80 backdrop-blur-lg rounded-2xl p-4 w-full text-center">
            <p className="text-white">{error}</p>
            <button onClick={() => setError(null)} className="mt-2 text-white/80 text-sm underline">
              {language === "hi" ? "बंद करें" : "Dismiss"}
            </button>
          </div>
        )}

        {/* AI Response */}
        <AnimatePresence>
          {aiResponse && inCall && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-5 w-full border border-white/10"
            >
              <p className="text-purple-300 text-sm mb-1">
                {language === "hi" ? "🤖 रिया कहती है:" : "🤖 Riiya says:"}
              </p>
              <p className="text-white text-base leading-relaxed">{aiResponse}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transcription */}
        <AnimatePresence>
          {transcription && inCall && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-3 w-full"
            >
              <p className="text-white/60 text-xs mb-1">
                {language === "hi" ? "आपने कहा:" : "You said:"}
              </p>
              <p className="text-white text-sm">"{transcription}"</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Appointment Progress */}
        <AnimatePresence>
          {inCall && Object.keys(appointmentData).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-green-500/20 backdrop-blur-lg rounded-2xl p-3 w-full border border-green-500/30"
            >
              <p className="text-green-300 text-xs mb-1">
                {language === "hi" ? "📋 अपॉइंटमेंट विवरण:" : "📋 Appointment Details:"}
              </p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {appointmentData.name && (
                  <div><span className="text-white/60">{language === "hi" ? "नाम:" : "Name:"}</span> <span className="text-white">{appointmentData.name}</span></div>
                )}
                {appointmentData.age && (
                  <div><span className="text-white/60">{language === "hi" ? "उम्र:" : "Age:"}</span> <span className="text-white">{appointmentData.age}</span></div>
                )}
                {appointmentData.symptom && (
                  <div><span className="text-white/60">{language === "hi" ? "लक्षण:" : "Symptom:"}</span> <span className="text-white">{appointmentData.symptom}</span></div>
                )}
                {appointmentData.appointment_time && (
                  <div><span className="text-white/60">{language === "hi" ? "समय:" : "Time:"}</span> <span className="text-white">{appointmentData.appointment_time}</span></div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status */}
        <p className={`${statusInfo.color} text-base font-medium flex items-center gap-2 text-center`}>
          {statusInfo.icon}
          {statusMessage}
        </p>

        {/* Call Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={inCall ? endCall : startCall}
          disabled={status === "connecting"}
          className={`w-24 h-24 rounded-full shadow-2xl flex items-center justify-center transition-all ${
            inCall ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          } ${status === "connecting" ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {status === "connecting" ? (
            <Loader2 className="animate-spin text-white" size={32} />
          ) : inCall ? (
            <PhoneOff size={32} className="text-white" />
          ) : (
            <Phone size={32} className="text-white" />
          )}
        </motion.button>

        {/* Controls */}
        <AnimatePresence>
          {inCall && status !== "connecting" && status !== "error" && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="flex gap-3 mt-2"
            >
              <button
                onClick={toggleMute}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isMuted ? "bg-red-500" : "bg-blue-500"
                } shadow-lg`}
              >
                {isMuted ? <MicOff size={18} className="text-white" /> : <Mic size={18} className="text-white" />}
              </button>
              
              <button
                onClick={endCall}
                className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white text-sm font-medium"
              >
                {language === "hi" ? "कॉल समाप्त करें" : "End Call"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Phone, PhoneOff } from "lucide-react";
// import { Header } from "../components/Header";

// export default function AiAgentCall() {
//   const [inCall, setInCall] = useState(false);

//   return (
//     <>
//     <Header/>
//     <div className="h-screen bg-[#015d70] flex items-center justify-center relative overflow-hidden">

//       {/* GRID BACKGROUND */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

//       {/* GLOW CIRCLE */}
//       <motion.div
//         animate={{ scale: [2, 1.2, 2], opacity: [0.7, 1, 0.7] }}
//         transition={{ repeat: Infinity, duration: 3 }}
//         className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-3xl"
//       />

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 flex flex-col items-center gap-10">

       

//         {/* STATUS */}
//         <AnimatePresence mode="wait">
//           {!inCall ? (
//             <motion.p
//               key="idle"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="text-white text-lg"
//             >
//               Tap to start AI call
//             </motion.p>
//           ) : (
//             <motion.p
//               key="calling"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="text-green-300 text-lg"
//             >
//               Calling AI Agent...
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* CALL / END BUTTON */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           whileHover={{ scale: 1.1 }}
//           onClick={() => setInCall(!inCall)}
//           className={`w-50 h-50 flex items-center justify-center rounded-full shadow-xl cursor-pointer ${
//             inCall ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           {inCall ? <PhoneOff size={30} /> : <Phone size={30} />}
//         </motion.button>

//         {/* CALL CONTROLS */}
//         <AnimatePresence>
//           {inCall && (
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               className="absolute bottom-10 flex gap-80"
//             >
//               <button className="px-6 py-3 bg-white/10 backdrop-blur rounded-full text-white">
//                 Mute
//               </button>

//               <button className="px-6 py-3 bg-red-500 rounded-full text-white">
//                 End Call
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </div>
//     </>
//   );
// }
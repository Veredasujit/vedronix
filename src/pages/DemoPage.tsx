import { Link } from "react-router-dom";
import { Phone, Globe, AlertCircle, Mic, ArrowRight, Calendar, Shield, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Header } from "../components/Header";

export default function DemoPage() {
  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants:Variants= {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingIconsVariants:Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants:Variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  const MotionLink = motion(Link);

  return (
    <>
    <Header/>
        <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen flex items-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B4D8] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0A2463] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-0 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4D8]/10 rounded-full w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-2 h-2 bg-[#00B4D8] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#00B4D8]">
                AI-Powered Healthcare
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-[#0A2463] to-[#1a3a8f] bg-clip-text text-transparent inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Voice AI Agents
                </motion.span>
                <br />
                <motion.span
                  className="text-[#00B4D8] text-5xl md:text-6xl inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Designed for Real
                  <br />
                  Conversations
                </motion.span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Let patients call your AI assistant to instantly book doctor
              appointments. No waiting, no manual work — fully automated.
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-xl"
              variants={containerVariants}
            >
              {[
                { icon: Calendar, text: "24/7 Appointment Booking" },
                { icon: Clock, text: "Instant Response" },
                { icon: Shield, text: "HIPAA Compliant" },
                { icon: Mic, text: "Natural Conversations" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to="/ai-agent-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00B4D8] to-[#0096c7] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

             
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0A2463] border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Trusted by 500+ Healthcare Providers
                </p>
                <p className="text-xs text-gray-500">
                  ⭐ 4.9/5 from 1,200+ reviews
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
          >
            {/* Animated Gradient Circle */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,180,216,0.3) 0%, rgba(10,36,99,0.1) 100%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Pulse Ring */}
            <motion.div
              className="absolute w-[450px] h-[450px] rounded-full border-2 border-[#00B4D8]/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

          <MotionLink
  to="/ai-agent-call"
  variants={pulseVariants}
  initial="initial"
  animate="animate"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="relative z-20 inline-flex items-center gap-3 px-8 py-5 bg-white text-[#0A2463] rounded-full shadow-2xl font-bold text-lg group"
>
  <motion.div
    animate={{ rotate: [0, 15, -15, 0] }}
    transition={{ duration: 0.5, delay: 1 }}
  >
    <Phone size={24} className="group-hover:text-[#00B4D8] transition-colors" />
  </motion.div>

  Call Now
</MotionLink>

            {/* Floating Icons */}
            <motion.div
              className="absolute top-0 right-10 bg-gradient-to-br from-white/30 to-white/10 p-4 rounded-2xl backdrop-blur-md shadow-xl"
              variants={floatingIconsVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Mic className="w-6 h-6 text-[#00B4D8]" />
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-0 bg-gradient-to-br from-white/30 to-white/10 p-4 rounded-2xl backdrop-blur-md shadow-xl"
              variants={floatingIconsVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <Globe className="w-6 h-6 text-[#0A2463]" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-0 bg-gradient-to-br from-white/30 to-white/10 p-4 rounded-2xl backdrop-blur-md shadow-xl"
              variants={floatingIconsVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <AlertCircle className="w-6 h-6 text-[#00B4D8]" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-2 border-dashed border-[#00B4D8]/30 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    </>

  );
}
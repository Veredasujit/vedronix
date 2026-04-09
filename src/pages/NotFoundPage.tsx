import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Content */}
      <div className="z-10 text-center px-6">

        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-2xl md:text-3xl font-semibold"
        >
          Lost in Space 🚀
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-gray-400 max-w-md mx-auto"
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex justify-center gap-4"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-xl transition"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;
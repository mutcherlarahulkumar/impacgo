import React from 'react';
import { motion } from 'framer-motion';
import bgimg from '../assets/pos.jpg';
import { ChevronDown } from 'lucide-react';
import SEO from "../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";

function ConstructionPlannerHeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-gray-100 overflow-hidden"
    >
      <img
        src={bgimg}
        alt="Construction Planner"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-gray-800"
      >
        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest">
          ⚙ IN DEVELOPMENT
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Construction Planner
        </h2>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          AI-powered planning for architects and construction teams — floor
          plan analysis, automated cost estimation, material optimisation, and
          dynamic timelines that adapt to market trends.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 lg:ml-7"
        >
          Join the Waitlist
        </motion.button>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-10 w-10 text-gray-800" />
      </motion.div>
    </motion.div>
  );
}

export default ConstructionPlannerHeroSection;
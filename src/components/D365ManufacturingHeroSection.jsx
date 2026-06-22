import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Factory, Cog, ArrowRight, Layers } from "lucide-react";
import manufacturingImg from "../assets/manufacturing.jpg";

export default function D365ManufacturingHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1e293b 0%, #1e3a8a 35%, #b45309 100%)",
      }}
    >
      {/* Background image (subtle) */}
      <img
        src={manufacturingImg}
        alt="D365 for Manufacturing Implementation"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            {/* Industry badge */}
            <div className="inline-flex items-center bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Factory className="h-4 w-4 text-amber-300 mr-2" />
              <span className="text-sm font-semibold text-amber-100">
                Production Control · BOM · MES Integration · Indian Manufacturing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Dynamics 365 for{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-200 bg-clip-text text-transparent">
                Manufacturing
              </span>{" "}
              — Global Manufacturing Specialists
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Specialist Microsoft Dynamics 365 Finance & Operations
              implementation for Indian manufacturers. Production control, BOM,
              MRP, quality management, warehouse, and shop floor — fully
              integrated with MES, Power Apps, and Power BI. Built for discrete,
              process, and lean manufacturing.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Cog className="h-5 w-5 text-amber-300 mx-auto mb-1" />
                <p className="text-xs text-blue-200">Go-live</p>
                <p className="text-sm font-bold text-white">6-9 months</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Factory className="h-5 w-5 text-orange-200 mx-auto mb-1" />
                <p className="text-xs text-blue-200">Manufacturing</p>
                <p className="text-sm font-bold text-white">Discrete · Process</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Layers className="h-5 w-5 text-cyan-200 mx-auto mb-1" />
                <p className="text-xs text-blue-200">Integrated</p>
                <p className="text-sm font-bold text-white">D365 · MES</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Free Manufacturing Discovery Workshop
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("d365mfg-process")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                See Our Process
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Capabilities card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="uppercase tracking-widest text-amber-300 text-xs font-semibold mb-2">
                Manufacturing Capabilities
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What we build on D365FO for Indian manufacturers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-400/20 text-amber-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Production control & shop floor
                    </p>
                    <p className="text-blue-200 text-sm">
                      Work orders, routings, real-time status
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-400/20 text-amber-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Cog className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      BOM & MRP planning
                    </p>
                    <p className="text-blue-200 text-sm">
                      Multi-level BOMs, master planning, MPS
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-400/20 text-amber-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      MES & IoT integration
                    </p>
                    <p className="text-blue-200 text-sm">
                      Closed-loop with shop floor systems
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-blue-100">
                  GST, TDS, e-invoicing, Indian payroll, and statutory
                  reporting baked in. Discrete, process (food & chemicals),
                  and lean manufacturing — all supported.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
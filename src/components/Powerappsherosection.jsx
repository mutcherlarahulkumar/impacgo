import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Smartphone, Zap, ArrowRight, Layers } from "lucide-react";
import financialimg from "../assets/financialimg.jpg";

export default function PowerAppsHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #5b21b6 0%, #6d28d9 35%, #2563eb 100%)",
      }}
    >
      {/* Background image (subtle) */}
      <img
        src={financialimg}
        alt="Microsoft Power Apps Development"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            {/* Speed badge */}
            <div className="inline-flex items-center bg-purple-500/20 border border-purple-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold text-purple-100">
                Custom Apps in 4-8 Weeks · D365FO Connected
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Power Apps{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-200 bg-clip-text text-transparent">
                Development Partner
              </span>{" "}
              — India
            </h1>

            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed max-w-xl">
              Custom canvas and model-driven Power Apps connected to Microsoft
              Dynamics 365 F&O, Dataverse, and your business systems. Build
              mobile-first apps for shop floor, field service, approvals, and
              inspections — without heavyweight custom development.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Zap className="h-5 w-5 text-yellow-300 mx-auto mb-1" />
                <p className="text-xs text-purple-200">Delivery</p>
                <p className="text-sm font-bold text-white">4-8 weeks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Smartphone className="h-5 w-5 text-cyan-300 mx-auto mb-1" />
                <p className="text-xs text-purple-200">Platform</p>
                <p className="text-sm font-bold text-white">Web · Mobile</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Layers className="h-5 w-5 text-purple-200 mx-auto mb-1" />
                <p className="text-xs text-purple-200">Connected to</p>
                <p className="text-sm font-bold text-white">D365 · M365</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free Power Apps Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("powerapps-process")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                See Our Process
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Use cases card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="uppercase tracking-widest text-cyan-300 text-xs font-semibold mb-2">
                Common Use Cases
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What Indian enterprises build with Power Apps
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-400/20 text-purple-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Shop floor mobile apps
                    </p>
                    <p className="text-purple-200 text-sm">
                      Production reporting, quality checks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-400/20 text-purple-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Field service & inspection
                    </p>
                    <p className="text-purple-200 text-sm">
                      Offline-capable for site visits
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-400/20 text-purple-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Approval workflow apps
                    </p>
                    <p className="text-purple-200 text-sm">
                      Purchase orders, expense claims
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-purple-100">
                  All apps connect to your D365FO, Dataverse, SharePoint,
                  Teams, and 500+ third-party systems via Power Platform
                  connectors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Truck, Boxes, ArrowRight, Globe } from "lucide-react";
import supplyChainImg from "../assets/supplychain.jpg";

export default function D365DistributionHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #064e3b 0%, #047857 35%, #1e40af 100%)",
      }}
    >
      {/* Background image (subtle) */}
      <img
        src={supplyChainImg}
        alt="D365 for Distribution and Wholesale"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/30 rounded-full blur-3xl pointer-events-none"></div>
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
            {/* Industry badge */}
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Truck className="h-4 w-4 text-emerald-300 mr-2" />
              <span className="text-sm font-semibold text-emerald-100">
                WMS · Trade Agreements · Multi-Location · Indian Distribution
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Dynamics 365 for{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-200 bg-clip-text text-transparent">
                Distribution & Wholesale
              </span>{" "}
              — Global Distribution Specialists
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed max-w-xl">
              Specialist Microsoft Dynamics 365 Finance & Operations
              implementation for Indian distributors, wholesalers, and trading
              companies. Advanced warehouse management, multi-location
              inventory, trade agreements, B2B portals, and full GST/TDS
              compliance.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Boxes className="h-5 w-5 text-emerald-300 mx-auto mb-1" />
                <p className="text-xs text-emerald-100">Go-live</p>
                <p className="text-sm font-bold text-white">5-9 months</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Globe className="h-5 w-5 text-cyan-200 mx-auto mb-1" />
                <p className="text-xs text-emerald-100">Multi-site</p>
                <p className="text-sm font-bold text-white">Unlimited</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Truck className="h-5 w-5 text-yellow-200 mx-auto mb-1" />
                <p className="text-xs text-emerald-100">Coverage</p>
                <p className="text-sm font-bold text-white">B2B · B2C</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Free Distribution Discovery Workshop
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("d365dist-process")
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
              <p className="uppercase tracking-widest text-emerald-300 text-xs font-semibold mb-2">
                Distribution Capabilities
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What we build on D365FO for Indian distributors
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-400/20 text-emerald-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Advanced warehouse management
                    </p>
                    <p className="text-emerald-100 text-sm">
                      Multi-warehouse, bin tracking, wave picking
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-400/20 text-emerald-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Trade agreements & pricing
                    </p>
                    <p className="text-emerald-100 text-sm">
                      Customer/vendor pricing, discounts, rebates
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-400/20 text-emerald-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      B2B portals & e-commerce
                    </p>
                    <p className="text-emerald-100 text-sm">
                      Customer self-service, order automation
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-emerald-100">
                  GST, TDS, e-invoicing, e-way bills, multi-state branch
                  transfers, and Indian distribution compliance — fully
                  configured.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
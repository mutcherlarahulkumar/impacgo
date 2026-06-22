import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, Heart, ArrowRight, Headphones } from "lucide-react";
import financialimg from "../assets/financialimg.jpg";

export default function D365CRMHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #831843 0%, #be185d 35%, #7c3aed 100%)",
      }}
    >
      <img
        src={financialimg}
        alt="Dynamics 365 CRM Implementation"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center bg-pink-500/20 border border-pink-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-pink-200 mr-2" />
              <span className="text-sm font-semibold text-pink-100">
                Sales · Marketing · Customer Service · Field Service
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Dynamics 365{" "}
              <span className="bg-gradient-to-r from-pink-200 to-violet-200 bg-clip-text text-transparent">
                CRM
              </span>{" "}
              Implementation — Global Specialists
            </h1>

            <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed max-w-xl">
              Specialist Microsoft Dynamics 365 Customer Engagement
              implementation for Indian sales, marketing, and customer service
              teams. D365 Sales, Customer Service, Marketing, and Field
              Service — connected to your D365 F&O backend for one unified
              customer view.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Users className="h-5 w-5 text-pink-300 mx-auto mb-1" />
                <p className="text-xs text-pink-200">Sales</p>
                <p className="text-sm font-bold text-white">Pipeline · Forecast</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Headphones className="h-5 w-5 text-violet-200 mx-auto mb-1" />
                <p className="text-xs text-pink-200">Service</p>
                <p className="text-sm font-bold text-white">Cases · SLAs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Heart className="h-5 w-5 text-yellow-200 mx-auto mb-1" />
                <p className="text-xs text-pink-200">Marketing</p>
                <p className="text-sm font-bold text-white">Journeys · Lead Gen</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-pink-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free D365 CRM Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("d365crm-process")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                See Our Process
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="uppercase tracking-widest text-pink-200 text-xs font-semibold mb-2">
                CRM Capabilities
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                Dynamics 365 modules we implement
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-pink-400/20 text-pink-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      D365 Sales
                    </p>
                    <p className="text-pink-100 text-sm">
                      Lead, opportunity, quote, forecast
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-400/20 text-pink-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      D365 Customer Service
                    </p>
                    <p className="text-pink-100 text-sm">
                      Omnichannel cases, SLAs, knowledge base
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-400/20 text-pink-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      D365 Marketing & Field Service
                    </p>
                    <p className="text-pink-100 text-sm">
                      Journeys, segmentation, technician dispatch
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-pink-100">
                  All modules connect natively to D365 Finance & Operations
                  for one unified customer view — from lead to order to
                  service.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
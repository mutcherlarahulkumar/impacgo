import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Calendar, ArrowRight } from "lucide-react";
import financialimg from "../assets/financialimg.jpg";

export default function AXMigrationHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 35%, #4338ca 100%)",
      }}
    >
      {/* Background image (subtle) */}
      <img
        src={financialimg}
        alt="AX 2012 to D365 Migration"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            {/* Urgency badge */}
            <div className="inline-flex items-center bg-red-500/20 border border-red-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="h-4 w-4 text-red-300 mr-2" />
              <span className="text-sm font-semibold text-red-100">
                AX 2012 Support Ends January 2028
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              AX 2012 to{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Dynamics 365 F&O
              </span>{" "}
              — Global Migration Specialists
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Microsoft extended support for AX 2012 R3 ends January 2028.
              Impacgo's specialist Microsoft Dynamics team has migrated
              enterprises from AX 2012 to D365 Finance and Operations with
              minimal disruption. Get a free migration readiness assessment.
            </p>

            {/* Countdown / stat row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Calendar className="h-5 w-5 text-cyan-300 mx-auto mb-1" />
                <p className="text-xs text-blue-200">Deadline</p>
                <p className="text-sm font-bold text-white">Jan 2028</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-200">Typical migration</p>
                <p className="text-sm font-bold text-white">9-24 months</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-200">Assessment</p>
                <p className="text-sm font-bold text-white">4-8 weeks</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Migration Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("ax-process")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                See Migration Process
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Visual stat card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <p className="uppercase tracking-widest text-cyan-300 text-xs font-semibold mb-2">
                  Why act now
                </p>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Starting 2026 gives you runway. Starting 2027 doesn't.
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-cyan-400/20 text-cyan-300 rounded-lg w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Migration assessment
                      </p>
                      <p className="text-blue-200 text-sm">4–8 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-400/20 text-cyan-300 rounded-lg w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Partner procurement
                      </p>
                      <p className="text-blue-200 text-sm">2–4 months</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-400/20 text-cyan-300 rounded-lg w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Migration project
                      </p>
                      <p className="text-blue-200 text-sm">9–24 months</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-blue-100">
                    No security patches. No GST/regulatory updates. No
                    hotfixes after Jan 2028.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
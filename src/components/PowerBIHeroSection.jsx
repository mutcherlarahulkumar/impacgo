import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BarChart3, TrendingUp, ArrowRight, Database } from "lucide-react";
import financialimg from "../assets/financialimg.jpg";

export default function PowerBIHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #b45309 0%, #d97706 35%, #1e40af 100%)",
      }}
    >
      {/* Background image (subtle) */}
      <img
        src={financialimg}
        alt="Microsoft Power BI Implementation"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl pointer-events-none"></div>
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
            <div className="inline-flex items-center bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-amber-200 mr-2" />
              <span className="text-sm font-semibold text-amber-100">
                Replace Excel Month-End Reports With Real-Time Dashboards
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Power BI{" "}
              <span className="bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
                Implementation Partner
              </span>{" "}
              — Global
            </h1>

            <p className="text-lg md:text-xl text-amber-50 mb-8 leading-relaxed max-w-xl">
              Stop building Excel reports that take three days to prepare and
              are out of date the moment they're sent. Impacgo builds live
              Power BI dashboards connected to Dynamics 365 F&O, your data
              warehouse, and finance systems — so your leadership team sees
              real numbers in real time.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <BarChart3 className="h-5 w-5 text-amber-200 mx-auto mb-1" />
                <p className="text-xs text-amber-100">Delivery</p>
                <p className="text-sm font-bold text-white">4-8 weeks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Database className="h-5 w-5 text-cyan-300 mx-auto mb-1" />
                <p className="text-xs text-amber-100">Sources</p>
                <p className="text-sm font-bold text-white">D365 · Excel · SQL</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <TrendingUp className="h-5 w-5 text-green-300 mx-auto mb-1" />
                <p className="text-xs text-amber-100">Refresh</p>
                <p className="text-sm font-bold text-white">Real-time</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-amber-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free Power BI Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("powerbi-process")
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
              <p className="uppercase tracking-widest text-amber-200 text-xs font-semibold mb-2">
                Common Use Cases
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What Indian finance teams build with Power BI
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-400/20 text-amber-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Executive & CFO dashboards
                    </p>
                    <p className="text-amber-100 text-sm">
                      Live P&L, cashflow, working capital views
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-400/20 text-amber-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Sales & inventory analytics
                    </p>
                    <p className="text-amber-100 text-sm">
                      Real-time sales, stock, demand forecasting
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-400/20 text-amber-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Financial close & statutory reports
                    </p>
                    <p className="text-amber-100 text-sm">
                      Faster month-end, GST/TDS dashboards
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-amber-100">
                  Native connectors for D365 F&O, SQL Server, Azure Synapse,
                  Excel, SharePoint — plus DAX models built for Indian
                  reporting requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
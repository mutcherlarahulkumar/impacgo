import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BrainCircuit, Sparkles, ArrowRight, FileText } from "lucide-react";
import financialimg from "../assets/financialimg.jpg";

export default function AIBuilderHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4c1d95 0%, #6d28d9 35%, #be185d 100%)",
      }}
    >
      {/* Background image (subtle) */}
      <img
        src={financialimg}
        alt="Microsoft AI Builder Integration"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-violet-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-violet-500/20 border border-violet-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold text-violet-100">
                AI for Power Apps, Power Automate & D365
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              AI Builder{" "}
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Integration Partner
              </span>{" "}
              — India
            </h1>

            <p className="text-lg md:text-xl text-violet-100 mb-8 leading-relaxed max-w-xl">
              Embed Microsoft AI Builder into your Power Apps, Power Automate
              flows, and Dynamics 365 processes. Automate invoice extraction,
              document classification, sentiment analysis, prediction, and
              object detection — without a data science team or a deep
              learning bootcamp.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Sparkles className="h-5 w-5 text-yellow-300 mx-auto mb-1" />
                <p className="text-xs text-violet-200">Delivery</p>
                <p className="text-sm font-bold text-white">3-6 weeks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <BrainCircuit className="h-5 w-5 text-pink-200 mx-auto mb-1" />
                <p className="text-xs text-violet-200">AI Models</p>
                <p className="text-sm font-bold text-white">Pre-built · Custom</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <FileText className="h-5 w-5 text-cyan-200 mx-auto mb-1" />
                <p className="text-xs text-violet-200">Top use case</p>
                <p className="text-sm font-bold text-white">Invoice OCR</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-violet-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free AI Builder Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("aibuilder-process")
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
              <p className="uppercase tracking-widest text-yellow-200 text-xs font-semibold mb-2">
                Common Use Cases
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What Indian enterprises build with AI Builder
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-violet-400/20 text-violet-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Invoice & PO data extraction
                    </p>
                    <p className="text-violet-200 text-sm">
                      Auto-create D365FO entries from PDFs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-400/20 text-violet-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Prediction models
                    </p>
                    <p className="text-violet-200 text-sm">
                      Churn, demand forecasting, lead scoring
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-400/20 text-violet-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Text classification & sentiment
                    </p>
                    <p className="text-violet-200 text-sm">
                      Auto-categorise support tickets & feedback
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-violet-100">
                  Embedded directly into Power Apps screens and Power Automate
                  flows — no separate ML platform, no data science team
                  required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
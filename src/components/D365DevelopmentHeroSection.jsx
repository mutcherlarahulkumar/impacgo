import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, GitBranch, ArrowRight, Terminal } from "lucide-react";
import financialimg from "../assets/financialimg.jpg";

export default function D365DevelopmentHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #0891b2 100%)",
      }}
    >
      <img
        src={financialimg}
        alt="D365FO Development and Customisation"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Code2 className="h-4 w-4 text-cyan-300 mr-2" />
              <span className="text-sm font-semibold text-cyan-100">
                X++ Development · Extensions · ALM · CI/CD
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              D365FO{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Development & Customisation
              </span>{" "}
              — Global X++ Specialists
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Specialist Dynamics 365 Finance & Operations development team in
              India. X++ extensions, custom forms, integration code, data
              entities, batch jobs, security policies, and full ALM with Azure
              DevOps CI/CD. Production-grade D365FO code, not throwaway hacks.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Terminal className="h-5 w-5 text-cyan-300 mx-auto mb-1" />
                <p className="text-xs text-blue-200">Language</p>
                <p className="text-sm font-bold text-white">X++ · C#</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <GitBranch className="h-5 w-5 text-blue-300 mx-auto mb-1" />
                <p className="text-xs text-blue-200">ALM</p>
                <p className="text-sm font-bold text-white">Azure DevOps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Code2 className="h-5 w-5 text-green-300 mx-auto mb-1" />
                <p className="text-xs text-blue-200">Model</p>
                <p className="text-sm font-bold text-white">Extension-first</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free Development Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("d365dev-process")
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
              <p className="uppercase tracking-widest text-cyan-300 text-xs font-semibold mb-2">
                Development Capabilities
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What our D365FO developers build
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyan-400/20 text-cyan-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      X++ extensions & customisations
                    </p>
                    <p className="text-blue-100 text-sm">
                      Forms, tables, methods, business logic
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-400/20 text-cyan-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Data entities & integrations
                    </p>
                    <p className="text-blue-100 text-sm">
                      OData, custom services, batch jobs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-400/20 text-cyan-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      ALM & deployment automation
                    </p>
                    <p className="text-blue-100 text-sm">
                      Azure DevOps, LCS, build pipelines
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-blue-100">
                  All development follows Microsoft's extension-first model.
                  No over-layering. Upgrade-safe code that survives every
                  D365FO platform update.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
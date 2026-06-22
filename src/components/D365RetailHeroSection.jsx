import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Store, ShoppingBag, ArrowRight, CreditCard } from "lucide-react";
import retailImg from "../assets/retail.jpg";

export default function D365RetailHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7f1d1d 0%, #c2410c 35%, #b45309 100%)",
      }}
    >
      <img
        src={retailImg}
        alt="D365 for Retail and Commerce"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Store className="h-4 w-4 text-orange-200 mr-2" />
              <span className="text-sm font-semibold text-orange-100">
                Omnichannel POS · E-Commerce · Indian Retail
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Dynamics 365 for{" "}
              <span className="bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Retail & Commerce
              </span>{" "}
              — Global Retail Specialists
            </h1>

            <p className="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed max-w-xl">
              Specialist Microsoft Dynamics 365 Commerce implementation for
              Indian retailers. Omnichannel POS, e-commerce, store
              operations, inventory, merchandising, loyalty, and Indian
              compliance (GST, e-invoicing) — one unified retail platform
              across every store and online channel.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <Store className="h-5 w-5 text-orange-200 mx-auto mb-1" />
                <p className="text-xs text-orange-100">Go-live</p>
                <p className="text-sm font-bold text-white">6-10 months</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <CreditCard className="h-5 w-5 text-yellow-200 mx-auto mb-1" />
                <p className="text-xs text-orange-100">Channels</p>
                <p className="text-sm font-bold text-white">In-store · Web · Mobile</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <ShoppingBag className="h-5 w-5 text-pink-200 mx-auto mb-1" />
                <p className="text-xs text-orange-100">Scale</p>
                <p className="text-sm font-bold text-white">Unlimited stores</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center bg-white text-orange-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Free Retail Discovery Workshop
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("d365retail-process")
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
              <p className="uppercase tracking-widest text-orange-200 text-xs font-semibold mb-2">
                Retail Capabilities
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                What we build for Indian retailers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-400/20 text-orange-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Store className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Omnichannel POS & store ops
                    </p>
                    <p className="text-orange-100 text-sm">
                      Cloud POS, modern POS, store inventory
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-400/20 text-orange-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      E-commerce & online storefronts
                    </p>
                    <p className="text-orange-100 text-sm">
                      D365 Commerce, Shopify, custom platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-400/20 text-orange-200 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Loyalty, promotions & pricing
                    </p>
                    <p className="text-orange-100 text-sm">
                      Customer programmes, coupons, dynamic pricing
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-orange-100">
                  GST, e-invoicing, e-way bills, multi-state retail
                  compliance, and Indian payment gateway integration — fully
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
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paths = ["/", "/#products", "/#services", "/#contact"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <img
            src={logo}
            alt="Impacgo Solutions Logo"
            className="
              h-7 sm:h-9 md:h-10
              w-auto
              object-contain
            "
          />
        </motion.div>

        <nav>
          <ul className="flex items-center space-x-4 sm:space-x-6">
            {["Home", "Products", "Services", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={paths[index]}
                  className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}

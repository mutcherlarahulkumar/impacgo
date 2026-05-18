import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav items: name, path, and whether it's a route (Link) or hash anchor (a)
  const navItems = [
    { name: "Home", path: "/", isRoute: true },
    { name: "Products", path: "/#products", isRoute: false },
    { name: "Services", path: "/#services", isRoute: false },
    { name: "Blog", path: "/blog", isRoute: true },
    { name: "Contact", path: "/#contact", isRoute: false },
  ];

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
          <Link to="/">
            <img
              src={logo}
              alt="Impacgo Solutions Logo"
              className="
                h-7 sm:h-9 md:h-10
                w-auto
                object-contain
                cursor-pointer
              "
            />
          </Link>
        </motion.div>

        <nav>
          <ul className="flex items-center space-x-4 sm:space-x-6">
            {navItems.map((item, index) => {
              const linkClasses = `text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-gray-200"
              }`;

              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.isRoute ? (
                    <Link to={item.path} className={linkClasses}>
                      {item.name}
                    </Link>
                  ) : (
                    <a href={item.path} className={linkClasses}>
                      {item.name}
                    </a>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
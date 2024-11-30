// import d365 from "../assets/d3651.jpg";
// import crm from "../assets/crm.jpg";
// import manufacturingImage from "../assets/manufacturing.jpg";
// import supplyChain from "../assets/supplychain.jpg";
// import retail from "../assets/retail.jpg";
// import bgimg from "../assets/background.jpg";
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import pos from "../assets/pos.jpg";
// import { useNavigate } from "react-router-dom";
// import LocationMap from "../components/LocationMap";
// import ContactCard from "../components/ContactCard";
// import financial from "../assets/financialimg.jpg";
// import health from "../assets/healthcare.jpg";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main>
//         <HeroSection />
//         <IndustriesSection />
//         <ServicesSection />
//         <ProductsSection />
//         <ContactSection />
//         <LocationMap />
//         <ContactCard />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function HeroSection() {
//   const services = ['Microsoft Dynamics 365','Point of Sale'];
//   const [currentService, setCurrentService] = useState(services[0]);
//   const [isVisible, setIsVisible] = useState(true);

//   const scrollToPosition = () => {
//     window.scrollTo({ top: 250, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentService(prev => (prev === services[0] ? services[1] : services[0]));
//         setIsVisible(true);
//       }, 500);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative h-screen bg-gradient-to-r from-teal-500 to-purple-600 overflow-hidden"
//     >
//       <img
//         rel="preload"
//         src={bgimg}
//         alt="Business Team"
//         className="absolute inset-0 w-full h-full object-cover opacity-20"
//       />
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           Specialized Consulting in
//           <br />
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isVisible ? 1 : 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-5xl md:text-7xl font-extrabold"
//           >
//             {currentService}
//           </motion.span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-3xl">
//           At Impacgo Solutions, we are committed to delivering customer-focused services with complete
//           transparency and strong business ethics.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
//           onClick={scrollToPosition}
//         >
//           Learn More
//         </motion.button>
//       </motion.div>
//       <motion.div
//         animate={{
//           y: [0, -10, 0],
//           opacity: [0.5, 1, 0.5],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           repeatType: 'reverse',
//         }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/3"
//       >
//         <ChevronDown className="h-10 w-10 text-white" />
//       </motion.div>
//     </motion.div>
//   );
// }

// function IndustriesSection() {
//   const industries = ['Retail', 'Supply Chain', 'Manufacturing','Financial Services','Healthcare'];
//   const imgIndustries = [retail, supplyChain, manufacturingImage,financial,health];

//   return (
//     <section id="industries" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Industries We Serve</h2>
//         <p className="text-lg text-gray-600 mb-12">
//           We provide subject matter experts in various industry domains, where our expertise lies in:
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xxl hover:border-blue-500"
//             >
//               <div className="relative h-48">
//                 <img
//                   src={imgIndustries[index]}
//                   alt={industry}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{industry}</h3>
//                 <p className="text-gray-600">Specialized solutions for {industry.toLowerCase()} businesses.</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServicesSection() {
//   const services = [
//     { title: 'Consulting', items: ['Business BluePrint', 'Business Process Reengineering', 'Change Management', 'Project Management & Governance', 'Project Implementation and Delivery'] },
//     { title: 'Technology', items: ['Solution Architecture', 'Testing Management', 'Application Development', 'Solution Deployment', 'Annual Maintenance Support'] }
//   ];

//   return (
//     <section id="services" className="py-20 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-lg shadow-lg p-6"
//             >
//               <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//               <ul className="space-y-2">
//                 {service.items.map((item, itemIndex) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
//                     className="flex items-center"
//                   >
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                     <span>{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProductsSection() {
//   const products = [
//     { 
//       name: 'Microsoft D365 Finance & Operations', 
//       description: 'Comprehensive financial and operational management solution.',
//       image: d365,
//       details: 'Manage your entire financial and operational processes in one integrated solution. D365 Finance & Operations helps streamline operations and improve financial visibility.',
//       path: '/services/d365'
//     },
//     { 
//       name: 'Microsoft CRM', 
//       description: 'Customer relationship management system for improved business interactions.',
//       image: crm,
//       details: 'Enhance your customer relationships with powerful CRM tools. Microsoft CRM offers insights into customer interactions, allowing businesses to make data-driven decisions and provide tailored customer service.',
//       path: '/services/crm'
//     },
//     { 
//       name: 'Point of Sale (POS)', 
//       description: 'Custom-tailored POS solutions for retail businesses.',
//       image: pos,
//       details: 'Our POS capabilities support to enable the POS solutions designed specifically for retail environments, providing fast and efficient transaction processing, inventory management, and customer engagement tools to enhance the shopping experience.',
//       path: '/services/pos'
//     }
//   ];

//   const navigate = useNavigate();

//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.name}
//               className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-gray-500 mb-4">{product.details}</p>
//               <button
//                 className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
//                 onClick={() => navigate(product.path)}
//               >
//                 Know More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import d365 from "../assets/d3651.jpg";
import crm from "../assets/crm.jpg";
import manufacturingImage from "../assets/manufacturing.jpg";
import supplyChain from "../assets/supplychain.jpg";
import retail from "../assets/retail.jpg";
import bgimg from "../assets/background.jpg"; 
import { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import pos from "../assets/pos.jpg";
import { useNavigate } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import ContactCard from "../components/ContactCard";
import financial from "../assets/financialimg.jpg";
import health from "../assets/healthcare.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <IndustriesSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
        <LocationMap />
        <ContactCard />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  const services = ['Microsoft Dynamics 365', 'Point of Sale'];
  const [currentService, setCurrentService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(true);

  const scrollToPosition = () => {
    window.scrollTo({ top: 250, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentService(prev => (prev === services[0] ? services[1] : services[0]));
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-teal-500 to-purple-600 overflow-hidden">
      <img
        rel="preload"
        src={bgimg}
        alt="Business Team"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Specialized Consulting in
          <br />
          <span className="text-5xl md:text-7xl font-extrabold">
            {currentService}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          At Impacgo Solutions, we are committed to delivering customer-focused services with complete
          transparency and strong business ethics.
        </p>
        <button
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          onClick={scrollToPosition}
        >
          Learn More
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/3">
        <ChevronDown className="h-10 w-10 text-white" />
      </div>
    </div>
  );
}

function IndustriesSection() {
  const industries = ['Retail', 'Supply Chain', 'Manufacturing','Financial Services','Healthcare'];
  const imgIndustries = [retail, supplyChain, manufacturingImage, financial, health];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Industries We Serve</h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide subject matter experts in various industry domains, where our expertise lies in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xxl hover:border-blue-500"
            >
              <div className="relative h-48">
                <img
                  src={imgIndustries[index]}
                  alt={industry}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                <p className="text-gray-600">Specialized solutions for {industry.toLowerCase()} businesses.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: 'Consulting', items: ['Business BluePrint', 'Business Process Reengineering', 'Change Management', 'Project Management & Governance', 'Project Implementation and Delivery'] },
    { title: 'Technology', items: ['Solution Architecture', 'Testing Management', 'Application Development', 'Solution Deployment', 'Annual Maintenance Support'] }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    { 
      name: 'Microsoft D365 Finance & Operations', 
      description: 'Comprehensive financial and operational management solution.',
      image: d365,
      details: 'Manage your entire financial and operational processes in one integrated solution. D365 Finance & Operations helps streamline operations and improve financial visibility.',
      path: '/services/d365'
    },
    { 
      name: 'Microsoft CRM', 
      description: 'Customer relationship management system for improved business interactions.',
      image: crm,
      details: 'Enhance your customer relationships with powerful CRM tools. Microsoft CRM offers insights into customer interactions, allowing businesses to make data-driven decisions and provide tailored customer service.',
      path: '/services/crm'
    },
    { 
      name: 'Point of Sale (POS)', 
      description: 'Custom-tailored POS solutions for retail businesses.',
      image: pos,
      details: 'Our POS capabilities support to enable the POS solutions designed specifically for retail environments, providing fast and efficient transaction processing, inventory management, and customer engagement tools to enhance the shopping experience.',
      path: '/services/pos'
    }
  ];

  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-500 mb-4">{product.details}</p>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
                onClick={() => navigate(product.path)}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <User className="mr-2 text-blue-600" /> Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <Mail className="mr-2 text-blue-600" /> Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <MessageSquare className="mr-2 text-blue-600" /> Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

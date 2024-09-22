import { FaCheckCircle, FaCloud, FaCode, FaCog, FaSyncAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import POSHeroSection from '../components/POSHeroSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import POSHeader from '../components/POSHeader';
import maintain from "../assets/maintain.jpg";
import posimg from "../assets/posimg.jpg"
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <ScrollToTop />
      <POSHeader />

      <main className="flex-grow">
        <POSHeroSection />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Expertise in POS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Business Process Design</h4>
                <p className="text-lg text-gray-600">We help you define and optimize your retail processes to seamlessly integrate with with Industry Best Practices, ensuring cost savings while they support your operational goals and customer experience initiatives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">End-to-End Application Development</h4>
                <p className="text-lg text-gray-600">From initial concept, development to deployment, we develop custom POS solutions tailored to your need. Our solutions are built with scalability, performance, and ease of use in mind.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">POS Migration Strategy</h4>
                <p className="text-lg text-gray-600">we offer a smooth transition strategy, ensuring feature enhancements, rigorous testing, and uninterrupted operations during migration from legacy to new POS.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">POS Migration Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: <FaChartLine className="h-6 w-6 text-blue-600" />, text: "End-to-end migration planning" },
                { icon: <FaSyncAlt className="h-6 w-6 text-blue-600" />, text: "Feature upgrades and customizations" },
                { icon: <FaCog className="h-6 w-6 text-blue-600" />, text: "Integration with existing retail workflows" },
                { icon: <FaCode className="h-6 w-6 text-blue-600" />, text: "Data migration and performance optimization" },
                { icon: <FaCheckCircle className="h-6 w-6 text-blue-600" />, text: "Continuous support post-migration" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
                  {item.icon}
                  <span className="text-lg text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Annual Maintenance Support (AMS)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-6">Our AMS services ensure that your POS system stays reliable and up to date:</h4>
                <ul className="space-y-4">
                  {[
                    "Performance Optimization, Troubleshooting",
                    "New Feature Integration",
                    "Proactive monitoring and incident management",
                    "Bug fixes and performance tuning",
                    "Regular updates to keep up with security and compliance standards",
                    "Feature enhancements based on evolving business needs",
                    "Performance monitoring, regular updates, issue resolution.",
                    "Continuous improvements tailored to your business."
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-lg text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={maintain}
                  alt="Annual Maintenance Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-400 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold mb-8">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <FaCode className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Proven Expertise</h4>
                <p className="text-lg">We've worked with industry-leading solutions in custom retail application development.</p>
              </div>
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <FaCloud className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Scalable Cloud-based Solutions</h4>
                <p className="text-lg">Our solutions are built to grow with your business, leveraging cloud technology.</p>
              </div>
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <FaShieldAlt className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">High Availability & Security</h4>
                <p className="text-lg">We ensure high availability and robust security using cloud capabilities.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg overflow-hidden max-w-2xl">
                <img
                  src={posimg}
                  alt="POS system in retail store"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

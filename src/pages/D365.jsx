import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import IndustriesSupported from "../components/IndestriesSupported";
import ImplementationServices from "../components/ImplementationServices";
import DevelopmentServices from "../components/DevelopmentServices";
import AMS from "../components/AMS";
import D365HeroSection from "../components/D365HeroSection";
import { FaChartPie, FaRobot, FaSyncAlt, FaExpand, FaDollarSign, FaCog, FaClipboardCheck, FaChartLine , FaBalanceScale } from "react-icons/fa";
import ContactCard from "../components/ContactCard"
import ServiceSection from "../components/ServiceSection";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function D365FinanceAndOperations() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ScrollToTop />
      <POSHeader />

      

      <main className="flex-grow">
      <D365HeroSection />

         {/* Key Features Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-gray-900 my-6 text-center">Key Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Advanced Analytics and Reporting",
          description: "Gain real-time insights with embedded analytics and AI-driven reporting.Make informed decisions with comprehensive financial and operational data.",
          icon: <FaChartPie className="text-blue-500 text-4xl mb-4" />,
        },
        {
          title: "Automation",
          description: "Automate routine tasks to increase productivity and reduce errors.Streamline approval workflows to accelerate financial closing and reporting.",
          icon: <FaRobot className="text-blue-500 text-4xl mb-4" />,
        },
        {
          title: "Seamless Integration",
          description: "Integrate seamlessly with Microsoft products and third-party applications.Ensure smooth data flow across your organization for better collaboration.",
          icon: <FaSyncAlt className="text-blue-500 text-4xl mb-4" />,
        },
        {
          title: "Scalability and Flexibility",
          description: "Adapt to changing business needs with a scalable and flexible platform.Customize the solution to fit your unique business requirements.",
          icon: <FaExpand className="text-blue-500 text-4xl mb-4" />,
        },
        {
          title: "Enhanced Financial Management",
          description: "Improve financial controls and assess the health of your business.Optimize cash flow, manage budgets, and ensure compliance with regulations.",
          icon: <FaDollarSign className="text-blue-500 text-4xl mb-4" />,
        },
        {
          title: "Operational Efficiency",
          description: "Optimize supply chain and manufacturing processes for better project delivery.Enhance project management and ensure timely delivery of projects.",
          icon: <FaCog className="text-blue-500 text-4xl mb-4" />,
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {feature.icon}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Benefits Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us ?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Increased Productivity",
          description: "Empower teams to work smarter with automated processes and real-time insights.",
          icon: <FaClipboardCheck className="text-green-500 text-4xl mb-4" />,
        },
        {
          title: "Better Decision-Making",
          description: "Leverage advanced analytics to make data-driven decisions that drive growth.",
          icon: <FaChartLine  className="text-green-500 text-4xl mb-4" />,
        },
        {
          title: "Cost Savings",
          description: "Reduce operational costs through improved efficiency and streamlined processes.",
          icon: <FaDollarSign className="text-green-500 text-4xl mb-4" />,
        },
        {
          title: "Scalability",
          description: "Grow your business with a solution that scales with your needs.",
          icon: <FaExpand className="text-green-500 text-4xl mb-4" />,
        },
        {
          title: "Compliance",
          description: "Stay compliant with regulatory requirements and improve financial transparency. ",
          icon: <FaBalanceScale className="text-green-500 text-4xl mb-4" />,
        },
      ].map((benefit, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {benefit.icon}
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            {benefit.title}
          </h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Call to Action */}
        
      </main>

      <ServiceSection />
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get Started with Dynamics 365 Finance and Operations
            </h2>
            <p className="text-lg mb-6">
              Ready to take your business to the next level? Contact us today to
              learn more about how Dynamics 365 Finance and Operations can help
              you achieve your goals.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow">
              Contact Us
            </button>
          </div>
        </section>

      {/* <ImplementationServices />

      <DevelopmentServices />

      <AMS /> */}

    <ContactCard />
    <Footer />
    </div>
  );
}

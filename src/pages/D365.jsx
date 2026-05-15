import POSHeader from "../components/POSHeader";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import IndustriesSupported from "../components/IndestriesSupported";
import ImplementationServices from "../components/ImplementationServices";
import DevelopmentServices from "../components/DevelopmentServices";
import AMS from "../components/AMS";
import D365HeroSection from "../components/D365HeroSection";
import { FaChartPie, FaRobot, FaSyncAlt, FaExpand, FaDollarSign, FaCog, FaClipboardCheck, FaChartLine , FaBalanceScale } from "react-icons/fa";
import ContactCard from "../components/ContactCard"
import ServiceSection from "../components/ServiceSection";
import SEO from "../components/SEO";
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema } from "../components/schemas";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function D365FinanceAndOperations() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What is Microsoft Dynamics 365 Finance and Operations (D365FO)?",
    answer: "Microsoft Dynamics 365 Finance and Operations (D365FO) is a comprehensive cloud-based ERP solution designed for large enterprises and mid-size businesses. It covers financial management, supply chain, manufacturing, project operations, HR, and advanced analytics in one integrated platform.",
  },
  {
    question: "How long does a D365FO implementation take in India?",
    answer: "A typical Dynamics 365 Finance and Operations implementation in India takes 6 to 12 months depending on company size, modules in scope, customisations required, and data migration complexity. Mid-size companies typically complete implementation in 6-9 months.",
  },
  {
    question: "Which industries benefit most from Dynamics 365 F&O?",
    answer: "Dynamics 365 F&O is ideal for manufacturing, distribution, retail, financial services, healthcare, automotive, and public sector organisations that need a scalable ERP with strong financial, supply chain, and operational capabilities integrated with the Microsoft ecosystem.",
  },
  {
    question: "Is Impacgo a certified Microsoft Dynamics 365 partner?",
    answer: "Yes, Impacgo Solutions is an authorised Microsoft Dynamics 365 implementation partner specialising in D365 Finance and Operations and the Power Platform, serving mid-size and enterprise clients across India from our Visakhapatnam headquarters.",
  },
  {
    question: "What does a D365FO implementation cost in India?",
    answer: "Dynamics 365 F&O implementation costs in India vary based on user count, modules deployed, customisation requirements, and integration scope. Contact Impacgo for a free consultation and detailed proposal tailored to your business requirements.",
  },
];

const serviceSchema = createServiceSchema({
  serviceName: "Microsoft Dynamics 365 Finance and Operations Implementation",
  description: "End-to-end D365FO ERP implementation, customisation, and managed services for Indian enterprises in manufacturing, distribution, retail, and services sectors.",
  serviceType: "ERP Implementation",
  path: "/services/d365",
});

const faqSchema = createFaqSchema(faqs);

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Dynamics 365 F&O", path: "/services/d365" },
]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
  title="Microsoft Dynamics 365 Finance & Operations Implementation Partner India | Impacgo"
  description="Specialist Microsoft Dynamics 365 F&O implementation partner in India. End-to-end D365FO ERP deployment, customisation, and managed services for manufacturing, distribution, and enterprise clients across India."
  keywords="Microsoft Dynamics 365 Finance Operations India, D365FO implementation partner India, Dynamics 365 ERP India, D365 F&O consultant India, Microsoft ERP partner Visakhapatnam, D365FO customisation India"
  path="/services/d365"
  schema={[serviceSchema, faqSchema, breadcrumbSchema]}
/>
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
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
            onClick={()=>{navigate('/contact')}}>
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
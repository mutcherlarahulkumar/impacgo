import { FaCheckCircle, FaRocket, FaUsers, FaCogs, FaLightbulb } from "react-icons/fa";
import { MdOutlineCampaign, MdOutlineSupportAgent, MdOutlineEngineering } from "react-icons/md";
import POSHeader from "../components/POSHeader";
import CRMHeroSection from "../components/CRMHeroSection";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import ContactCard from "../components/ContactCard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const crmFeatures = [
  {
    title: "Customer Relationship Management",
    description:
      "Centralize customer data for a complete view of interactions. Track and manage customer relationships from lead to loyalty.",
    icon: FaUsers,
  },
  {
    title: "Sales Automation",
    description:
      "Automate sales processes to increase efficiency and close deals faster. Use AI-driven insights to prioritize leads and opportunities.",
    icon: FaRocket,
  },
  {
    title: "Marketing Automation",
    description:
      "Create and manage targeted marketing campaigns. Track campaign performance and optimize for better results.",
    icon: MdOutlineCampaign,
  },
  {
    title: "Customer Service",
    description:
      "Provide exceptional customer service with a unified platform. Manage service cases and track customer satisfaction.",
    icon: MdOutlineSupportAgent,
  },
  {
    title: "Field Service",
    description:
      "Optimize field service operations with real-time insights. Schedule and dispatch resources efficiently.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Integration and Customization",
    description:
      "Seamlessly integrate with other Microsoft products and third-party applications. Customize the solution to fit your unique business needs.",
    icon: FaCogs,
  },
];

const crmBenefits = [
  {
    title: "Enhanced Customer Insights",
    description:
      "Gain a 360-degree view of your customers to deliver personalized experiences.",
    icon: FaLightbulb,
  },
  {
    title: "Increased Efficiency",
    description: "Automate routine tasks and streamline workflows to boost productivity.",
    icon: FaCheckCircle,
  },
  {
    title: "Improved Decision-Making",
    description:
      "Leverage advanced analytics and AI to make data-driven decisions.",
    icon: FaLightbulb,
  },
  {
    title: "Scalability",
    description: "Grow your business with a solution that scales with your needs.",
    icon: FaRocket,
  },
  {
    title: "Better Collaboration",
    description:
      "Foster collaboration across teams with integrated tools and shared data.",
    icon: FaUsers,
  },
];

const implementationProcess = [
  {
    title: "Discovery and Planning",
    description:
      "Understand your business needs and objectives. Develop a detailed implementation plan tailored to your requirements.",
    icon: FaCheckCircle,
  },
  {
    title: "System Design and Configuration",
    description:
      "Design the CRM system to align with your business processes. Configure the system to ensure optimal performance and usability.",
    icon: FaCogs,
  },
  {
    title: "Data Migration",
    description:
      "Securely migrate your existing data to Dynamics 365 CRM. Ensure data integrity and minimal disruption to your operations.",
    icon: FaUsers,
  },
  {
    title: "Integration",
    description:
      "Integrate Dynamics 365 CRM with your existing systems and applications. Ensure seamless data flow and interoperability.",
    icon: FaCogs,
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Conduct thorough testing to ensure the system meets your requirements. Identify and resolve any issues before go-live.",
    icon: MdOutlineEngineering,
  },
  {
    title: "Training and Support",
    description:
      "Provide comprehensive training for your team to maximize adoption. Offer ongoing support and maintenance to ensure continuous improvement.",
    icon: MdOutlineSupportAgent,
  },
];

export default function Crm() {
  const navigate = useNavigate();
  return (
    <div> 
      <ScrollToTop />
    <POSHeader />
    <CRMHeroSection />
    <section className="py-16 bg-gray-50">
    
      <div className="container mx-auto px-6 md:px-12">
        {/* CRM Features */}
        <div className="mb-16">
  <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Key Features
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {crmFeatures.map((feature, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-start space-x-4"
      >
        <div className="flex items-center justify-center bg-blue-50 p-4 rounded-full">
          <feature.icon className="text-blue-600 text-4xl" />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-semibold text-blue-700 mb-2">
            {feature.title}
          </h4>
          <p className="text-gray-600 text-base">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Benefits */}
        <div className="mb-16">
  <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
    Why Choose Us ?
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {crmBenefits.map((benefit, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-start space-x-6"
      >
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
          <benefit.icon className="text-white text-3xl" />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h4>
          <p className="text-base text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Implementation Process */}
        <div className="relative py-16 bg-gray-50">
          <h3 className="text-5xl font-semibold text-gray-800 mb-10 text-center tracking-wide uppercase">
            Dynamics 365 CRM Implementation
          </h3>

          <div className="relative flex flex-col items-center">
            {/* Vertical Line */}
            <div className="absolute w-1 bg-gradient-to-t from-blue-600 to-indigo-500 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-lg"></div>

            {/* Steps */}
            {implementationProcess.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full md:w-3/4 mb-12 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Content Box */}
                <div
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 z-10 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } w-full sm:w-3/4 md:w-1/2`}
                >
                  <h4 className="text-2xl font-semibold text-blue-700 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Icon and Subline */}
                <div className="w-1/12 flex flex-col items-center z-10 relative">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform hover:scale-110">
                    <step.icon className="text-white text-3xl" />
                  </div>
                  {/* Optional Subline */}
                  {index !== implementationProcess.length && (
                    <div className="h-8 w-1 bg-gradient-to-t from-blue-600 to-indigo-500 mx-auto"></div>
                  )}
                </div>
                {/* <div className="p-9 text-2xl font-extrabold text-blue-600 m-2">Step {index+1}</div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-3xl font-extrabold text-gray-900 mb-8 max-w-2xl mx-auto">
            Ready to enhance your customer relationship management with Dynamics 365 CRM?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-lg text-lg font-bold shadow-2xl transform transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700"
          onClick={()=>{navigate('/contact')}}>
            Get Started
          </button>
        </div>
      </div>
    </section>
    <ContactCard />
    <Footer />
    </div>
  );
}

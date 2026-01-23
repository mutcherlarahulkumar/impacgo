
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
        <AchievementsSection />
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
    const services = [
  'Microsoft Dynamics 365',
  'Web & Mobile Applications',
  'ERPNext',
  'AI&Automation Solutions'
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentService, setCurrentService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(true);

  const scrollToPosition = () => {
    window.scrollTo({ top: 250, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % services.length;
          setCurrentService(services[nextIndex]);
          return nextIndex;
        });
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
  const industries = [
    'Manufacturing',
    'Trading & Distribution',
    'Retail & E-Commerce',
    'Healthcare',
    'Financial Services',
    'Technology & Consulting'
  ];

  const imgIndustries = [
    manufacturingImage,
    supplyChain,
    retail,
    health,
    financial,
    manufacturingImage
  ];

  const descriptions = [
    'Production optimization, supply chain management, and ERP-driven manufacturing excellence.',
    'Multi-site trading operations, inventory control, and ERP-integrated distribution networks.',
    'Omnichannel retail solutions with POS, ERP, and customer experience optimization.',
    'Patient management, compliance-driven ERP solutions, and healthcare process automation.',
    'Risk management, financial operations, compliance, and intelligent financial reporting.',
    'Digital transformation, ERP consulting, and innovation-led enterprise solutions.'
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Industries We Serve
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          Impacgo Solutions delivers industry-specific ERP, automation, and digital
          transformation solutions across global enterprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105"
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
                <p className="text-gray-600">
                  {descriptions[index]}
                </p>
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
    {
      title: 'ERP & Consulting Services',
      items: [
        'Microsoft Dynamics 365 Finance & Operations Implementation',
        'ERP Integration & Ongoing Support',
        'Business Process Reengineering',
        'Change Management & Project Governance',
        'Training & Knowledge Transfer Programs'
      ]
    },
    {
      title: 'Technology, AI & Innovation',
      items: [
        'Cloud & Application Development',
        'AI & Intelligent Automation Solutions',
        'Custom Software Development',
        'System Testing, Deployment & Optimization',
        'Annual Maintenance & Managed Support Services'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center">
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

function AchievementsSection() {
  const achievements = [
    { value: '19+', label: 'Years of Experience' },
    { value: '15+', label: 'Global Implementations' },
    { value: '8+', label: 'Countries Served' },
    { value: '10+', label: 'Industries Supported' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="
                bg-white
                border border-gray-200
                rounded-xl
                p-6
                shadow-sm
                hover:shadow-md
                transition-shadow
                duration-300
              "
            >
              <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                {item.value}
              </p>
              <p className="text-sm md:text-base text-gray-600 tracking-wide">
                {item.label}
              </p>
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
    name: 'Microsoft Dynamics 365 Finance & Operations',
    description: 'Enterprise ERP for finance, operations, manufacturing, and supply chain.',
    image: d365,
    details:
      'Full-scale deployment of Dynamics 365 Finance & Operations tailored to global enterprises, enabling financial control, operational excellence, and regulatory compliance.',
    path: '/services/d365'
  },
  {
  name: 'Web & Mobile Application Development',
  description: 'Custom web and mobile applications for modern enterprises.',
  image: crm, // you can later replace image if needed
  details:
    'We design and develop scalable web and mobile applications tailored to business needs, integrating seamlessly with ERP systems, cloud platforms, and enterprise workflows.',
  path: '/services/app-development'
},
  {
    name: 'Custom POS & Business Applications',
    description: 'ERP-integrated POS and custom enterprise applications.',
    image: pos,
    details:
      'Custom POS and business applications designed for retail, trading, and multi-site operations, fully integrated with ERP and cloud platforms.',
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "85f6cfac-d627-4ba5-ad1d-aaa77e5c7ebd", // Replace StaticForms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
          Contact Us
        </h2>
        <form
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <User className="mr-2 text-blue-600" /> Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <Mail className="mr-2 text-blue-600" /> Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center mb-2 text-gray-700">
              <MessageSquare className="mr-2 text-blue-600" /> Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md transform hover:scale-105"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-center text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

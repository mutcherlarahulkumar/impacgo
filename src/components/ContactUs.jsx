
import { useNavigate,useLocation } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ContactCard";




import { useEffect } from 'react';
import { ChevronDown, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
import Footer from "./Footer";
import POSHeader from "./POSHeader";




export default function ContactSection() {
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
            accessKey: "85f6cfac-d627-4ba5-ad1d-aaa77e5c7ebd",  // Replace StaticForms access key
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

    const ScrollToTop = () => {
      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
    };
  
    return (
      <div>
      <ScrollToTop />
      <POSHeader />
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
      <ContactCard />
      <Footer />
    </section>
      </div>
    );
  }
  
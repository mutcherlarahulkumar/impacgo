import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className=" text-center p-1 mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">IMPACGO SOLUTIONS</h2>
        <p className="mt-2 text-gray-600">srikar@impacgo.com</p>
        <p className="text-gray-600">+91-9866323418</p>
        <p className="mt-2 text-gray-600">No 9-29-19, Gupta Villa, Third Floor, Balaji Nagar</p>
        <p className="text-gray-600">Visakhapatnam - 530003</p>
      </div>
      <div className="flex justify-center p-4 bg-gray-100">
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mx-2 text-blue-600 hover:text-blue-800 transition duration-200"
        >
          <FaFacebook size={24} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mx-2 text-blue-400 hover:text-blue-600 transition duration-200"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mx-2 text-blue-700 hover:text-blue-900 transition duration-200"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

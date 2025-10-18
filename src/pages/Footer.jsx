import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/home" className="hover:text-indigo-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-indigo-400 transition">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          {/* Phone */}
          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-black" />
            <a href="tel:+917893475910" className="text-indigo-600 hover:text-indigo-800 transition">
              7893475910
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-black" />
            <a href="mailto:thanushch06@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition">
              Mail Us
            </a>
          </p>

          {/* WhatsApp */}
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-black" />
            <a
              href="https://wa.me/917893475910?text=Hello%20HandArt%20Gallery!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 transition"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/@neeru83/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition text-2xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/gomukhi_creations?igsh=dXNjMHF1dzNjZHdk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800">
        <div className="text-center py-5 text-gray-500 text-sm">
          © {new Date().getFullYear()} Gomukhi Creations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;


// https://www.youtube.com/@neeru83

// https://www.instagram.com/gomukhi_creations?igsh=dXNjMHF1dzNjZHdk

// 7013458008
// thanush2006@gmail.com 
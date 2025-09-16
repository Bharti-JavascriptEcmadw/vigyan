import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLink,
  FaFlask,
  FaNewspaper,
} from 'react-icons/fa';

const Footer = () => {
  // Explicit label/path pairs for Useful Links
  const Links = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Event', path: '/event' },
    { label: 'Courses', path: '/courses' },
    { label: 'Test Series', path: '/test-series' },
    { label: 'Privacy  Policy', path: '/company-policy' },
    
  ];

  // Explicit label/path pairs for Labs & Programs
  const Programs = [
    { label: 'STEM & Robotics Lab', path: '/courses' },
    { label: 'AI AND IOT LAB',      path: '/courses' },
    { label: 'AR/VR LAB',           path: '/courses' },
    { label: '21st Century Showcase School', path: '/courses' },
    { label: 'Pre-Tinkering Lab',    path: '/courses' },
    { label: 'ATAL Tinkering Lab',   path: '/courses' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 text-sm w-full">
      {/* Main Footer */}
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About & Contact */}
        <div>
          <img src="/logo192.png" alt="Vigyan Pathshala" className="w-40 mb-5" />
          <p className="mb-6 leading-relaxed">
            At Vigyan Pathshala Pvt. Ltd., we believe education should inspire curiosity,
            creativity, and innovation.
          </p>
          <div className="space-y-4 text-base">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1.5 text-orange-400" />
              <span>+91 8303309334</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1.5 text-orange-400" />
              <span>
                Corporate Office: S-170, Ground Floor, Sahara Shopping Center, Faizabad Road, Indira Nagar,
                Lucknow – 226016
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1.5 text-orange-400" />
              <span>
                Regd. Office: SA-1/174 Sarnath Road, Nai Basti, Pandeypur – Varanasi – 221002
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1.5 text-orange-400" />
              <a
                href="mailto:info@vigyanpathshala.com"
                className="hover:text-orange-400 transition"
              >
                info@vigyanpathshala.com
              </a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
            <FaLink /> Useful Links
          </h4>
          <ul className="space-y-3">
            {Links.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition hover:text-orange-400 ${
                      isActive ? 'text-orange-400 font-semibold' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            {/* Brochure PDF still uses a normal <a> because it’s a static asset */}
            <li>
              <NavLink
                to="/assets/vigyan/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-800 text-white transition"
              >
                Brochure
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Labs & Programs */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
            <FaFlask /> Labs & Programs
          </h4>
          <ul className="space-y-3">
            {Programs.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition hover:text-orange-400 ${
                      isActive ? 'text-orange-400 font-semibold' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
            <FaNewspaper /> Newsletter
          </h4>
          <p className="mb-4">Subscribe to get the latest updates and news.</p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md text-gray-800 mb-3 focus:outline-none"
          />
          <button className="w-full bg-teal-400 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-full flex items-center justify-center gap-2 transition">
            SUBSCRIBE <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-white/10 py-4">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-left">
          <p className="text-sm text-gray-400">
            © 2025 <span className="text-white font-medium">Vigyan Pathshala Pvt. Ltd.</span> All Rights Reserved.
          </p>

          {/* Social Icons (remain <a> tags because these are external URLs) */}
          <div className="flex justify-center md:justify-end gap-3">
            <a
              href="https://www.facebook.com/vigyaninpathshala?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1877F2] p-2 rounded-full hover:scale-110 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/918303309334"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/robotics_sir/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E4405F] text-white p-2 rounded-full hover:scale-110 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] text-white p-2 rounded-full hover:scale-110 transition"
              aria-label="Telegram"
            >
              <FaPaperPlane />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

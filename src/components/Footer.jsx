"use client";
import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  MessageCircle,
  Youtube,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#012758] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <h3 className="text-xl font-semibold mb-6 relative">
                About Us
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 -mb-3"></div>
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-lg mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">+2 123 654 7898</span>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-lg mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">
                  25/B Milford Road, New York
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-lg mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">info@example.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 -mb-3"></div>
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Terms Of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Update News
                </a>
              </li>
            </ul>
          </div>

          {/* Our Campus */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Our Campus
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 -mb-3"></div>
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Campus Safety
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Student Activities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Academic Department
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Planning & Administration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Office Of The Chancellor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center"
                >
                  <span className="text-orange-500 mr-2">▶</span>
                  Facility Services
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Newsletter
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 -mb-3"></div>
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-orange-500 transition-colors duration-200"
                />
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                SUBSCRIBE NOW
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-400 text-sm">
                © Copyright 2025 <span className="text-orange-500">GMA International School</span>{" "}
                All Rights Reserved. | Design & Development By Hover Business Services LLP
              </p>
            </div>

            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

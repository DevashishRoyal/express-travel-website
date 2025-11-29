import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Do you<br/>Have something<br/>to sell through us?</h3>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Reach Us</h4>
              <p className="text-sm mb-1">Express Travel Corporate Services</p>
              <p className="text-sm mb-1">Private Limited</p>
              <p className="text-sm mb-1">3rd No.20, Dandebury Street,</p>
              <p className="text-sm">Nungambakkam, Chennai-600034</p>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/luxurycar" className="hover:underline">Luxury Car</Link></li>
              <li><Link to="/team" className="hover:underline">Team</Link></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Instagram</a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Phone No</p>
                <p>044-44 2827 2279 / 4203 7171 /</p>
                <p>+91 98410 98410</p>
              </div>
              <div>
                <p className="font-semibold">Mobile No</p>
                <p>Whatsapp @ +91 98410 98410</p>
                <p>Mobile No +91 81111278 / +91-9786629662</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p>anbuarjunesstravelcorp.com /</p>
                <p>booking@expresstravelcorp.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Express Travel Corporate Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

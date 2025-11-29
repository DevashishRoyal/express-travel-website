import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/aboutus' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'luxury-car', label: 'Luxury Car', path: '/luxurycar' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'clients', label: 'Clients', path: '/clients' },
    { id: 'branches', label: 'Branches', path: '/branches' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 text-base font-medium">
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.path}
            className={`hover:text-blue-600 transition-colors ${
              isActive(item.path) ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pb-4 border-t mt-4 pt-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2 px-2 hover:bg-gray-50 rounded transition-colors ${
                  isActive(item.path) ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

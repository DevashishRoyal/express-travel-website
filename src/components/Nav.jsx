import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X ,Search} from 'lucide-react';

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
      <div className="hidden lg:flex items-center space-x-10">

        {/* Menu Items */}
        <nav className="flex items-center space-x-8 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`transition ${
                isActive(item.path)
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search Icon */}
        <Search className="w-5 h-5 text-gray-700 hover:text-blue-600 cursor-pointer" />

        {/* Login Button */}
        {/* <button className="px-5 py-2 bg-white border border-blue-200 rounded-full shadow-sm hover:shadow-md transition text-sm font-medium">
          Register / Login
        </button> */}

        {/* Cart */}
        {/* <div className="relative cursor-pointer">
          <ShoppingBag className="w-6 h-6 text-gray-800" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-2xl shadow-md mt-3 py-4 px-6">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-2 rounded transition ${
                  isActive(item.path)
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 space-y-3">
            <button className="w-full px-5 py-2 bg-white border border-blue-200 rounded-full shadow">
              Register / Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

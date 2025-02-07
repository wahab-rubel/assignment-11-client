import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <footer className="footer bg-neutral text-neutral-content p-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Services Section */}
    <nav>
      <h6 className="footer-title text-xl font-bold mb-4">Services</h6>
      <ul className="space-y-2">
        <li><Link  className="link link-hover">Branding</Link></li>
        <li><Link className="link link-hover">Design</Link></li>
        <li><Link className="link link-hover">Marketing</Link></li>
        <li><Link className="link link-hover">Advertisement</Link></li>
      </ul>
    </nav>

    {/* Company Section */}
    <nav>
      <h6 className="footer-title text-xl font-bold mb-4">Company</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">About us</a></li>
        <li><a className="link link-hover">Contact</a></li>
        <li><a className="link link-hover">Jobs</a></li>
        <li><a className="link link-hover">Press kit</a></li>
      </ul>
    </nav>

    {/* Legal Section */}
    <nav>
      <h6 className="footer-title text-xl font-bold mb-4">Legal</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">Terms of use</a></li>
        <li><a className="link link-hover">Privacy policy</a></li>
        <li><a className="link link-hover">Cookie policy</a></li>
      </ul>
    </nav>

    {/* Social Media Section */}
    <div>
      <h6 className="footer-title text-xl font-bold mb-4">Follow Us</h6>
      <p className="mb-4">Join us on social media and stay updated.</p>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="Instagram"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  </div>
  <div className="mt-8 border-t border-neutral-focus pt-4 text-center">
    <p>© {new Date().getFullYear()} HotelBooking. All rights reserved.</p>
  </div>
</footer>
 );
};

export default Footer;
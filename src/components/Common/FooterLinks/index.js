import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterLinks = () => (
  <footer className="bg-gray-800 text-gray-200 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/">
            <a className="flex items-center mb-4">
              <Image src="/logo.svg" alt="Company Logo" width={120} height={40} />
            </a>
          </Link>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            <li><Link href="/about"><a className="text-sm hover:text-white">About Us</a></Link></li>
            <li><Link href="/careers"><a className="text-sm hover:text-white">Careers</a></Link></li>
            <li><Link href="/blog"><a className="text-sm hover:text-white">Blog</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            <li><Link href="/contact"><a className="text-sm hover:text-white">Contact Us</a></Link></li>
            <li><Link href="/faq"><a className="text-sm hover:text-white">FAQ</a></Link></li>
            <li><Link href="/help"><a className="text-sm hover:text-white">Help Center</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Legal
          </h3>
          <ul className="space-y-2">
            <li><Link href="/terms"><a className="text-sm hover:text-white">Terms of Service</a></Link></li>
            <li><Link href="/privacy"><a className="text-sm hover:text-white">Privacy Policy</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-sm text-gray-400">
          Follow us
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.55 0 11.68-6.28 11.68-11.72 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.36.65 4.07 4.07 0 001.8-2.24 8.19 8.19 0 01-2.6.99 4.07 4.07 0 00-6.93 3.71 11.56 11.56 0 01-8.39-4.25 4.07 4.07 0 001.26 5.44 4.07 4.07 0 01-1.84-.51v.05a4.07 4.07 0 003.27 3.99 4.07 4.07 0 01-1.84.07 4.07 4.07 0 003.8 2.83A8.18 8.18 0 012 18.58a11.6 11.6 0 006.29 1.84"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterLinks;

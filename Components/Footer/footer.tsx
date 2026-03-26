"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">KhelSuchna</h2>
          <p className="text-gray-400">
            Stay updated with latest cricket, football, chess news, and tournaments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white">News</Link>
            </li>
            <li>
              <Link href="/tournaments" className="hover:text-white">Tournaments</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/news?category=cricket" className="hover:text-white">Cricket</Link>
            </li>
            <li>
              <Link href="/news?category=football" className="hover:text-white">Football</Link>
            </li>
            <li>
              <Link href="/news?category=chess" className="hover:text-white">Chess</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: info@khelsuchna.com</p>
          <p className="text-gray-400">Phone: +91 123 456 7890</p>
          <p className="text-gray-400 mt-2">Address: Udaipur, India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} KhelSuchna. All rights reserved.
      </div>
    </footer>
  );
}
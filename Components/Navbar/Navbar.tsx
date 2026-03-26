"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

export default function Navbar() {
  const pathname = usePathname();

  // Pages where links should be hidden
  const hideLinks = ["/login"].includes(pathname);

  return (
    <nav className="bg-sky-700 text-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
  Khel Suchna
</Link>

      {/* Nav Links */}
      {!hideLinks && (
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
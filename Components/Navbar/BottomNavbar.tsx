// components/navbar/BottomNavbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-300 text-white shadow-md border-t border-blue-700 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center text-xs transition ${
                active ? "text-blue-600" : "text-black"
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

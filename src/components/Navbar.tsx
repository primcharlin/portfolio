import Image from "next/image";
import Link from "next/link";

import BeauLogo from "@/assets/beau logo-02.png";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Works", href: "#works" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="navbar sticky top-0 z-50 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="navbar__logo-link">
          <Image
            src={BeauLogo}
            alt="Primcharlin logo"
            className="navbar__logo"
            priority
          />
        </a>

        <div className="flex items-center gap-5 text-sm opacity-80">
          {nav.map((i) =>
            i.href.startsWith("#") ? (
              <a key={i.label} href={i.href} className="hover:opacity-60">
                {i.label}
              </a>
            ) : (
              <Link key={i.label} href={i.href} className="hover:opacity-60">
                {i.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

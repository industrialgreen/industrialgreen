import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";

export const links = [
  { href: "/", text: "home" },
  { href: "/indoor", text: "indoor" },
  { href: "/outdoor", text: "outdoor" },
  { href: "/products", text: "products" },
  { href: "/contact", text: "contact" },
];
const Navbar = () => {
  const path = usePathname();
  const { t } = useTranslation("common");

  const [screenWidth, setScreenWidth] = useState<number>();
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const isMobile = screenWidth!! < 767;

  return (
    <nav>
      <Image width={72} height={72} src="/ig-logo.svg" alt="logo" />
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className="nav-items-container">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${
                path === link.href ||
                (path.startsWith("/products") && link.href === "/products")
                  ? "active"
                  : ""
              }`}
            >
              <p>{t(link.text)}</p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  const { t } = useTranslation("common");
  const links = [
    { href: "/", text: t("home") },
    { href: "/indoor", text: t("indoor") },
    { href: "/outdoor", text: t("outdoor") },
    { href: "/products", text: t("products") },
    { href: "/contact", text: t("contact") },
  ];
  return (
    <nav>
      <Image width={72} height={72} src="/ig-logo.svg" alt="logo" />
      <div>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`${link.href === path ? "active" : ""}`}
          ><p>
            {link.text}
          </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { links } from "./Navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const Path = (props: any) => (
    <motion.path
      fill="#000"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  );

const transition = { duration: 0.3 };

const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useTranslation("common");
    const path = usePathname();
    
    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    
    const variants = {
        show: {
          transform: "translateX(0em)",
          opacity: 1,
        },
        hide: {
          transform: "translateX(5em)",
          opacity: 0,
        },
      };

  return (
    <div className="hamburger-container">
        <button className="burger-button" onClick={toggleMenu}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5"},
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                    transition={transition}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={transition}
                />
                <Path
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346"},
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                    transition={transition}
                />
            </svg>
        </button>
        <motion.div className="menu-container"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={menuTransition}
        >

        <div className="menu-container-list">
            {links.map(link => (
                <motion.div
                    key={link.text}
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                          ...variants.show,
                          transition: { delay: 0.5, duration: 0.5 },
                        },
                        hide: {
                          ...variants.hide,
                          transition: { delay: 0.05, duration: 0.05 },
                        },
                      }}
                    className="burger-item"
                    >
                    <Link href={link.href} onClick={toggleMenu} className={`${link.href === path ? "green" : ""}`}>{t(link.text)}</Link>
                </motion.div>
            ))}
        </div>
        </motion.div >
    </div>
  );
}

export default MobileMenu
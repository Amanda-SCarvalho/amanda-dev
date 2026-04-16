"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleYScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleYScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleYScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-center transition-all duration-1000 ease-out">
      <motion.div
        className="pointer-events-auto relative w-full max-w-[1200px] md:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`mt-0 w-full overflow-hidden bg-transparent py-5 transition-all duration-300 ease-out md:py-[9px] ${
            isScrolled && "md:mt-[6px]"
          }`}
          style={{
            contain: "paint",
          }}
        >
          {/* Animated background blur */}
          <motion.div
            className="absolute inset-0 transition-all duration-100 ease-out md:rounded-full"
            animate={{
              backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
              WebkitBackdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated background overlay */}
          <motion.div
            className="absolute inset-0 bg-[#424242] transition-all duration-300 ease-out md:rounded-full"
            animate={{
              opacity: isScrolled ? 0.6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="mx-auto w-full px-6">
            <NavbarContent />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const NavbarContent = () => (
  <header className="relative z-50 flex items-center justify-between">
    <NavIcons />
    <Logo />

    <div className="hidden md:block">
      <NavLinks />
    </div>

    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Menu className="text-foreground transition-colors hover:text-violet-400" />
        </motion.button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-neutral-900/95 backdrop-blur-sm"
      >
        <SheetClose />

        <NavLinks />
      </SheetContent>
    </Sheet>
  </header>
);

export default NavBar;

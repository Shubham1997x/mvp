"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "../Logo";
import { siteConfig } from "@/config/siteConfig";

const navItems = siteConfig.navigationLinks;

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setShowRectangle(scrollY > viewportHeight * 0.8);

      let currentSection = "";
      const offset = 150; // Offset from top of viewport

      // Find the section that is currently most visible in viewport
      // Check sections in order and find the one that's past the offset
      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if its top has passed the offset point
          // and it's still visible in the viewport
          if (rect.top <= offset && rect.bottom > 0) {
            currentSection = item.href.replace("#", "");
          } else if (rect.top > offset) {
            // If we've passed all sections that could be active, break
            break;
          }
        }
      }

      if (scrollY < 100) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      className={`${showRectangle ? "fixed" : "absolute"} top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !showRectangle ? "bg-white/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 pb-6 border-b border-gray-200 mb-6">
                  <Logo className="h-10 w-10" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-lg text-foreground leading-tight">
                      {siteConfig.logoText}
                    </span>
                    <span className="text-xs text-gray-500 leading-tight">
                      by Wantace
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="text-base font-medium text-foreground hover:text-primary-cta hover:bg-gray-50 transition-all duration-200 cursor-pointer focus:outline-none rounded-lg px-4 py-3"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Button
                    className="bg-primary-cta hover:bg-primary-cta-hover font-medium text-white text-base w-full py-3"
                    onClick={() => {
                      handleContact();
                      setMobileMenuOpen(false);
                    }}
                    aria-label={siteConfig.contactCTA.label}
                  >
                    {siteConfig.contactCTA.label}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center justify-between h-16 relative">
          {!showRectangle && (
            <>
              <motion.a
                href="/"
                className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo className="h-7 w-7 sm:h-10 sm:w-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sm sm:text-base text-foreground leading-tight truncate">
                    {siteConfig.logoText}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight">
                    by Wantace
                  </span>
                </div>
              </motion.a>

              <div className="hidden border border-gray-200 rounded-md px-4 py-1 lg:flex items-center gap-4 xl:gap-5 absolute left-1/2 -translate-x-1/2">
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative text-sm lg:text-base font-medium transition-colors duration-200 cursor-pointer group whitespace-nowrap focus:outline-none ${
                        isActive
                          ? "text-primary-cta"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-primary-cta transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </a>
                  );
                })}
              </div>

              <div className="hidden lg:block">
                <Button
                  onClick={handleContact}
                  className="bg-primary-cta hover:bg-primary-cta-hover text-white text-base font-medium px-4 py-2 h-auto"
                  aria-label={siteConfig.contactCTA.label}
                >
                  {siteConfig.contactCTA.label}
                </Button>
              </div>
            </>
          )}

          {showRectangle && (
            <div className="hidden lg:flex items-center w-full justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 border border-gray-200 rounded-lg px-2 py-1 flex items-center gap-3 lg:gap-4"
              >
                <motion.a
                  href="/"
                  className="flex items-center group shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Logo className="h-7 w-7 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>

                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative text-sm lg:text-base font-medium transition-colors duration-200 cursor-pointer group whitespace-nowrap focus:outline-none rounded px-1 ${
                        isActive
                          ? "text-primary-cta"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      aria-label={`Navigate to ${item.label} section`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-primary-cta transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      ></span>
                    </a>
                  );
                })}

                <Button
                  onClick={handleContact}
                  className="bg-primary-cta hover:bg-primary-cta-hover text-white text-sm font-medium px-3 py-1.5 rounded-sm h-auto leading-tight"
                  aria-label={siteConfig.contactCTA.label}
                >
                  {siteConfig.contactCTA.label}
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};


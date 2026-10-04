import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import WhoIHelp from "./components/WhoIHelp";
import RequestSite from "./components/RequestSite";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CollapsibleMenu from "./components/CollapsibleMenu";
import TestimonialModal from "./components/TestimonialModal";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInRequestSiteSection, setIsInRequestSiteSection] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHeroSection(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById("request-site");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInRequestSiteSection(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToWhoIHelp = () => {
    window.dispatchEvent(new CustomEvent("expand-who-i-help"));
    const whoIHelpElement = document.getElementById("who-i-help");
    if (whoIHelpElement) {
      whoIHelpElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToRequestSite = () => {
    const requestElement = document.getElementById("request-site");
    if (requestElement) {
      requestElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white overflow-x-hidden font-sans">
      {/* Full-Screen Website Preloader (Woodshop Lego Bricks assembling stylized Bear Head) */}
      <Preloader />

      <main>
        {/* Hero Section */}
        <Hero 
          onRequestSiteClick={handleScrollToRequestSite}
          onContactClick={handleScrollToContact} 
          onWhoIHelpClick={handleScrollToWhoIHelp}
          onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        />

        {/* Who Do I Help Section */}
        <WhoIHelp />

        {/* Request Your Site Section */}
        <RequestSite />
      </main>

      {/* Minimalist Dark Footer */}
      <Footer />

      {/* Collapsible Slide-in Menu */}
      <CollapsibleMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onWhoIHelpClick={handleScrollToWhoIHelp}
        onRequestSiteClick={handleScrollToRequestSite}
      />

      {/* Editorial WhatsApp Contact Widget (hidden when in Request Site section or menu is open, and hidden on mobile while in hero section) */}
      <WhatsAppWidget 
        isHidden={isMenuOpen || isInRequestSiteSection} 
        hideOnMobileInHero={isInHeroSection}
      />

      {/* Testimonials Review Modal (Hash-routed via #testimonial or #testimonials) */}
      <TestimonialModal />
    </div>
  );
}


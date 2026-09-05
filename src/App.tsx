import React, { useState } from "react";
import Hero from "./components/Hero";
import WhoIHelp from "./components/WhoIHelp";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CollapsibleMenu from "./components/CollapsibleMenu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToWhoIHelp = () => {
    const whoIHelpElement = document.getElementById("who-i-help");
    if (whoIHelpElement) {
      whoIHelpElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white overflow-x-hidden font-sans">
      <main>
        {/* Hero Section */}
        <Hero 
          onContactClick={handleScrollToContact} 
          onWhoIHelpClick={handleScrollToWhoIHelp}
          onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        />

        {/* Who Do I Help Section */}
        <WhoIHelp />
      </main>

      {/* Minimalist Dark Footer */}
      <Footer />

      {/* Collapsible Slide-in Menu */}
      <CollapsibleMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onWhoIHelpClick={handleScrollToWhoIHelp}
      />

      {/* Editorial WhatsApp Contact Widget (hidden when collapsible menu is open) */}
      <WhatsAppWidget isHidden={isMenuOpen} />
    </div>
  );
}

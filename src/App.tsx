import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoIHelp from "./components/WhoIHelp";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToContact = () => {
    const contactElement = document.getElementById("process");
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
      {/* Navigation Header */}
      <Header onContactClick={handleScrollToContact} />

      <main>
        {/* Hero Section */}
        <Hero 
          onContactClick={handleScrollToContact} 
          onWhoIHelpClick={handleScrollToWhoIHelp}
        />

        {/* Who Do I Help Section */}
        <WhoIHelp />

        {/* Work with Bear in 2 Easy Steps Section */}
        <Steps />
      </main>

      {/* Minimalist Dark Footer */}
      <Footer />
    </div>
  );
}

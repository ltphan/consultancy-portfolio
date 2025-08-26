import { useState } from "react";

const navTabs = ["Get In Touch"];

const NavigationHeader = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleSetNavClick = (tab: string) => {
    const currentTab = tab === "Get In Touch" ? "contact" : "";
    const divSectionElement = document.getElementById(currentTab);

    if (divSectionElement) {
      setActiveTab(currentTab);
      divSectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full fixed top-0 z-20 bg-[#101820]/90 backdrop-blur navigation-header">
      <nav className="max-w-none w-full flex items-center justify-between px-8 py-4 relative overflow-hidden">
        <div className="nav-orb nav-orb-1"></div>
        <div className="nav-orb nav-orb-2"></div>
        <div className="nav-orb nav-orb-3"></div>
        <span
          className="text-2xl font-serif font-bold tracking-tight text-white select-none"
          style={{ fontFamily: "Lora, Georgia, serif" }}
        >
          LP
        </span>
        <div className="flex gap-8">
          {navTabs.map((tab) => (
            <div
              key={tab}
              onClick={() => handleSetNavClick(tab)}
              className={`nav-pill ${
                activeTab === tab ? "nav-pill-active" : ""
              }`}
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              {tab}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavigationHeader;

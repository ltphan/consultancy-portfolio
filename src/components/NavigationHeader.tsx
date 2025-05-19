import { useState } from "react";

const navTabs = ["work", "contact"];

/**
 * TODO: hamburger icon on smaller mobile devices
 */
const NavigationHeader = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleSetNavClick = (tab: string) => {
    const currentTab = tab;
    const divSectionElement = document.getElementById(currentTab);

    if (divSectionElement) {
      divSectionElement.scrollIntoView({ behavior: "smooth" });
      setActiveTab(currentTab);
    }
  };

  return (
    <header className="w-full fixed top-0 z-20 bg-[#101820]/90 backdrop-blur border-b border-[#222]">
      <nav className="max-w-none w-full flex items-center justify-between px-8 py-4">
        <span
          className="text-2xl font-serif font-bold tracking-tight text-white select-none"
          style={{ fontFamily: "Georgia, Times New Roman, serif" }}
        >
          linh phan consulting
        </span>
        <div className="flex gap-8">
          {navTabs.map((tab) => (
            <div
              key={tab}
              onClick={() => handleSetNavClick(tab)}
              className={`cursor-pointer text-lg font-semibold transition-colors duration-200 px-2 py-1 rounded text-white hover:text-[#0047ab] focus:text-[#0047ab] ${
                activeTab === tab
                  ? "text-[#0047ab] underline underline-offset-4"
                  : ""
              }`}
              style={{ fontFamily: "Inter, Arial, sans-serif" }}
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

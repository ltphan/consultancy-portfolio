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
    <header className="w-full fixed top-0 z-10 pt-4">
      <nav className="w-content  py-2 flex items-center justify-between px-4 w-full">
        <h1>linh phan</h1>
        <div className="flex gap-3">
          {navTabs.map((tab) => (
            <div
              key={tab}
              onClick={() => handleSetNavClick(tab)}
              className={`cursor-pointer hover:text-blue-700 ${
                activeTab === tab ? "font-bold" : ""
              }`}
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

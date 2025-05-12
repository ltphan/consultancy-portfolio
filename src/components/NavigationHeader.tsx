import { useState } from "react";

const navTabs = ["about", "services", "work", "contact"];

const NavigationHeader = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleSetNavClick = (tab: string) => {
    const currentTab = tab;
    const divSectionElement = document.getElementById(currentTab);

    console.log({ divSectionElement });

    if (divSectionElement) {
      divSectionElement.scrollIntoView({ behavior: "smooth" });

      setActiveTab(currentTab);
      console.log({ currentTab });
    }
  };

  return (
    <header className="w-content sticky pt-4 z-10 top-0">
      <nav className="rounded-2xl border-2 py-2 flex items-center justify-between px-4 w-full bg-sky-300">
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

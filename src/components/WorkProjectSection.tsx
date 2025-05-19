import { useState } from "react";

const projects = [
  {
    id: "milkshake-blog",
    title: "milkshake blog",
    imgSrc: "/images/milkshake-blog.png",
    altText: "Milkshake Blog Image",
    technologies: ["Astro", "Vanilla JS", "HTML/CSS"],
    description: `I designed and developed a blog that specializes in F1 motorsport
    gossip magazine for women, creating a responsive digital publication
    that brings the excitement of Formula 1 to a female audience. The
    platform features a clean, visually engaging interface that blends
    racing news with lifestyle elements.`,
  },
  {
    id: "brex-app",
    title: "brex card and expense management",
    imgSrc:
      "https://cdn.prod.website-files.com/64dc251f5942d90e0038cc65/64ffa942938c27ea2cedf83d_brex-mobile.png",
    altText: "Brex Expense Management App on Mobile Image",
    technologies: ["React Native", "React", "TypeScript", "Expo", "GraphQL"],
    description: `I revamped and redesigned the Brex mobile application for enterprise customers, focusing on
              critical expense management features including streamlined account
              creation and detailed card transaction tracking. The app serves as a
              cornerstone financial tool that helped secure enterprise deals with
              companies like Coinbase and DoorDash.`,
  },
  {
    id: "clio-for-clients",
    title: "clio for clients",
    imgSrc: "/images/clio-for-clients.png",
    altText: "Clio for clients mobile app image",
    technologies: ["React Native", "TypeScript", "GraphQL"],
    description: `I built and launched Clio's first consumer product during COVID-19,
              creating essential remote collaboration capabilities between lawyers
              and their clients when in-person meetings weren't possible. This
              strategic innovation opened a new market opportunity and solidified
              Clio's position as a legal tech leader, serving over 600,000+
              clients.`,
  },
  {
    id: "clio-for-lawyers",
    title: "clio for lawfirms and lawyers",
    imgSrc: "/images/clio-for-lawyers.png",
    altText: "Clio For Lawfirms and Lawyers App Image",
    technologies: ["React Native", "TypeScript", "GraphQL"],
    description: `I led the comprehensive revamp and redesign of Clio's flagship
              mobile application for both iOS and Android platforms. I implemented
              critical features including case details management, transaction
              tracking, and secure PDF document uploading, transforming the user
              experience. This redesign dramatically increased app store ratings
              from 2.3 to 4.8, garnering over 6,000+ positive reviews and
              significantly enhancing the digital workflow for 150,000+ legal
              professionals.`,
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 text-gray-400 transition-all duration-300 transform ${
      open ? "rotate-180" : ""
    }`}
  >
    <path
      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const WorkProjectSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mb-20">
      <h3
        className="text-4xl font-serif font-bold mb-10 text-center tracking-tight"
        style={{ fontFamily: "Georgia, Times New Roman, serif", color: "#fff" }}
      >
        My <span style={{ color: "#0047ab", fontStyle: "italic" }}>Work</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(
          ({ id, title, imgSrc, altText, technologies, description }) => {
            const open = openId === id;
            return (
              <div
                key={id}
                className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col mb-4"
              >
                <img
                  src={imgSrc}
                  alt={altText}
                  className="rounded-lg mb-4 w-full object-cover"
                  style={{ maxHeight: "260px", objectFit: "cover" }}
                />
                <div
                  className="flex items-center justify-between cursor-pointer mb-2"
                  onClick={() => handleToggle(id)}
                >
                  <h4
                    className="text-2xl font-bold"
                    style={{
                      color: "#0047ab",
                      fontFamily: "Inter, Arial, sans-serif",
                    }}
                  >
                    {title}
                  </h4>
                  <ChevronIcon open={open} />
                </div>
                {open && (
                  <>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-[#0047ab] px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-gray-700"
                      style={{ fontFamily: "Inter, Arial, sans-serif" }}
                    >
                      {description}
                    </p>
                  </>
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default WorkProjectSection;

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
    description: `Led the redesign and development of Clio's flagship mobile app, delivering new case management, transaction tracking, and secure document upload features. Raised app store ratings from 2.3 to 4.8 and improved the workflow for 150,000+ legal professionals.`,
  },
  {
    id: "bergquist-ai-chat",
    title: "bergquist ai therapist chat",
    imgSrc: "/images/ai-therapist-chat-app.svg",
    altText: "AI Therapist Chat App on Mobile",
    technologies: ["React Native", "Expo", "Supabase", "Open AI LLM"],
    description: `Designed and built an AI-powered companion app for therapy clients, enabling reflective conversations, structured summaries, and actionable insights between sessions. Collaborated closely with Dr. Melissa Bergquist, PsyD to deliver a supportive digital experience for users.`,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
      {projects.map(
        ({ id, title, imgSrc, altText, technologies, description }) => (
          <div
            key={id}
            className="relative bg-gray-50 p-6 rounded-xl shadow-md flex flex-col mb-4 group transition-all duration-300 overflow-hidden"
            style={{ minHeight: "320px" }}
          >
            <img
              src={imgSrc}
              alt={altText}
              className="rounded-lg mb-4 w-full"
              style={{
                maxHeight: "180px",
                objectFit: "contain",
                background: "#f3f4f6",
              }}
            />
            <h4
              className="text-2xl font-bold"
              style={{
                color: "#0047ab",
                fontFamily: "Inter, Arial, sans-serif",
              }}
            >
              {title}
            </h4>
            {/* Overlay for description/technologies */}
            <div
              className="absolute inset-0 bg-white/95 rounded-xl flex flex-col justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 z-10 overflow-auto w-full h-full"
              style={{ pointerEvents: "none" }}
            >
              <div className="flex flex-wrap gap-2 mb-2 w-full">
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
                className="text-gray-700 text-left break-words w-full"
                style={{ fontFamily: "Inter, Arial, sans-serif" }}
              >
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WorkProjectSection;

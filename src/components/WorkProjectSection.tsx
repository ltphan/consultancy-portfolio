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
    title: "brex card and expense management app",
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

const WorkProjectSection = () => {
  const [accordionItems, setAccordionItems] = useState(new Set());

  const handleSelectAccordionItem = (id: string) => {
    setAccordionItems((prev) => {
      const clonedSet = new Set([...prev]);
      if (clonedSet.has(id)) {
        clonedSet.delete(id);
      } else {
        clonedSet.add(id);
      }

      return clonedSet;
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-15 mb-10">
      {projects.map(
        ({ id, title, imgSrc, altText, technologies, description }) => (
          <div key={id}>
            <img
              src={imgSrc}
              alt={altText}
              width="600"
              height="560"
              className="mb-2"
            />
            <div
              className="flex justify-between items-center"
              onClick={() => handleSelectAccordionItem(id)}
            >
              <h2 className="mb-2">{title}</h2>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-all duration-300 transform ${
                  accordionItems.has(id) ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            {accordionItems.has(id) ? (
              <>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p>{description}</p>
              </>
            ) : null}
          </div>
        )
      )}
    </div>
  );
};

export default WorkProjectSection;

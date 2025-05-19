import { useState } from "react";

interface SpotlightSectionProps {
  imgSrc: string;
  projectTitle: string;
  alt: string;
}

const spotlightSectionText = `I developed an AI-powered companion app that extends therapeutic support between sessions. Working closely with Dr. Melissa Bergquist, PsyD, I created a tool that engages users in reflective conversations about their goals and concerns, then provides structured summaries with insights and next steps. This digital solution helps therapy clients document their progress and access supportive guidance when in-person sessions aren't available.`;
const technologies = ["React Native", "Expo", "Supabase", "Open AI LLM"];

const SpotlightSection = ({
  imgSrc,
  projectTitle,
  alt,
}: SpotlightSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-2 mb-10">
      <h3 className="text-xl mb-6 font-medium">My Work</h3>
      <img
        src={imgSrc}
        alt={alt}
        width="w-full"
        height="560"
        className="mb-2"
      />
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="mb-2">{projectTitle}</h2>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-all duration-300 transform ${
            isOpen ? "rotate-180" : ""
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
      {isOpen ? (
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
      ) : null}

      {isOpen && <p>{spotlightSectionText}</p>}
    </div>
  );
};

export default SpotlightSection;

import { useState } from "react";

interface SpotlightSectionProps {
  imgSrc: string;
  projectTitle: string;
  alt: string;
}

const spotlightSectionText = `I developed an AI-powered companion app that extends therapeutic support between sessions. Working closely with Dr. Melissa Bergquist, PsyD, I created a tool that engages users in reflective conversations about their goals and concerns, then provides structured summaries with insights and next steps. This digital solution helps therapy clients document their progress and access supportive guidance when in-person sessions aren't available.`;
const technologies = ["React Native", "Expo", "Supabase", "Open AI LLM"];

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

const SpotlightSection = ({
  imgSrc,
  projectTitle,
  alt,
}: SpotlightSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col mb-12 w-full">
      <img
        src={imgSrc}
        alt={alt}
        className="rounded-xl mb-6 w-full object-cover"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <div
        className="flex items-center justify-between cursor-pointer mb-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2
          className="text-3xl font-bold"
          style={{ color: "#0047ab", fontFamily: "Inter, Arial, sans-serif" }}
        >
          {projectTitle}
        </h2>
        <ChevronIcon open={isOpen} />
      </div>
      {isOpen && (
        <>
          <div className="flex flex-wrap gap-2 mb-4 mt-2">
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
            {spotlightSectionText}
          </p>
        </>
      )}
    </div>
  );
};

export default SpotlightSection;

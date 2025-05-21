import { useState } from "react";

interface ServiceProps {
  id: string;
  title: string;
  description: string[];
}

const services: ServiceProps[] = [
  {
    id: "ai-ml",
    title: "AI & ML Integration",
    description: [
      "Design and implement custom AI solutions - from LLM integration (GPT-4, Claude) to production-ready ML pipelines tailored to your business needs",
      "Develop intelligent systems for document processing, recommendation engines, and natural language search capabilities",
      "Create AI-powered interfaces including chatbots, virtual assistants, and interactive data dashboards",
      "Implement robust AI governance, monitoring, and infrastructure optimized for performance, cost, and responsible use",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: [
      "Build premium native mobile apps with intuitive interfaces and offline reliability",
      "Implement engagement-driving features, strategic push notifications, and performance optimization",
      "Deliver scalable solutions that provide seamless user experiences across all devices",
    ],
  },
  {
    id: "web",
    title: "Web Development & SaaS",
    description: [
      "Create responsive web applications with intuitive interfaces and real-time collaboration features",
      "Develop robust admin dashboards and interactive data visualizations",
      "Integrate external APIs and architect solutions for global scalability",
    ],
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description: [
      "Design high-performance backend systems with real-time data capabilities",
      "Implement large-scale data processing with smart caching for optimal performance",
      "Build secure authentication systems with well-documented APIs for seamless integration",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: [
      "Deploy flexible, scalable cloud infrastructure with agile management for rapid development",
      "Implement 24/7 monitoring with proactive alerting and real-time performance insights",
      "Ensure high availability with automated backups and disaster recovery solutions",
    ],
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: [
      "Implement enterprise-grade security measures with end-to-end encryption",
      "Ensure regulatory compliance (GDPR, SOC2) with comprehensive data privacy protocols",
      "Provide rigorous security testing including vulnerability assessments and penetration testing",
    ],
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 text-[#0047ab] transition-all duration-300 transform ${
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

const ServicesSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-0">
      {services.map(({ id, title, description }, idx) => {
        const open = openId === id;
        return (
          <div key={id}>
            <div
              className={`transition-all duration-300 rounded-xl ${
                open
                  ? "border border-[#0047ab] bg-[#101820]/80"
                  : "hover:bg-[#1a202c]/50"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-2 py-5 focus:outline-none"
                onClick={() => handleToggle(id)}
                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
              >
                <span
                  className="text-2xl font-serif font-bold text-left"
                  style={{ color: open ? "#60a5fa" : "#93c5fd" }}
                >
                  {title}
                </span>
                <ChevronIcon open={open} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 px-2 ${
                  open ? "max-h-96 py-2" : "max-h-0 py-0"
                }`}
              >
                {open && (
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {description.map((point, idx) => (
                      <li key={idx} className="text-gray-100">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {idx < services.length - 1 && (
              <hr className="border-t border-[#222] mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;

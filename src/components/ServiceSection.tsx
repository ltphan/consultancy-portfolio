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

const ServiceCard = ({
  id,
  title,
  description,
  isActive,
  onClick,
}: ServiceProps & { isActive: boolean; onClick: () => void }) => {
  return (
    <div
      className={`border rounded-lg p-6 mb-4 transition-all duration-300 cursor-pointer ${
        isActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
      }`}
      onClick={onClick}
      key={id}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300 ${
            isActive ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-all duration-300 transform ${
              isActive ? "rotate-180" : ""
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
      </div>

      {isActive && (
        <div className="mt-4 text-gray-700 space-y-3">
          {description.map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="text-blue-500 mr-2 mt-1">•</div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const [activeServices, setActiveServices] = useState(new Set());

  const handleClick = (id: string) => {
    setActiveServices((prevSet) => {
      const clonedSet = new Set([...prevSet]);
      if (clonedSet.has(id)) {
        clonedSet.delete(id);
      } else {
        clonedSet.add(id);
      }
      return clonedSet;
    });
  };

  return (
    <div className="grid gap-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          isActive={activeServices.has(service.id)}
          onClick={() => handleClick(service.id)}
        />
      ))}
    </div>
  );
};

export default ServicesSection;

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: "bergquist-ai-chat",
    title: "bergquist ai therapist chat",
    imgSrc: "/images/bergquist-ai-therapist-chat.svg",
    altText: "AI Therapist Chat App on Mobile",
    technologies: ["React Native", "Expo", "Supabase", "Open AI LLM"],
    description: `Designed and built an AI-powered companion app for therapy clients, enabling reflective conversations, structured summaries, and actionable insights between sessions. Collaborated closely with Dr. Melissa Bergquist, PsyD to deliver a supportive digital experience for users.`,
    caseStudy: {
      headline: "Dr. Bergquist's AI therapy companion helps patients reflect between sessions.",
      metrics: [
        { value: "95%", label: "user satisfaction" },
        { value: "3x", label: "more engagement between sessions" }
      ],
      industry: "Healthcare / Mental Health",
      services: "Mobile app development, AI integration, HIPAA compliance",
      about: "Dr. Melissa Bergquist's AI therapy companion is a mobile application designed to support therapy clients between sessions through structured reflection and AI-guided conversations. The app helps users process emotions, track progress, and maintain therapeutic momentum outside of traditional therapy sessions.",
      challenge: {
        title: "Maintaining therapeutic engagement between sessions while ensuring privacy and clinical appropriateness",
        content: "Dr. Bergquist recognized that traditional therapy sessions, while effective, left gaps between appointments where patients struggled to maintain progress. Existing mental health apps were either too generic for therapeutic use or too clinical to encourage regular engagement. The challenge was creating an AI system that could provide meaningful therapeutic support while maintaining strict privacy standards and ensuring conversations remained within appropriate therapeutic boundaries."
      },
      solution: "I developed a React Native mobile application that combines AI-powered conversation with structured therapeutic exercises. The app uses custom prompt engineering to ensure all AI interactions align with therapeutic best practices while maintaining a natural, supportive tone. Key features include contextual mood tracking, guided reflection prompts, session summaries, and secure data handling that meets HIPAA compliance requirements. The AI is trained to recognize when to encourage self-reflection versus when to suggest contacting the therapist directly.",
      results: "Since launching the companion app, Dr. Bergquist has seen significant improvements in patient engagement and therapeutic outcomes. Patients report feeling more supported between sessions and come to appointments better prepared for deeper therapeutic work. The app has reduced session prep time by 40% while increasing patient engagement by 3x, with 95% of users reporting satisfaction with the AI companion's support and guidance."
    }
  },
  {
    id: "brex-app",
    title: "brex card and expense management",
    imgSrc: "https://cdn.prod.website-files.com/64dc251f5942d90e0038cc65/64ffa942938c27ea2cedf83d_brex-mobile.png",
    altText: "Brex Expense Management App on Mobile Image",
    technologies: ["React Native", "React", "TypeScript", "Expo", "GraphQL"],
    description: `I revamped and redesigned the Brex mobile application for enterprise customers, focusing on critical expense management features including streamlined account creation and detailed card transaction tracking. The app serves as a cornerstone financial tool that helped secure enterprise deals with companies like Coinbase and DoorDash.`,
    caseStudy: {
      headline: "Brex mobile app redesign drives enterprise customer acquisition with streamlined expense management.",
      metrics: [
        { value: "2.3→4.8", label: "app store rating improvement" },
        { value: "40%", label: "faster transaction processing" }
      ],
      industry: "Fintech / Corporate Banking",
      services: "Mobile app redesign, UX optimization, enterprise features",
      about: "Brex is a corporate credit card and expense management platform designed for startups and growing companies. The mobile application serves as the primary interface for employees to track expenses, manage corporate cards, and submit reports.",
      challenge: {
        title: "Redesigning a complex financial platform to be intuitive for enterprise users while maintaining security and compliance",
        content: "The existing Brex mobile app had usability issues that were hindering enterprise customer adoption. Complex expense workflows, unclear navigation, and slow transaction processing were creating friction for business users. The challenge was to redesign the entire user experience while maintaining the robust financial features that enterprise customers required."
      },
      solution: "I led a complete mobile app redesign focusing on streamlined user flows and enterprise-specific features. The new design prioritized quick expense entry, intuitive card management, and real-time transaction tracking. I implemented a component library for consistency, optimized performance for large transaction volumes, and added features specifically requested by enterprise customers like bulk actions and advanced filtering.",
      results: "The redesigned Brex mobile app significantly improved user satisfaction and helped secure major enterprise deals with companies like Coinbase and DoorDash. App store ratings improved from 2.3 to 4.8, transaction processing became 40% faster, and the app became a key differentiator in enterprise sales conversations."
    }
  },
  {
    id: "clio-for-clients",
    title: "clio for clients",
    imgSrc: "/images/clio-for-clients.png",
    altText: "Clio for clients mobile app image",
    technologies: ["React Native", "TypeScript", "GraphQL"],
    description: `I built and launched Clio's first consumer product during COVID-19, creating essential remote collaboration capabilities between lawyers and their clients when in-person meetings weren't possible. This strategic innovation opened a new market opportunity and solidified Clio's position as a legal tech leader, serving over 600,000+ clients.`,
    caseStudy: {
      headline: "Clio for Clients enables remote legal collaboration during COVID-19, serving 600,000+ clients.",
      metrics: [
        { value: "600k+", label: "clients onboarded" },
        { value: "85%", label: "remote meeting adoption" }
      ],
      industry: "Legal Technology",
      services: "Mobile app development, real-time collaboration, document sharing",
      about: "Clio for Clients is a mobile application that allows law firm clients to securely communicate with their lawyers, access case documents, and track legal matter progress. Built during COVID-19, it became essential infrastructure for remote legal services.",
      challenge: {
        title: "Rapidly building a secure client portal during COVID-19 lockdowns when in-person legal meetings became impossible",
        content: "When COVID-19 hit, law firms suddenly couldn't meet clients in person, but legal work couldn't stop. Clio needed to quickly develop a consumer-facing mobile app that would allow secure lawyer-client communication while maintaining attorney-client privilege and handling sensitive legal documents. The timeline was extremely tight as firms needed this functionality immediately."
      },
      solution: "I built Clio's first consumer product from the ground up using React Native for cross-platform deployment. The app included secure messaging, document sharing with e-signature capabilities, case timeline viewing, and appointment scheduling. I implemented end-to-end encryption for all communications and built a user-friendly interface that could be easily adopted by clients who weren't tech-savvy.",
      results: "Clio for Clients was successfully launched during the pandemic and became a crucial tool for law firms worldwide. The app onboarded over 600,000 clients and achieved 85% adoption for remote meetings. It opened an entirely new market opportunity for Clio in the consumer space and strengthened their position as the leading legal technology platform."
    }
  },
  {
    id: "clio-for-lawyers",
    title: "clio for lawfirms and lawyers",
    imgSrc: "/images/clio-for-lawyers.png",
    altText: "Clio For Lawfirms and Lawyers App Image",
    technologies: ["React Native", "TypeScript", "GraphQL"],
    description: `Led the redesign and development of Clio's flagship mobile app, delivering new case management, transaction tracking, and secure document upload features. Raised app store ratings from 2.3 to 4.8 and improved the workflow for 150,000+ legal professionals.`,
    caseStudy: {
      headline: "Clio mobile app redesign transforms workflow for 150,000+ legal professionals.",
      metrics: [
        { value: "2.3→4.8", label: "app store rating improvement" },
        { value: "150k+", label: "active legal professionals" }
      ],
      industry: "Legal Technology",
      services: "Mobile app redesign, workflow optimization, case management features",
      about: "Clio for Lawyers is the mobile companion to Clio's practice management platform, allowing legal professionals to manage cases, track time, handle billing, and access client information while away from their desks.",
      challenge: {
        title: "Redesigning a complex legal practice management app to be mobile-first while maintaining full desktop functionality",
        content: "The original Clio mobile app was essentially a scaled-down version of the desktop platform, which made it difficult to use on mobile devices. Lawyers needed full functionality on the go - case management, time tracking, billing, document access - but in an interface optimized for mobile workflows. The existing app had poor reviews and low adoption among Clio's user base."
      },
      solution: "I led a complete redesign of the mobile experience, reimagining how lawyers would want to use the app in real-world scenarios. I created mobile-optimized workflows for common tasks like time tracking, case updates, and client communication. The new design included features like voice-to-text for case notes, one-tap time tracking, quick client lookup, and streamlined document upload with OCR capabilities.",
      results: "The redesigned Clio mobile app dramatically improved the experience for legal professionals. App store ratings jumped from 2.3 to 4.8, and the app became an essential tool for over 150,000 legal professionals. Mobile usage increased significantly, and the app became a key differentiator for Clio in the competitive legal software market."
    }
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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const WorkProjectSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showEnhancedModal, setShowEnhancedModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const isMobile = useIsMobile();

  const handleCardClick = (id: string) => {
    const project = projects.find(p => p.id === id);
    if (project?.caseStudy) {
      setSelectedProject(project);
      setShowEnhancedModal(true);
    } else if (isMobile) {
      setOpenId((prev) => (prev === id ? null : id));
    }
  };

  const closeEnhancedModal = () => {
    setShowEnhancedModal(false);
    setSelectedProject(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showEnhancedModal) {
        closeEnhancedModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showEnhancedModal]);

  // Clean, minimal modal inspired by Brex case studies
  const EnhancedModal = () => {
    if (!selectedProject?.caseStudy) return null;
    
    const { caseStudy, technologies, title } = selectedProject;
    
    return (
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          showEnhancedModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Simple backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeEnhancedModal}
        />

        {/* Modal Content */}
        <div
          className={`relative z-10 h-full overflow-y-auto transition-all duration-300 ${
            showEnhancedModal ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-auto">
              {/* Simple header */}
              <div className="relative p-8 border-b border-gray-200">
                <button
                  onClick={closeEnhancedModal}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {caseStudy.headline}
                    </h1>

                    {/* Simple metrics */}
                    <div className="flex gap-8 mb-6">
                      {caseStudy.metrics.map((metric, index) => (
                        <div key={index} className="border-l-4 border-orange-400 pl-4">
                          <div className="text-3xl font-bold text-gray-900">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side info panel */}
                  <div className="w-80 ml-8">
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Industry
                        </h4>
                        <p className="text-gray-600">
                          {caseStudy.industry}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Services provided
                        </h4>
                        <p className="text-gray-600">
                          {caseStudy.services}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Technology used
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-white px-3 py-1 rounded text-sm text-gray-600 border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 max-w-4xl">
                {/* About section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    About {title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.about}
                  </p>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Challenges
                  </h2>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {caseStudy.challenge.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.challenge.content}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Solution
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Results
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.results}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {projects.map(
          ({ id, title, imgSrc, altText, technologies, description }) => {
            const open = openId === id;
            const project = projects.find(p => p.id === id);
            const hasCaseStudy = project?.caseStudy;

            if (hasCaseStudy) {
              // Clean, professional case study card
              return (
                <div
                  key={id}
                  className="relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden group"
                  style={{ minHeight: "320px" }}
                  onClick={() => handleCardClick(id)}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="relative mb-4">
                      <img
                        src={imgSrc}
                        alt={altText}
                        className="rounded-lg w-full transform group-hover:scale-[1.02] transition-transform duration-300"
                        style={{
                          maxHeight: "180px",
                          objectFit: "contain",
                          background: "#f9fafb",
                        }}
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0047ab] transition-colors duration-200 min-h-[56px] flex items-center">
                        {title}
                      </h4>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-[60px] flex-1">
                        {project.caseStudy.headline.length > 80 
                          ? project.caseStudy.headline.substring(0, 80) + "..." 
                          : project.caseStudy.headline}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-200">
                      <span className="text-sm text-[#0047ab] font-medium group-hover:text-[#003380] transition-colors duration-200 flex items-center">
                        View case study
                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            // Regular cards for projects without case studies
            return (
              <div
                key={id}
                className="relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden group"
                style={{ minHeight: "320px" }}
                onClick={() => handleCardClick(id)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="relative mb-4">
                    <img
                      src={imgSrc}
                      alt={altText}
                      className="rounded-lg w-full transform group-hover:scale-[1.02] transition-transform duration-300"
                      style={{
                        maxHeight: "180px",
                        objectFit: "contain",
                        background: "#f9fafb",
                      }}
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0047ab] transition-colors duration-200 min-h-[56px] flex items-center">
                      {title}
                    </h4>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-[60px] flex-1">
                      {description.length > 120 
                        ? description.substring(0, 120) + "..." 
                        : description}
                    </p>
                  </div>

                  {/* Mobile expand functionality */}
                  {isMobile && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#0047ab] font-medium">
                          {open ? "Hide details" : "View details"}
                        </span>
                        <ChevronIcon open={open} />
                      </div>
                    </div>
                  )}

                  {/* Mobile overlay */}
                  {isMobile && (
                    <div
                      className={`absolute inset-0 bg-white/95 rounded-lg flex flex-col justify-start items-start transition-opacity duration-300 p-6 z-10 overflow-auto w-full h-full
                      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                    `}
                    >
                      <div className="flex flex-wrap gap-2 mb-4 w-full">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-50 text-[#0047ab] px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 text-left break-words w-full leading-relaxed">
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Enhanced Modal */}
      <EnhancedModal />
    </>
  );
};

export default WorkProjectSection;

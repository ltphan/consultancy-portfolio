import { useState, useEffect } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: "cobalt-id-platform",
    title: "Cobalt ID Fraud Platform",
    imgSrc: "/images/cobalt-id-platform.png",
    altText: "Cobalt ID Risk Intelligence Platform Dashboard",
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "Material UI",
      "D3.js",
      "Data Visualization",
    ],
    description: `Redesigned and enhanced Cobalt ID's risk intelligence platform, building interactive ownership network visualizations, advanced filtering systems, and comprehensive business profile details views for financial due diligence and KYB processes.`,
    caseStudy: {
      headline:
        "Cobalt ID platform redesign transforms business risk assessment with interactive visualizations and advanced filtering capabilities.",
      metrics: [
        { value: "7", label: "detailed business profile tabs" },
        { value: "360°", label: "ownership network visibility" },
      ],
      industry: "Fintech / Risk Intelligence",
      services: "Platform redesign, data visualization, interactive dashboards",
      companyName: "Cobalt ID",
      about: `Cobalt ID is a comprehensive AI risk intelligence platform that helps financial institutions conduct thorough due diligence and KYB ("Know Your Business") processes on businesses. The platform aggregates and analyzes business data to provide risk assessments, ownership network mapping, and compliance monitoring for decision-makers to ensure businesses in question are fully vetted and not fraudulent.`,
      challenge: {
        title:
          "Transforming complex business data into intuitive, actionable insights for risk assessment professionals",
        content:
          "Cobalt ID's existing platform presented business risk data in a static, difficult-to-navigate user interface that slowed down the due diligence processes. Analysts struggled to understand relationships between businesses in a complex ownership structure, were unable to efficiently filter through risk indicators, and lacked the visual tools needed to quickly surface red flags in business relationships. The platform needed a complete redesign to make critical risk information more accessible and actionable.",
      },
      solution:
        "I led a comprehensive platform redesign focusing on user experience and data visualization. Key improvements included building interactive ownership network graphs with zoom, pan, and clickable nodes for detailed information on businesses and people; designing a 7-tab business profile system covering comprehensive due diligence data; implementing advanced calendar-based and multiselect risk tolerance filters; creating dynamic risk summary cards with visual indicators and expandable details; and developing a responsive timeline view for tracking business changes and updates in real time.",
      results:
        "The redesigned Cobalt ID platform significantly improved the efficiency and effectiveness of business risk assessment workflows. Enhanced data visualization reduced analysis time for complex ownership structures, while the improved user experience supported client retention goals. The interactive ownership network visualization became a key differentiator in client demos, allowing users to quickly identify complex business relationships and potential risks. The comprehensive filtering and timeline features enabled more thorough due diligence while reducing the time required for analysis.",
    },
  },
  {
    id: "brex-app",
    title: "Brex Card and Expense Management",
    imgSrc:
      "https://cdn.prod.website-files.com/64dc251f5942d90e0038cc65/64ffa942938c27ea2cedf83d_brex-mobile.png",
    altText: "Brex Expense Management App on Mobile Image",
    technologies: ["React Native", "React", "TypeScript", "Expo", "GraphQL"],
    description: `I revamped and redesigned the Brex mobile application for enterprise customers, focusing on critical expense management features including streamlined account creation and detailed card transaction tracking. The app serves as a cornerstone financial tool that helped secure enterprise deals with companies like Coinbase and DoorDash.`,
    caseStudy: {
      headline:
        "Brex mobile app redesign drives enterprise customer acquisition with streamlined expense management.",
      metrics: [
        { value: "4.5+", label: "app store rating achieved" },
        { value: "20k+", label: "customers using mobile app" },
      ],
      industry: "Financial Technology",
      services: "Mobile app redesign, UX optimization, enterprise features",
      companyName: "Brex",
      about:
        "Brex is a corporate credit card and expense management platform designed for startups and growing companies. The mobile application serves as the primary interface for employees to track expenses, manage corporate cards, and submit reports.",
      challenge: {
        title:
          "Building an intuitive expense management platform for enterprise customers with full-fledged functionalities that didn't exist on the market",
        content:
          "There was no user-friendly mobile application for enterprise customers on the market that offered spending controls, budgets, and automated reimbursement policies for expense tracking and approval. The competitors in the market had complex expense workflows, unclear navigation, and slow transaction processing times that created friction within large enterprise firms trying to control spend. The challenge was to create a solution from the ground up that kept user experience in mind for easy flow while maintaining robust financial features with security and compliance that global enterprise companies require.",
      },
      solution:
        "I led the complete mobile app redesign that focused on streamlining user flows and enterprise-specific features. The new design prioritized quick expense entry, OCR receipt matching, and real-time transaction tracking. I implemented high-priority features, optimized performance for large transaction volumes, and added features specifically requested by enterprise customers like bulk actions and advanced filtering.",
      results:
        "The Brex mobile app significantly improved user satisfaction and helped secure major enterprise deals with companies like Coinbase, DoorDash, and SeatGeek. The app achieved a 4.5-star rating on both the App Store and Google Play Store and is used by Brex's 20,000+ customers. The app demonstrated deep customer understanding and attention to detail, which became a key differentiator in enterprise sales conversations.",
    },
  },
  {
    id: "clio-for-clients",
    title: "Clio for Clients",
    imgSrc: "/images/clio-for-clients.png",
    altText: "Clio for clients mobile app image",
    technologies: ["React Native", "TypeScript", "GraphQL"],
    description: `I built and launched Clio's first consumer product during COVID-19, creating essential remote collaboration capabilities between lawyers and their clients when in-person meetings weren't possible. This strategic innovation opened a new market opportunity and solidified Clio's position as a legal tech leader, serving over 600,000+ clients.`,
    caseStudy: {
      headline:
        "Clio for Clients enables remote legal collaboration during COVID-19, serving 600,000+ clients.",
      metrics: [
        { value: "600k+", label: "clients onboarded" },
        { value: "85%", label: "mobile application adoption rate" },
      ],
      industry: "Legal Technology",
      services:
        "Mobile app development, real-time collaboration, document sharing",
      companyName: "Clio",
      about:
        "Clio is a legal technology company that offers law firms cloud-based software for law practice management tasks including contract management, client intake, timekeeping, trust accounting and billing",
      challenge: {
        title:
          "Rapidly executing and building a secure client mobile application during COVID-19 lockdowns when in-person legal meetings were forbidden",
        content:
          "When COVID-19 hit in March 2020, restrictions prevented lawyers from meeting their clients in person, but legal work could not stop. Clio needed to quickly address this significant challenge by enabling lawyer-to-client remote collaboration, allowing lawyers' clients to stay on top of communication, documents, and legal tasks all in one place. The timeline was extremely tight as firms needed this functionality immediately.",
      },
      solution:
        "I designed and built Clio's first consumer-facing product from the ground up. The mobile application included high-value features such as secure messaging, document sharing with e-signature capabilities, case timeline viewing, and appointment scheduling. All features were built with end-to-end usability in mind for lawyers' clients",
      results:
        "Clio for Clients was successfully launched during the pandemic and became a crucial remote collaboration tool for law firms and clients worldwide. The mobile application onboarded over 600,000 clients and achieved an 85% adoption rate among lawyers' clients. It opened an entirely new market opportunity for Clio, securing their place as a household brand in the legal industry.",
    },
  },
  {
    id: "clio-for-lawyers",
    title: "Clio for Lawyers and Lawfirms",
    imgSrc: "/images/clio-for-lawyers.png",
    altText: "Clio For Lawfirms and Lawyers App Image",
    technologies: ["React Native", "TypeScript", "GraphQL"],
    description: `Led the redesign and development of Clio's flagship mobile app, delivering new case management, transaction tracking, and secure document upload features. Raised app store ratings from 2.3 to 4.8 and improved the workflow for 150,000+ legal professionals.`,
    caseStudy: {
      headline:
        "Clio mobile app redesign transforms workflow for 150,000+ legal professionals.",
      metrics: [
        { value: "2.3 → 4.8", label: "app store rating improvement" },
        { value: "150k+", label: "active legal professionals" },
      ],
      industry: "Legal Technology",
      services:
        "Mobile app redesign, workflow optimization, case management features",
      companyName: "Clio",
      about:
        "Clio is a legal technology company that offers law firms cloud-based software for law practice management tasks including contract management, client intake, timekeeping, trust accounting, and billing",
      challenge: {
        title:
          "Redesigning a complex legal practice management application to be mobile first",
        content:
          "Customers were complaining that the original Clio mobile application was a scaled-down version of the desktop platform that did not take into account a mobile-first strategy. The poor user experience — from PDF uploading to billing — made it difficult for legal professionals to complete their work on-the-go. Lawyers needed full functionality on the go, including case management, time tracking, billing, secure communication, and document access, all in an interface optimized for mobile. The existing app had poor reviews and low adoption among Clio's user base.",
      },
      solution:
        "I led a complete redesign of the mobile experience, reimagining how lawyers and law firms would want to use an app that suited their and their clients' needs. I prioritized common workflows and tasks to include offline document uploading, real-time case updates, and streamlined communication that enabled quick response times. The new design included one-tap time tracking, streamlined document upload, and calendar integration for scheduling.",
      results:
        "The revamped Clio mobile application dramatically improved the user experience for legal professionals. App Store and Google Play Store ratings soared from 2.3 to 4.8 stars. The mobile app became an essential tool for 150,000+ legal professionals.",
    },
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
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const isMobile = useIsMobile();

  const handleCardClick = (id: string) => {
    const project = projects.find((p) => p.id === id);
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
        onClick={closeEnhancedModal}
      >
        {/* Simple backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal Content */}
        <div
          className={`relative z-10 h-full overflow-y-auto transition-all duration-300 ${
            showEnhancedModal ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <div
              className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Simple header */}
              <div className="relative p-8 border-b border-gray-200">
                <button
                  onClick={closeEnhancedModal}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {caseStudy.headline}
                    </h1>

                    {/* Simple metrics */}
                    <div className="flex gap-8 mb-6 flex-wrap">
                      {caseStudy.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-[#60a5fa] pl-4"
                        >
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

                  {/* Info panel - now below metrics */}
                  <div className="w-full">
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            Industry
                          </h4>
                          <p className="text-gray-600">{caseStudy.industry}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            Services provided
                          </h4>
                          <p className="text-gray-600">{caseStudy.services}</p>
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
              </div>

              {/* Content */}
              <div className="p-8 max-w-4xl">
                {/* About section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    About {caseStudy.companyName || title}
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
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-white mb-4">Featured Work</h2>
        <p className="text-[#cfd8dc] text-lg max-w-2xl mx-auto">
          Explore case studies that show how we've built innovative solutions for businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map(
          ({ id, title, imgSrc, altText, technologies, description }) => {
            const open = openId === id;
            const project = projects.find((p) => p.id === id);
            const hasCaseStudy = project?.caseStudy;

            if (hasCaseStudy) {
              // Clean, professional case study card
              return (
                <div
                  key={id}
                  className="relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden group h-full flex flex-col"
                  onClick={() => handleCardClick(id)}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="relative mb-4 h-[180px] bg-[#f9fafb] rounded-lg flex items-center justify-center">
                      <img
                        src={imgSrc}
                        alt={altText}
                        className="rounded-lg max-w-full max-h-full transform group-hover:scale-[1.02] transition-transform duration-300"
                        style={{
                          objectFit: "contain",
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
                        {(() => {
                          switch (id) {
                            case "brex-app":
                              return "Built mobile app that streamlined expense workflows and drove enterprise customer acquisition including Coinbase and DoorDash.";
                            case "clio-for-clients":
                              return "Building first consumer product to enable remote legal collaboration during COVID-19, that is currently serving 600,000+ clients.";
                            case "clio-for-lawyers":
                              return "Redesigning and revamping top-rated application for lawyers to access pivotal information on-the-go.";
                            case "cobalt-id-platform":
                              return "Revamped and redeisgned AI risk intelligence platform that delivers 85% faster due diligence with interactive ownership network visualizations.";
                            default:
                              return project.caseStudy.headline.length > 80
                                ? project.caseStudy.headline.substring(0, 80) +
                                    "..."
                                : project.caseStudy.headline;
                          }
                        })()}
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
                className="relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden group h-full flex flex-col"
                onClick={() => handleCardClick(id)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="relative mb-4 h-[180px] bg-[#f9fafb] rounded-lg flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={altText}
                      className="rounded-lg max-w-full max-h-full transform group-hover:scale-[1.02] transition-transform duration-300"
                      style={{
                        objectFit: "contain",
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
                      {(() => {
                        switch (id) {
                          case "brex-app":
                            return "Mobile app redesign drives enterprise customer acquisition with streamlined expense management.";
                          case "clio-for-clients":
                            return "First consumer product enables remote legal collaboration during COVID-19, serving 600,000+ clients.";
                          case "clio-for-lawyers":
                            return "Mobile app redesign transforms workflow for 150,000+ legal professionals with 4.8★ rating.";
                          case "cobalt-id-platform":
                            return "Risk intelligence platform redesign delivers 85% faster due diligence with interactive ownership network visualizations.";
                          default:
                            return description.length > 120
                              ? description.substring(0, 120) + "..."
                              : description;
                        }
                      })()}
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
                      ${
                        open
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none"
                      }
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

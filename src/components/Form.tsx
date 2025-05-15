import { useState } from "react";

const services = [
  "AI & ML Intergration",
  "Mobile Development",
  "Web Development & SaaS",
  "Backend & API Development",
  "Cloud & Infrastructure",
  "Enterprise Security",
  "Other",
];

const Form = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServiceOpenClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };
  return (
    <form
      method="post"
      className="grid gap-2 border-2 border-blue-500 w-full h-auto p-6 rounded-md mb-10"
    >
      <div className="grid w-full items-center gap-1.5">
        <label>Full Name</label>
        <input
          type="text"
          className="flex w-full rounded-md border h-10 p-2"
          placeholder="John Smith"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label>Email</label>
        <input
          type="email"
          className="flex w-full rounded-md border h-10 p-2"
          placeholder="john@company.com"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label>Company's website</label>
        <input
          type="email"
          className="flex w-full rounded-md border h-10 p-2"
          placeholder="www.company.com"
        />
      </div>

      <div>
        <label className="block">
          What services are you most interested in?
        </label>
        <div className="relative">
          <button
            id="serviceDropdown"
            className="w-full border rounded-md p-2 lg:p2 text-left flex justify-between items-center"
            onClick={handleServiceOpenClick}
            type="button"
          >
            <span>Select services</span>
            <svg
              className="w-4 h-4 text-white shrink-0"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="black"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {servicesOpen && (
            <div
              id="serviceOptions"
              className="absolute z-50 mt-1 border rounded-md py-1 w-full bg-green-500"
            >
              <div className="overflow-scroll max-h-48">
                {services.map((value) => (
                  <label className="flex items-center px-3 py-2 hover:bg-black/30 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 w-0 h-0"
                      />
                      {
                        <div className="h-4 w-4 border border-[#717171] rounded bg-black/20 flex items-center justify-center transition-colors bg-everyblue border-everyblue">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="black"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <label>Tell me what you want help with</label>
        <textarea
          className="w-full rounded-md border p-2"
          rows={4}
          placeholder="Tell me your goals, challenges, timeline or any other relevant details"
        />
      </div>
      <button className="contact-button !rounded">Get in touch</button>
    </form>
  );
};

export default Form;

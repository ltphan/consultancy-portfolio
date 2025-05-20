import { useState } from "react";

interface FormProps {
  formEndpoint: any;
}

const services = [
  { id: "1", service: "AI & ML Intergration" },
  { id: "2", service: "Mobile Development" },
  { id: "3", service: "Web Development & SaaS" },
  { id: "4", service: "Backend & API Development" },
  { id: "5", service: "Clound & Infrastructure" },
  { id: "6", service: "Enterprise Security" },
  { id: "7", service: "Other" },
];

/**
 * TODO: add Google captcha for spam bots
 * TODO: add data validation
 */

const Form = ({ formEndpoint }: FormProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleServiceOpenClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  const handleSelectedServices = (id: string) => {
    setSelectedServices((prevSet) => {
      const clonedSet = new Set([...prevSet]);
      if (clonedSet.has(id)) {
        clonedSet.delete(id);
      } else {
        clonedSet.add(id);
      }
      return clonedSet;
    });
  };

  const selectedServicesArray = Array.from(selectedServices)
    .map(
      (selectedServiceId) =>
        services.find((service) => service.id === selectedServiceId)?.service
    )
    .filter(Boolean);

  const onHandleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmissionStatus("submitting");

    const formData = new FormData(form);

    if (selectedServicesArray.length > 0) {
      formData.append("selectedServices", selectedServicesArray.join(", "));
    }

    // Remove empty fields
    for (let [key, value] of Array.from(formData.entries())) {
      if (!value) {
        formData.delete(key);
      }
    }

    fetch(formEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmissionStatus("success");
          form.reset();
          setSelectedServices(new Set());
        } else {
          setSubmissionStatus("error");
        }
      })
      .catch((error) => {
        setSubmissionStatus("error");
      });
  };

  return (
    <form
      action={formEndpoint}
      method="post"
      className="grid gap-4 w-full h-auto p-0 mb-0"
      onSubmit={onHandleSubmitForm}
    >
      <div className="grid w-full items-center gap-1.5">
        <label className="text-white">Full Name</label>
        <input
          type="text"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#0047ab] text-white placeholder-gray-400 py-2 mb-6 outline-none transition-colors duration-200"
          placeholder="John Smith"
          name="name"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label className="text-white">Email</label>
        <input
          type="email"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#0047ab] text-white placeholder-gray-400 py-2 mb-6 outline-none transition-colors duration-200"
          placeholder="john@company.com"
          name="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label className="text-white">Company's website</label>
        <input
          type="text"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#0047ab] text-white placeholder-gray-400 py-2 mb-6 outline-none transition-colors duration-200"
          placeholder="www.company.com"
          name="website"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <label className="text-white">
          What size project are you typically working on?
        </label>
        <input
          type="text"
          className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#0047ab] text-white placeholder-gray-400 py-2 mb-6 outline-none transition-colors duration-200"
          placeholder="Budget range (e.g. $15-25k)"
          name="budget"
        />
      </div>

      <div>
        <label className="block text-white">
          What services are you most interested in?
        </label>
        <div className="relative">
          <button
            id="serviceDropdown"
            className="w-full border border-gray-500 rounded-md p-2 lg:p2 text-left flex justify-between items-center bg-[#101820] text-white focus:border-[#0047ab] outline-none transition-colors duration-200"
            onClick={handleServiceOpenClick}
            type="button"
          >
            <span
              className={`${
                selectedServicesArray.length > 0
                  ? "text-white"
                  : "text-gray-400"
              } truncate`}
            >
              {selectedServicesArray.length > 0
                ? selectedServicesArray.length > 2
                  ? `${selectedServicesArray.slice(0, 2).join(", ")} +${
                      selectedServicesArray.length - 2
                    } more`
                  : selectedServicesArray.join(", ")
                : "Select services"}
            </span>
            <svg
              className="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {servicesOpen && (
            <div
              id="serviceOptions"
              className="absolute z-50 mt-1 border border-gray-500 rounded-md py-1 w-full bg-[#1a202c] text-white overflow-scroll max-h-48"
            >
              <div className="overflow-scroll max-h-48">
                {services.map(({ id, service }) => (
                  <label
                    key={id}
                    className="flex items-center px-3 py-2 hover:bg-[#0047ab] cursor-pointer group"
                  >
                    <div className="relative flex items-center mr-2">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 w-0 h-0"
                        onClick={() => handleSelectedServices(id)}
                      />
                      {selectedServices.has(id) ? (
                        <div
                          className={`h-4 w-4 border border-[#0047ab] rounded bg-[#0047ab] flex items-center justify-center transition-colors`}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        <div className="h-4 w-4 border border-gray-400 rounded bg-transparent flex items-center justify-center transition-colors">
                          {/* Empty div for unchecked state */}
                        </div>
                      )}
                    </div>
                    <span className="ml-0 text-white text-sm">{service}</span>{" "}
                    {/* Adjusted ml-0 and text-sm */}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <label className="text-white">Tell me what you want help with</label>
        <textarea
          className="w-full rounded-md border border-gray-500 bg-transparent focus:border-[#0047ab] text-white placeholder-gray-400 p-2 mb-6 outline-none transition-colors duration-200"
          rows={5}
          placeholder="Tell me your goals, challenges, timeline or any other relevant details"
          name="message"
        />
      </div>
      <button
        className="contact-button !rounded"
        type="submit"
        disabled={
          submissionStatus === "submitting" || submissionStatus === "success"
        }
      >
        {submissionStatus === "submitting"
          ? "Sending..."
          : submissionStatus === "success"
          ? "Request sent"
          : "Get in touch"}
      </button>
      {submissionStatus === "success" ? (
        <div className="text-green-500 text-center p-2 rounded-md">
          Thank you for your interest! I will get back to you soon.
        </div>
      ) : null}
      {submissionStatus === "error" ? (
        <div className="text-red-500 text-center p-2 rounded-md">
          There was an error sending your message. Please try again later.
        </div>
      ) : null}
    </form>
  );
};

export default Form;

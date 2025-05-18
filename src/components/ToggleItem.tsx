import { useState } from "react";

interface ToggleItemProps {
  headerText?: string;
  imgSrc?: string;
  altText?: string;
  descriptionText?: string;
  children?: React.PropsWithChildren;
  technologies?: string[];
}

/**
 * TODO: fix component to be more flexible in the type it takes
 */

const ToggleItem = ({
  imgSrc,
  altText,
  headerText,
  descriptionText,
  children,
  technologies = [],
}: ToggleItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-between mb-4 items-center cursor-pointer group"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-2xl font-serif font-light tracking-wide">
          {" "}
          {!children && <span className="text-blue-500/30 mr-2 ">✦</span>}
          {headerText}
        </h2>
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
      <>{children && isOpen ? children : null}</>
      {isOpen && !children ? (
        <div className="mb-2 rounded-lg overflow-hidden">
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
          <img
            src={imgSrc}
            alt={altText}
            width="1024"
            height="560"
            className="h-full transition-transform duration-300 hover:scale-105 w-full object-cover"
          />
          <br />

          {descriptionText && (
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-2">Overview</h3>
              <p className="text-gray-700">{descriptionText}</p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ToggleItem;

const WorkProcessSection = () => {
  return (
    <div className="mb-12">
      <h3 className="text-xl mb-6 font-medium">My Process</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg overflow-hidden">
          <div className="flex items-center mb-2">
            <span className="text-blue-500 font-bold text-lg mr-2 flex-shrink-0">
              01
            </span>
            <h4 className="text-lg font-medium text-wrap break-words">
              Discovery
            </h4>
          </div>
          <p className="text-sm text-gray-600 break-words">
            Understanding the problem space, target users, and business
            objectives through research and stakeholder interviews.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg overflow-hidden">
          <div className="flex items-center mb-2">
            <span className="text-blue-500 font-bold text-lg mr-2 flex-shrink-0">
              02
            </span>
            <h4 className="text-lg font-medium text-wrap break-words">
              Design
            </h4>
          </div>
          <p className="text-sm text-gray-600 break-words">
            Creating technical specifications, prototypes, and validating
            solutions through testing and feedback cycles.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg overflow-hidden">
          <div className="flex items-center mb-2">
            <span className="text-blue-500 font-bold text-lg mr-2 flex-shrink-0">
              03
            </span>
            <h4 className="text-lg font-medium text-wrap break-words">
              Execution
            </h4>
          </div>
          <p className="text-sm text-gray-600 break-words">
            Implementing solutions using modern development practices with a
            focus on code quality, testing, and maintainability.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mt-8 overflow-hidden">
        <h4 className="text-lg font-medium mb-4">What sets my work apart</h4>

        <p className="text-gray-700 mb-6 break-words">
          I don't just write code – I craft software experiences that solve real
          problems. My background in high-growth startups has taught me to
          balance technical excellence with practical business needs.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
            User-focused
          </span>
          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
            Maintainable
          </span>
          <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
            Scalable
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessSection;

import GithubImage from "../pages/GithubImage.astro";
import LinkedinImage from "../pages/LinkedinImage.astro";
import XImage from "../pages/XImage.astro";

export default function OldFooter() {
  return (
    <footer className="bg-green-100 p-4 m-2 rounded-md">
      <h2 className="mb-2">connect with me</h2>
      <div className="flex gap-2">
        <div className="w-12 h-12 bg-blue-200 rounded-[1vw] flex items-center justify-center">
          <a
            href="https://github.com/ltphan"
            className="flex items-center justify-center w-8 h-8"
          >
            <GithubImage />
          </a>
        </div>
        <div className="w-12 h-12 bg-blue-200 rounded-[1vw] flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/linhphan01/"
            className="flex items-center justify-center w-8 h-8"
          >
            <LinkedinImage />
          </a>
        </div>
        <div className="w-12 h-12 bg-blue-200 rounded-[1vw] flex items-center justify-center">
          <a
            href="https://x.com/lennie25"
            className="flex items-center justify-center w-8 h-8"
          >
            <XImage />
          </a>
        </div>
      </div>
    </footer>
  );
}

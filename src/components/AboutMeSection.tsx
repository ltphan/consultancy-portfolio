import BrexCard from "../pages/BrexCard.astro";
import ClioCard from "../pages/ClioCard.astro";

interface AboutMeSectionProps {
  firstParagraphIntro: string;
}

export default function AboutMeSection({
  firstParagraphIntro,
}: AboutMeSectionProps) {
  return (
    <div className="content-box">
      <h2 className="mb-10">about me</h2>
      <div>
        <p className="intro-text">{firstParagraphIntro}</p>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="col-span-full flex items-center flex-wrap">
            <span className="md:whitespace-nowrap mr-0 md:mr-2">
              She has worked at highgrowth startups that include
            </span>
            <div className="w-full md:w-auto flex items-center justify-center md:justify-start mt-4 md:mt-0 ml-4">
              <div className="startup-cards relative w-24 h-16">
                <a href="https://www.clio.com/">
                  <ClioCard className="absolute card-right" />
                </a>
                <a href="https://www.brex.com/">
                  <BrexCard className="absolute card-left" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <span>
          She has experience building 0-to-1 products, revamping and redesigning
          applications, scaling from 30,000+ users to 600,000+ users. Whether
          developing conventional applications or integrating AI capabilities
          where they add genuine value, her focus remains on creating
          thoughtful, user-centered solutions.
        </span>
        <br />
        <br />
        <span>
          Every line of code and every interface element is crafted with
          intention and purpose. I build applications I would proudly use
          myself—because if it doesn't meet my standards, it won't meet yours.
        </span>
      </div>
    </div>
  );
}

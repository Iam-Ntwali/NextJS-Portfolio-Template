import project_1 from "@/assets/images/template.png";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import {
  SiCss3,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { Icons } from "@/components/Icons";

const portfolioProjects = [
  {
    company: "Projeect 1",
    year: "2025",
    title: "Project 1 Title",
    tech: [SiReact, SiTailwindcss, SiShadcnui],
    link: "https://www.project1.com/",
    image: project_1,
    status: "In-progress",
  },
  {
    company: "Projeect 2",
    year: "2024",
    title: "Project 2 Title",
    tech: [SiReact, SiTailwindcss, SiShadcnui],
    link: "https://www.project2.com/",
    image: project_1,
    status: "In-progress",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            // Card component
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Card Description: title and stuffs */}
                <div className="lg:pb-16">
                  {/* status */}
                  <div className="flex items-center gap-2">
                    <p
                      className={`rounded-full font-semibold text-xs md:text-sm px-3 py-1.5, ${
                        project.status === "Completed"
                          ? "text-green-900 bg-green-300 border-2 border-green-900"
                          : "text-yellow-900 bg-yellow-300 border-2 border-yellow-900"
                      }`}
                    >
                      {project.status}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent mt-2 md:mt-5">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="mt-4 md:mt-5 font-semibold text-sm md:text-base text-white/50">
                    Tech Stack:{" "}
                  </p>
                  <div className="flex gap-4 mt-1 ">
                    {project.tech?.map((TechIcon, i) => (
                      <span key={i} className="">
                        <Icons component={TechIcon} />
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center gap-2 mt-8 bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                {/* Card Image */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tr-xl rounded-tl-xl lg:rounded-tl-3xl border-t-8 border-l-8 border-r-8 border-stone-800 shadow-md"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

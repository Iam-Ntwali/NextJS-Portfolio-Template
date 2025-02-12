"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

import mapImage from "@/assets/images/map.png";
import Me from "@/assets/images/Profile.png";

import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGoogle,
  FaGitAlt,
} from "react-icons/fa";
import { GrApple, GrPhone } from "react-icons/gr";
import { SiWindows11, SiLinux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import React from "react";

const toolBoxItems = [
  {
    title: "Git",
    iconType: FaGitAlt,
  },
  {
    title: "Github",
    iconType: FaGithub,
  },

  {
    title: "VS Code",
    iconType: VscVscode,
  },
];

const ProgrammingTech = [
  {
    title: "HTML5",
    iconType: FaHtml5,
  },
  {
    title: "CSS3",
    iconType: FaCss3,
  },
  {
    title: "JavaScript",
    iconType: IoLogoJavascript,
  },
  {
    title: "React",
    iconType: FaReact,
  },
  {
    title: "Next.js",
    iconType: RiNextjsLine,
  },
];

const hobbies = [
  {
    title: "Writing",
    emoji: "✍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Food",
    emoji: "😜",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

const Devices = [
  {
    title: "Macbook Pro",
    iconType: GrApple,
  },
  {
    title: "IPhone 14 Pro",
    iconType: GrPhone,
  },
];

const OSes = [
  {
    title: "Fedora Linux",
    iconType: SiLinux,
  },
  {
    title: "Windows 11",
    iconType: SiWindows11,
  },
];

export const AboutSection = () => {
  const constraintRef = React.useRef(null);
  return (
    <section className="py-20 lg:py-28" id="About">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what I inspires me."
        />
        {/* Cards Container */}
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Devices"
                description="Explore the devices and OS I use to code and create."
              />
              <ToolboxItems
                items={Devices}
                itemWrapperClassName="animate-move-left"
              />
              <ToolboxItems
                items={OSes}
                className="mt-6"
                itemWrapperClassName="-translate-x-1/4 animate-move-right"
              />
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems
                items={ProgrammingTech}
                itemWrapperClassName="animate-move-left"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemWrapperClassName="-translate-x-1/2 animate-move-right"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description=" Explore the my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={Me}
                  alt="Smile Memoji"
                  className="size-20 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// "I'm a software engineer with 10+ years of experience in the industry. I'm passionate about building high-quality software that solves real-world problems. I'm also a big fan of open source software and I'm always looking for ways to contribute to the community

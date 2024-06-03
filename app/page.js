import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
          <div className="rounded-full overflow-hidden w-40 h-40">
            <Image
              className="object-cover"
              src="/Yakubu.png"
              alt="Yakubu"
              width={160}
              height={160}
            />
          </div>

          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-4xl font-extrabold">
              Software <span className="text-blue-500">Engineer</span>
            </h1>
            <p className="mt-2 text-lg">
              Hello, I'm Precious, a dedicated frontend engineer who thrives on
              building versatile tools that enhance both developer productivity
              and customer experience across various tech stacks. In my spare
              time, I enjoy skating.
            </p>
            <p className="mt-2 text-lg font-bold">
              I'm currently exploring fresh career prospects and open to
              opportunities. Feel free to reach out to me{" "}
              <Link
                href="mailto:preciousyakubu307@gmail.com"
                className="text-blue-500 underline"
              >
                via Email!
              </Link>
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a
                href="https://x.com/Selah_presh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} className="text-blue-500" />
              </a>
              <a
                href="https://github.com/preciousyaks17"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/precious-yakubu-30787b199/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2">
            I've worked on many small projects but these are my favorites. Feel
            free to check them out!
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Tracksify"
              description="An employee time tracking system. Built with NextJs, Typescript, and Tailwindcss."
              link="https://tracksify.netlify.app"
            />
            <ProjectCard
              title="car-rental-service"
              description="An API service for a car rental platform. Built using python, fastapi, and Postgresql."
              link="https://github.com/yourgithub/car-rental-service"
            />
            <ProjectCard
              title="border-ng-js"
              description="An NPM package to check if a provided coordinate falls within the borders of Nigeria."
              link="https://github.com/yourgithub/border-ng-js"
            />
            <ProjectCard
              title="Bunsoir"
              description="Quickly setup Bun-based backend application with little development configuration."
              link="https://github.com/yourgithub/bunsoir"
            />
            <ProjectCard
              title="Cmd+B"
              description="A beautiful and accessible bookmark manager for your chrome browser."
              link="https://chrome.google.com/webstore/detail/cmd+b/your-id"
            />
            <ProjectCard
              title="EnvBadge"
              description="Open-source solution for identifying your current web environment at a glance."
              link="https://envbadge.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded p-4 shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-500 underline"
      >
        View Project
      </a>
    </div>
  );
}

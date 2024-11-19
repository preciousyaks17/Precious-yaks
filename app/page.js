import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="flex justify-between p-5">
        <ul className="flex flex-start primary font-extrabold text-lg">
          <li>
            Pre<span className="text-blue-500">Yaks.</span>
          </li>
        </ul>
      </nav>
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
              Hello, I am Precious, a dedicated frontend engineer specializing
              in both web and mobile development. I thrive on building versatile
              tools that enhance developer productivity and customer experience
              across various tech stacks. In my spare time, I enjoy skating.
            </p>
            <p className="mt-2 text-lg font-bold">
              I am currently exploring fresh career prospects and open to
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
              <a href="w" target="_blank" rel="noopener noreferrer">
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
            I have worked on many small projects but these are my favorites.
            Feel free to check them out!
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Plaventi"
              description="Plaventi is an event management platform for planning, managing, selling, and discovering events. It includes features for organizing events, managing teams, ticket sales, and guest engagement."
              link="https://plaventi.dev"
            />
            <ProjectCard
              title="HealthPadi"
              description="A health information system for getting health update in your location. Built with NextJS, Typescript and tailwind for the frontend and C# and .NET for the backend."
              link="https://dev--healthpadi.netlify.app/"
            />
            <ProjectCard
              title="BorrowHub"
              description="A peer-to-peer (P2P), Microloan platform that bridges the gap between borrowers and lenders. Built with NextJs, Typescript, and Tailwindcss and C# and .NET for the backend."
              link="https://borrowhub-v1.vercel.app/"
            />
            <ProjectCard
              title="Tracksify"
              description="An employee time tracking system. Built with NextJs, Typescript, and Tailwindcss and C# and .NET for the backend."
              link="https://tracksify.netlify.app"
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
        className="mt-4 inline-block text-sky-700 text-lg hover:text-blue-600 "
      >
        View Project
      </a>
    </div>
  );
}

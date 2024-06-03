import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <ul className="flex flex-start primary font-extrabold text-lg">
        <li>
          Pre<span className="text-blue-500">Yaks.</span>
        </li>
      </ul>
      {/* <ul className="flex flex-end">
        <li className="mr-5">
          <Link
            href="/"
            className="primary font-medium text-sm hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link
            href="#about"
            className="primary font-medium text-sm hover:text-blue-500"
          >
            About
          </Link>
        </li>
        <li className="mr-5">
          <Link
            href="#contact"
            className="primary font-medium text-sm hover:text-blue-500"
          >
            Contact
          </Link>
        </li>
        <li className="mr-5">
          <Link
            href="#projects"
            className="primary font-medium text-sm hover:text-blue-500"
          >
            Projects
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;

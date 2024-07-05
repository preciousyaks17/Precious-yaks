import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <ul className="flex flex-start primary font-extrabold text-lg">
        <li>
          Pre<span className="text-blue-500">Yaks.</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

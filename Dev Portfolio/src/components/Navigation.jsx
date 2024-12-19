import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <div className="flex flex-row space-x-4 bg-gray-200 text-gray-900 ">
      <nav className="flex flex-inline mg-4">
        <p className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          <Link to="/Home">Home</Link>
        </p>
        <p className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          <Link to="/AboutMe">About Me</Link>
        </p>
        <p className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          <Link to="/Projects">Projects</Link>
        </p>
        <p className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          <Link to="/Contact">Contact</Link>
        </p>
      </nav>
    </div>
  );
}

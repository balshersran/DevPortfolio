import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <div>
      <nav>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
    </div>
  );
}

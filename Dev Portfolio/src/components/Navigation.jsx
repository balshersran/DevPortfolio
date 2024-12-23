import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <div className="navbar-container">
      <nav>
        <p>
          <Link to="/Home">Home</Link>
        </p>
        <p>
          <Link to="/AboutMe">About Me</Link>
        </p>
        <p>
          <Link to="/Projects">Projects</Link>
        </p>
        <p>
          <Link to="/Contact">Contact</Link>
        </p>
      </nav>
    </div>
  );
}

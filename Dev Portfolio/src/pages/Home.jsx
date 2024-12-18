import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <div>
        <h1>Balsher Sran</h1>
        <p>
          Welcome to my Dev Portfolio site! Feel free to navigate the site. This
          is a site to showcase the potential I have to offer. It's a static
          site with some information <a href="#AboutMe">About Me</a>, a little
          about my <a href="Projects">Projects</a>, and a way to{" "}
          <a href="Contact">Contact</a> me if you'd like!
        </p>
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
}

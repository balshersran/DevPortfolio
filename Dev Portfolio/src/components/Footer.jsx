export default function Footer() {
  const gitHubUrl = "https:/github.com/balshersran";
  const linkedInUrl =
    "https://www.linkedin.com/in/balsher-billy-sran-8a0745339/";

  return (
    <div className="footer-container">
      <div className="github">
        <a href={gitHubUrl}>GitHub</a>
      </div>
      <div className="linkedin">
        <a href={linkedInUrl}>LinkedIn</a>
      </div>
      <p>Thank you for visiting my site!</p>
    </div>
  );
}

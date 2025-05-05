export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        {/* PERSONAL DESCRIPTION */}
        <div></div>

        {/* NAVIGATION */}
        <div>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* EXTERNAL LINKS */}
        <div></div>
      </div>

      {/* COPYRIGHT */}
      <div>
        <p>{`© ${currentYear} Kevin Ng. All rights reserved`}</p>
        <p>{"Built with Next.js, React, and Tailwind CSS. Hosted on AWS via Terraform, Docker, and Github."}</p>
      </div>
    </footer>
  );
}

import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* ABOUT ME */}
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          Front-End Developer with 1+ year of experience in building intuitive
          and responsive user interfaces using HTML, CSS, Bootstrap,
          JavaScript, and React.js. Passionate about creating visually appealing
          and user-friendly web applications with a strong focus on performance
          and accessibility.
        </p>
        <p className="about-text">
          Enjoy collaborating with dynamic teams to deliver high-quality
          solutions while continuously learning and adapting to new
          technologies.
        </p>

        {/* ORGANIZATION / EXPERIENCE */}
        <h2 className="about-heading">Organization / Experience</h2>
        <div className="about-card">
          <p><strong>Company:</strong> Itrope Technologies Private Limited, Chennai</p><br />
          <p><strong>Duration:</strong> Oct 2024 – Till Now</p>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <h2 className="about-heading">Professional Summary</h2>
        <ul className="about-list">
          <li>1+ year of experience as a Front-End Developer, building responsive and user-friendly web interfaces.</li>
          <li>Developed and maintained web pages using HTML5, CSS3, and JavaScript.</li>
          <li>Utilized Bootstrap to design responsive layouts.</li>
          <li>Built dynamic and reusable components using React.js.</li>
          <li>Collaborated with back-end developers to integrate RESTful APIs.</li>
          <li>Used Git and Visual Studio Code.</li>
          <li>Participated in Agile processes and code reviews.</li>
          <li>Optimized front-end performance.</li>
          <li>Maintained clean and reusable code.</li>
        </ul>

        {/* EDUCATION */}
        <h2 className="about-heading">Education</h2>
        <div className="about-card">
          <p><strong>Institution:</strong> Karpagam Academy of Higher Education</p>
          <p><strong>Degree:</strong> M.Sc Computer Science</p><br />
          <p><strong>Institution:</strong> AVVM Sri Pushpam College</p>
          <p><strong>Degree:</strong> B.Sc Computer Science</p>
        </div>

        {/* SKILLS */}
        <h2 className="about-heading">Relevant Skills</h2>
        <div className="skills-grid">
          <span>HTML5</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Visual Studio</span>
          <span>Git</span>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="about-footer">
          <a
            href="https://github.com/Tamil2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            © {new Date().getFullYear()} Tamilvanan D | Front-End Developer. All Rights Reserved.
          </a>
        </footer>

      </div>
    </section>
  );
};

export default About;

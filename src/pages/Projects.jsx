import "./Projects.css";

const Projects = () => {
  return (
    <section className="project-section">
      <div className="project-container">

        {/* ================= PROJECT WORKED ================= */}
        <h2 className="project-heading">Project Worked</h2>

        <div className="project-card">
          <p className="project-text">
            <strong>Project:</strong> E-Commerce Web Application – Minted
          </p><br/>

          <p className="project-text">
            Developed an E-Commerce web application with a Lovehoney Decision feature
            that helps users make product choices through interactive decision-based logic.
          </p><br/>

          <p className="project-text">
            Built a responsive and user-friendly interface using HTML5, CSS3, Bootstrap,
            JavaScript, jQuery, and React.js. Ensured smooth navigation across devices.
          </p><br/>

          <p className="project-text">
            Integrated dynamic components and backend data handling to deliver a seamless
            shopping experience. Focused on performance optimization, interactive UI,
            and usability.
          </p><br/>

          <p>
            <strong>Project Name:</strong> Project-1 | E-Commerce | Lovehoney
          </p><br/>

          <p>
            <strong>Duration:</strong> Oct 2024 – Till Now
          </p>
        </div>

        {/* ================= RESPONSIBILITIES ================= */}
        <h2 className="project-heading">Responsibilities</h2>

        <div className="project-card">
          <ul className="project-list">
            <li>Developed a responsive E-Commerce web application with a Lovehoney Decision feature.</li><br/>
            <li>Built interactive UI using HTML5, CSS3, Bootstrap, JavaScript, jQuery, React.js.</li><br/>
            <li>Implemented decision-based logic.</li><br/>
            <li>Integrated frontend with backend APIs.</li><br/>
            <li>Designed reusable React.js components with hooks.</li><br/>
            <li>Ensured cross-browser compatibility and mobile responsiveness.</li><br/>
            <li>Optimized performance using code splitting and lazy loading.</li><br/>
            <li>Collaborated with team members and conducted code reviews.</li><br/>
            <li>Customized and maintained WordPress components.</li><br/>
            <li>Managed MySQL database operations.</li><br/>
            <li>Debugged and resolved technical issues.</li><br/>
            <li>Maintained clean, reusable, and well-documented code.</li>
          </ul>
        </div>

        {/* ================= TECH STACK ================= */}
        <h2 className="project-heading">Tech Stack</h2>

        <div className="project-card">
          <div className="project-skills">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>jQuery</span>
            <span>React.js</span>
            <span>WordPress</span>
            <span>MySQL</span>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="project-footer">
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

export default Projects;

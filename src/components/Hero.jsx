import "./Hero.css";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">

        {/* ================= HERO TOP ================= */}
        <div className="hero-top">
          <div className="hero-left">
            <h2 className="hero-name">TAMILVANAN D</h2>
            <h1 className="hero-title">FRONTEND DEVELOPER</h1>
          </div>
          <div className="hero-image-box">
            <img src="/image.jpeg" alt="profile" />
          </div>
        </div>

        <hr className="hero-divider" />

        {/* ================= ABOUT ME ================= */}
        <div className="content-section">
          <h2 className="section-heading">About Me</h2>
          <p className="content-text">
            Front-End Developer with 1+ year of experience in building intuitive
            and responsive user interfaces using HTML, CSS, Bootstrap,
            JavaScript, and React.js.
          </p>
          <p className="content-text">
            Passionate about creating visually appealing and user-friendly web
            applications with a strong focus on performance and accessibility.
          </p>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="content-section">
          <h2 className="section-heading">Organization / Experience</h2>
          <div className="content-card">
            <p><strong>Company:</strong> Itrope Technologies Private Limited, Chennai</p><br/>
            <p><strong>Duration:</strong> Oct 2024 – Till Now</p>
          </div>
        </div>

        {/* ================= PROFESSIONAL SUMMARY ================= */}
        <div className="content-section">
          <h2 className="section-heading">Professional Summary</h2><br/>
          <ul className="content-list">
            <li>1+ year of experience as a Front-End Developer, building responsive and user-friendly web interfaces.</li><br/>
          <li>Developed and maintained web pages using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and mobile responsiveness.</li><br/>
          <li>Utilized Bootstrap to design and prototype responsive layouts, improving scalability across different devices.</li><br/>
          <li>Built dynamic and reusable components using React.js, managing state with hooks and handling props effectively.</li><br/>
          <li>Collaborated with back-end developers to integrate RESTful APIs, ensuring seamless data flow and interactive UIs.</li><br/>
          <li>Followed modern development workflows using Git for version control and Visual Studio Code for efficient coding.</li><br/>
          <li>Participated in Agile processes, including daily stand-ups, sprint planning, and code reviews.</li><br/>
          <li>Optimized front-end performance through code splitting, lazy loading, and minimizing render cycles.</li><br/>
          <li>Maintained clean, well-documented, and reusable code to reduce technical debt and support team scalability.</li><br/>
          <li>Focused on enhancing user experience by implementing intuitive navigation and interactive UI elements.</li><br/>
          <li>Applied strong problem-solving and debugging skills to quickly resolve front-end issues.</li><br/>
          <li>Continuously updated knowledge of modern front-end technologies and best practices to improve development efficiency.</li>
          </ul>
        </div>

        {/* ================= EDUCATION ================= */}
        <div className="content-section">
          <h2 className="section-heading">Education</h2>
          <div className="content-card">
            <p><strong>Institution:</strong> Karpagam Academy of Higher Education</p>
            <p><strong>Degree:</strong> M.Sc Computer Science</p><br/>
            <p><strong>Institution:</strong> AVVM Sri Pushpam College</p>
            <p><strong>Degree:</strong> B.Sc Computer Science</p>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="content-section">
          <h2 className="section-heading">Relevant Skills</h2>
          <div className="skills-grid">
            <span>HTML5</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Visual Studio</span>
            <span>Git</span>
          </div>
        </div>

        {/* ================= PROJECT ================= */}
        <div className="content-section">
          <h2 className="section-heading">Project Worked</h2>
          <div className="content-card">
            <p><strong>Project:</strong> E-Commerce – Minted</p><br/>
            <p>Built responsive UI with React.js and decision-based logic.</p><br/>
            <p><strong>Duration:</strong> Oct 2024 – Till Now</p>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="content-section">
          <h2 className="section-heading">Contact</h2>
          <div className="content-card">
            <p><strong>Phone:</strong> <a href="tel:7305208560">+91 73052 08560</a></p><br/>
            <p><strong>Email:</strong> <a href="mailto:tamildharmaraj1402@gmail.com">tamildharmaraj1402@gmail.com</a></p>
          </div>
        </div>
<h2 className="section-heading">Address</h2>

        <div className="contact-card">
          <p>
            1086, Vandiyar Street, Poyyundarkottai, Orathanadu (TK), Thanjavur (DT), Tamil Nadu - 614902
          </p>
        </div>
        {/* ================= SOCIAL LINKS ================= */}
        <div className="content-section">
          <h2 className="section-heading">Connect With Me</h2>
          <div className="social-links">
            <a href="https://wa.me/917305208560" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/tamilvanan-dharmaraj-b02567365/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Tamil2002" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="site-footer">
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

export default Hero;
    
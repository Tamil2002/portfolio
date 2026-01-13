import "./contact.css";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* ================= CONTACT ================= */}
        <h2 className="section-heading">Contact</h2>

        <div className="contact-card">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:7305208560">+91 73052 08560</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:tamildharmaraj1402@gmail.com">
              tamildharmaraj1402@gmail.com
            </a>
          </p>
        </div>

        {/* Address */}
         <h2 className="section-heading">Address</h2>

        <div className="contact-card">
          <p>
            1086, Vandiyar Street, Poyyundarkottai, Orathanadu (TK), Thanjavur (DT), Tamil Nadu - 614902
          </p>
        </div>

        {/* ================= LINKS ================= */}
        <h2 className="section-heading">Links</h2>

        <div className="contact-card links-card">
          <a
            href="https://wa.me/917305208560"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/tamilvanan-dharmaraj-b02567365/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/Tamil2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="contact-footer">
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

export default Contact;

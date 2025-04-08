import React from "react";
import "./footer.css"; // Importing external CSS file

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div>
        <ul className="footer-links">
          <li>
            <a
              href="https://asett.cms.gov/ASETT_ST_CMP_HomePage"
              title="Home"
              className="footer-link"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://asett.cms.gov/ASETT_ST_CMP_PrivacyPolicy"
              title="Privacy Policy"
              className="footer-link"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://asett.cms.gov/ASETT_ST_CMP_SecurityPolicy"
              title="Security Policy"
              className="footer-link"
            >
              Security Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

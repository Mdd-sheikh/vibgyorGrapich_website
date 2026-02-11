import React from "react";
import "./LegalPage.css";

const LegalPage = () => {
  return (
    <div className="legal-page">
      <div className="container">

        <h1>Legal Information</h1>
        <p>
          This page outlines the Privacy Policy, Terms and Conditions,
          Disclaimer, and Cookie Policy for this website.
        </p>

        {/* Privacy Policy */}
        <section>
          <h2>Privacy Policy</h2>
          <p>
            We respect your privacy and are committed to protecting your
            personal information. When you use this website, we may collect
            information such as your name, email address, and contact details
            through the contact form.
          </p>
          <p>
            This information is used only to respond to inquiries and provide
            requested services. We do not sell, trade, or share your personal
            information with third parties except as required by law.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2>Cookies Policy</h2>
          <p>
            This website may use cookies to improve user experience and analyze
            website traffic. Cookies are small files stored on your device.
          </p>
          <p>
            Third-party services such as Google AdSense may also use cookies to
            serve personalized ads based on your browsing activity.
          </p>
        </section>

        {/* Terms */}
        <section>
          <h2>Terms & Conditions</h2>
          <p>
            By accessing this website, you agree to comply with these terms.
            All content including images, graphics, text, and designs are the
            intellectual property of the site owner unless otherwise stated.
          </p>
          <p>
            You may not copy, reproduce, or distribute any content without
            written permission.
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <h2>Disclaimer</h2>
          <p>
            The information provided on this website is for general
            informational purposes only. While we strive to ensure accuracy,
            we make no guarantees regarding completeness or reliability.
          </p>
          <p>
            We are not responsible for any losses or damages arising from the
            use of this website.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions regarding this Legal Policy, you can
            contact us through the Contact page.
          </p>
        </section>

      </div>
    </div>
  );
};

export default LegalPage;

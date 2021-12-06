import "./footer.css";

const Footer = () => {
  return (
    <div className="footerBlock">
      <div className="footerComponents">
        <div className="footerComponent">
          <h1 className="footerComponentTitle">About Us</h1>
          <p className="footerComponentDetails">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non
            dolor dignissimos quam labore velit, reprehenderit quis, alias in
            incidunt vitae laudantium quae corrupti deleniti et provident.
            Tempora, omnis dolorem.
          </p>
        </div>
        <div className="footerComponent">
          <h1 className="footerComponentTitle">Contacts</h1>
          <div className="footerContact">
            <i className="fas fa-map footerIcon"></i>
            Dhaka Bangladesh
          </div>
          <div className="footerContact">
            <i className="fas fa-phone footerIcon"></i>
            +88019922XXXXX
          </div>
          <div className="footerContact">
            <i className="fas fa-envelope footerIcon"></i>
            adnantech17@gmail.com
          </div>
        </div>
        <div className="footerComponent">
          <h1 className="footerComponentTitle">Social Media</h1>
          <i className="fab fa-facebook footerSocialIcon"></i>
          <i className="fab fa-twitter footerSocialIcon"></i>
          <i className="fab fa-instagram footerSocialIcon"></i>
          <i className="fab fa-linkedin footerSocialIcon"></i>
        </div>
      </div>

      <h3 className="footer">
        Copyright&copy; 2021 adnantech17, All rights reserved
      </h3>
    </div>
  );
};

export default Footer;

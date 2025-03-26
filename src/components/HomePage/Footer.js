import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaMicrosoft,
  FaFileExcel,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { id: 1, href: "https://facebook.com", Icon: FaFacebook, color: "#4267B2" },
    { id: 2, href: "https://github.com", Icon: FaGithub, color: "#333" },
    { id: 3, href: "https://google.com", Icon: FaGoogle, color: "#DB4437" },
    { id: 4, href: "https://x.com", Icon: FaTwitter, color: "#1DA1F2" },
    { id: 5, href: "https://microsoft.com", Icon: FaMicrosoft, color: "#F25022" },
  ];

  const styles = {
    footer: {
      backgroundColor: "#111827",
      color: "white",
      padding: "2.5rem 0",
      marginTop: "2.5rem",
    },
    footerContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "2rem",
      padding: "0 1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",

    },
    footerLogo: {
      display: "flex",
      alignItems: "center",
    },
    footerText: {
      marginTop: "1rem",
      color: "#9ca3af",
      fontSize: "0.875rem",
    },
    footerSection: {
      marginBottom: "1.5rem",
    },
    footerHeading: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    footerLinks: {
      listStyle: "none",
      padding: 0,
    },
    footerLinkItem: {
      marginBottom: "0.5rem",
    },
    footerLink: {
      textDecoration: "none",
      color: "#9ca3af",
      fontSize: "0.875rem",
    },
    footerLinkHover: {
      color: "white",
    },
    socialIcons: {
      display: "flex",
      gap: "1rem",
      marginTop: "1.5rem",
    },
    socialIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.5rem",
      height: "2.5rem",
      background: "white",
      borderRadius: "50%",
      padding: "0.5rem",
      transition: "transform 0.2s",
    },
    socialIconHover: {
      transform: "scale(1.1)",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Logo and Description */}
        <div>
          <div style={styles.footerLogo}>
            <img src="/logo.svg" alt="Byway Logo" />
            <h2>Byway</h2>
          </div>
          <p style={styles.footerText}>
            Empowering learners through accessible and engaging
            online<br/> education. 
            Byway is a leading onlinelearning platform dedicated to<br/>
            providing high-quality, flexible, and affordable educational<br/>
            experiences.
          </p>
        </div>

        {/* Help Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Get Help</h3>
          <ul style={styles.footerLinks}>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>Contact Us</a></li>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>Latest Articles</a></li>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>FAQ</a></li>
          </ul>
        </div>

        {/* Programs Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Programs</h3>
          <ul style={styles.footerLinks}>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>Art & Design</a></li>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>Business</a></li>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>IT & Software</a></li>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>Languages</a></li>
            <li style={styles.footerLinkItem}><a href="/#" style={styles.footerLink}>Programming</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Contact Us</h3>
          <p style={styles.footerText}>Address: 123 Main Street, Anytown, CA 12345</p>
          <p style={styles.footerText}>Tel: +1 (123) 456-7890</p>
          <p style={styles.footerText}>
            Mail: <a href="mailto:bywayedu@webkul.in" style={{ color: "#3b82f6", textDecoration: "none" }}>bywayedu@webkul.in</a>
          </p>

          {/* Social Icons */}
          <div style={styles.socialIcons}>
            {links.map((link) => (
              <a 
                key={link.id} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
              >
                <link.Icon color={link.color} size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

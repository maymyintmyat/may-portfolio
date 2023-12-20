import { Box } from "@mui/material";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/stellarrr___/",
    facebook: "https://www.facebook.com/profile.php?id=100055568385361",
    twitter: "https://twitter.com/your-twitter-username/",
    telegram: "https://t.me/mayibeyourautumn",
  };

  return (
    <Box
      sx={{
        mt: "1rem",
        flexWrap: "wrap",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#393E46",
        padding: "0.5px",
      }}>
      <div style={{ marginTop: "1rem" }}>
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram
            style={{ fontSize: "20px", marginRight: "10px", color: "white" }}
          />
        </a>
        <a
          href={socialMediaLinks.facebook}
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook
            style={{ fontSize: "20px", marginRight: "10px", color: "white" }}
          />
        </a>
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer">
          <FaXTwitter
            style={{ fontSize: "20px", marginRight: "10px", color: "white" }}
          />
        </a>
        <a
          href={socialMediaLinks.telegram}
          target="_blank"
          rel="noopener noreferrer">
          <FaTelegram style={{ fontSize: "20px", color: "white" }} />
        </a>
      </div>
      <div>
        <p style={{ color: "white" }}>© 2023 All Rights Reserved.</p>
      </div>
    </Box>
  );
};

export default Footer;

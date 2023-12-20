import human from "../assets/logo.png";
import Navbar from "./NavBar";

const Intro = () => {
  // const human = require("../assets/logo.png");
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "800px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
          zIndex: 0,
          flexWrap: "wrap",
        }}
        className="intro-img">
        <div
          className="txtandlogo"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Vertically align content
            flexWrap: "wrap",
            padding: "20px", // Add padding for spacing
            width: "90%",
            // backgroundColor: "red",
          }}>
          <div
            className="introtext"
            style={{
              flex: 1,
              padding: "20px",
              marginLeft: "35px",
              // backgroundColor: "yellow",
              marginTop: "-20px",
            }}>
            <h1
              className="intoheading"
              style={{ fontSize: "3rem", color: "white" }}>
              Full-Stack Developer & UX Design Student
            </h1>
            <p
              className="introp"
              style={{
                fontSize: "1rem",
                color: "white",
                wordSpacing: "3px",
                gap: "10px",
                marginTop: "-25px",
              }}>
              "I'm a full-stack developer with a passion for creating seamless
              digital experiences. With a solid foundation in UI/UX design and a
              commitment to continuous learning, I strive to blend the worlds of
              development and design to deliver intuitive, user-centric
              solutions."
            </p>
          </div>
          <div
            className="logodiv"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "20px",
              marginRight: "40px",
              // backgroundColor: "blue",
            }}>
            <img
              className="logoimg"
              src={human}
              style={{ width: "80%", maxWidth: "500px" }} // Increase the height for a bigger size
              alt="human pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

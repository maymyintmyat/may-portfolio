const AboutMe = () => {
  const myphoto = require("../assets/mypic1.jpg");
  return (
    <div
      className="aboutme"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "5rem",

        gap: "30px",
      }}>
      <div
        style={{
          padding: "20px 40px",
        }}>
        <img
          className="myphoto"
          src={myphoto}
          alt=""
          width={300}
          height={340}
        />
      </div>
      <div
        className="aboutmediv"
        style={{
          backgroundColor: "#F7F7F7",
          padding: "20px 40px",
          cursor: "pointer",
        }}>
        <h3 style={{ textAlign: "justify" }} className="about-me-title">
          About Me
        </h3>
        <p style={{ textAlign: "justify" }} className="about-me-p">
          Hello! My name is May Myint Myat. You can also call me Stella.
          <br /> I'm junior full-stack developer with a growing love for UI/UX
          design <br /> base in Monywa. I'm on a journey to combine technology
          <br />
          and design to create delightful digital experiences.
        </p>

        <h4 style={{ textAlign: "justify" }} className="courses">
          Finished Courses
        </h4>
        <p
          style={{
            textAlign: "justify",
            marginTop: "-10px",
            fontWeight: "",
          }}
          className="course-details">
          ✔ MSquare Full-Stack Developer Course <br /> ✔ Foundations of User
          Experience (UX) Design by Google <br /> ✔ Start the UX Design Process:
          Empathize, Define, and Ideate by Google <br /> ✔ Build Wireframes and
          Low-Fidelity Prototypes by Google <br /> ✔ Harvard CS50 (2024)
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

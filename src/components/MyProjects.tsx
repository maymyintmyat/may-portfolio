import { FaCircleArrowRight } from "react-icons/fa6";
import cafe from "../assets/cafe.png";
import calculator from "../assets/calculator.png";
import clubmember from "../assets/clubmember.png";
import foodie from "../assets/foodie.png";
import list from "../assets/list.png";
import weather from "../assets/weather.png";

const MyProjects = () => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "3rem" }}>
      <h1 style={{ textAlign: "center" }}>My Projects</h1>
      <div>
        <div className="project-div">
          <div>
            <img src={clubmember} alt="" className="projectImg" />
          </div>
          <div>
            <h3>Painting Club Page</h3>
            <button className="button">
              <a
                className="button-content"
                href="https://club-member-registration.vercel.app/"
                style={{ color: "white", textDecoration: "none" }}>
                See Demo
              </a>
            </button>
            <button className="button">
              <a
                className="button-content"
                href="https://github.com/maymyintmyat/club-member-registration"
                style={{ color: "white", textDecoration: "none" }}>
                Code
              </a>
            </button>
            <p className="project__details">
              This is my very first project when I learning frontend tools.{" "}
              <br />
              Step into the vibrant world of our painting club,
              <br />
              and join us in a visual journey that celebrates <br /> art and
              community.
            </p>
          </div>
        </div>

        <div className="project-div">
          <div>
            <img src={list} alt="" className="projectImg" />
          </div>
          <div>
            <h3>To Do List</h3>
            <button className="button">
              <a
                className="button-content"
                href="https://react-to-do-list-wheat.vercel.app/"
                style={{ color: "white", textDecoration: "none" }}>
                See Demo
              </a>
            </button>
            <button className="button">
              <a
                className="button-content"
                href="https://github.com/maymyintmyat/react-to-do-list"
                style={{ color: "white", textDecoration: "none" }}>
                Code
              </a>
            </button>
            <p className="project__details">
              This is my second mini project to elevate productivity <br /> with
              our user-friendly to-do list app, <br />
              making organization a breeze and <br />
              helping you conquer your day effortlessly.
            </p>
          </div>
        </div>

        <div className="project-div">
          <div>
            <img src={calculator} alt="" className="projectImg" />
          </div>
          <div>
            <h3>React Calculator</h3>
            <button className="button">
              <a
                className="button-content"
                href="https://react-calculator-project-opal.vercel.app/"
                style={{ color: "white", textDecoration: "none" }}>
                See Demo
              </a>
            </button>
            <button className="button">
              <a
                className="button-content"
                href="https://github.com/maymyintmyat/react-calculator-project"
                style={{ color: "white", textDecoration: "none" }}>
                Code
              </a>
            </button>
            <p className="project__details">
              Simplify your math tasks with our calculator <br />
              project—quick, accurate, and always at your service
            </p>
          </div>
        </div>

        <div className="project-div">
          <div>
            <img src={weather} alt="" className="projectImg" />
          </div>
          <div>
            <h3>Weather App</h3>
            <button className="button">
              <a
                className="button-content"
                href="https://weather-app-maymyintmyat.vercel.app/"
                style={{ color: "white", textDecoration: "none" }}>
                See Demo
              </a>
            </button>
            <button className="button">
              <a
                className="button-content"
                href="https://github.com/maymyintmyat/weather"
                style={{ color: "white", textDecoration: "none" }}>
                Code
              </a>
            </button>
            <p className="project__details">
              Weather App is first time using API , <br />
              it was very fun to use and <br />
              helpful for web development student
            </p>
          </div>
        </div>

        <div className="project-div">
          <div>
            <img src={foodie} alt="" className="projectImg" />
          </div>
          <div>
            <h3>Foodie POS</h3>
            <button className="button">
              <a
                className="button-content"
                href="https://foodie-app-khaki.vercel.app/"
                style={{ color: "white", textDecoration: "none" }}>
                See Demo
              </a>
            </button>
            <button className="button">
              <a
                className="button-content"
                href="https://github.com/maymyintmyat/foodie-app"
                style={{ color: "white", textDecoration: "none" }}>
                Code
              </a>
            </button>
            <p className="project__details">
              Foodie POS was my final collaborative project with my teacher and
              classmates, designed for restaurants to streamline the ordering
              process. <br /> The system features an easy-to-use back office for
              restaurant owners and chefs to manage orders, along with a
              convenient QR code-based ordering system for customers. <br />
              Additional features include support for add-on topics and tracking
              customer favorites with customizable quantities. <br /> The
              project was built using React and Next.js, with deployment on
              Vercel for efficient hosting. For data storage, we utilized
              DigitalOcean Spaces, while the interface design leveraged MUI, a
              robust React component library. <br /> The backend infrastructure
              was powered by PostgreSQL, ensuring reliable database management.{" "}
              <br /> This journey was a deep dive into backend development,
              database management, server integration, and app deployment, where
              we overcame technical challenges to deliver a functional,
              efficient, and user-friendly solution. <br /> Beyond the technical
              achievements, this experience significantly enhanced my teamwork,
              problem-solving, and perseverance, leaving me better prepared for
              future endeavors in technology and collaborative projects.{" "}
            </p>

            {/* Foodie POS is a final
              project with my teacher and <br />
              classmates, for restaurants. <br />
              It's a QR code ordering system using Next JS.
              <br />
              Through a journey of learning backend development,
              <br />
              database management, server integration, and app deployment
              <br /> on hosting sites, we overcame challenges to create an
              efficient <br />
              and user-friendly solution. <br />
              This experience not only honed our technical skills but
              <br /> also cultivated teamwork and perseverance.
            </p> */}
          </div>
        </div>

        <div className="project-div">
          <div>
            <img src={cafe} alt="" className="projectImg" />
          </div>
          <div>
            <h3>Cafe La Vie</h3>
            <button className="button">
              <a
                className="button-content"
                href="https://next-cafe-app.vercel.app/"
                style={{ color: "white", textDecoration: "none" }}>
                See Demo
              </a>
            </button>
            <button className="button">
              <a
                className="button-content"
                href="https://github.com/maymyintmyat/next-cafe-app"
                style={{ color: "white", textDecoration: "none" }}>
                Code
              </a>
            </button>
            <p className="project__details">
              This is my second major project working powered by Next.js
              <br />
              (a little bit similar with Foodie POS). <br />
              Explore my website for recommended menus, <br />
              services, and heartfelt customer reviews <br />
              and I also create my own logo design icon.
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
          marginRight: "20rem",
          fontStyle: "bold",
        }}>
        Explore more projects of me{" "}
        <FaCircleArrowRight style={{ marginLeft: "10px", marginTop: "5px" }} />
        <button className="btn__git">
          <a className="svgContainer" href="https://github.com/maymyintmyat">
            <svg fill="white" viewBox="0 0 496 512" height="1.6em">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
          <span className="BG"></span>
        </button>
      </p>
    </div>
  );
};

export default MyProjects;

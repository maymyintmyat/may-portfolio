import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sqcafao",
      "template_ayrpvob",
      //@ts-ignore
      form.current,
      "9lneJr0XkZUtPjsXi"
    );
    e.target.reset();
  };
  return (
    <div
      style={{
        marginTop: "4rem",
      }}>
      <section className="contact section" id="contact">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h1 className="section__title">Get in touch</h1>
          <span className="section__subtitle">Contact Me</span>{" "}
        </div>

        <div
          className="contact__container container grid"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "3rem",
            margin: "0 auto",
            flexWrap: "wrap",
          }}>
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <IoMdHome style={{ fontSize: "2rem", marginBottom: "-25" }} />

                <h3 className="contact__card-title">Address</h3>
                <span className="contact__card-data">Monywa Nandawin</span>
              </div>
              <div className="contact__card">
                <MdEmail style={{ fontSize: "2rem", marginBottom: "-25" }} />

                <h3 className="contact__card-title">Mail</h3>
                <span className="contact__card-data">stallam23@gmail.com</span>
              </div>

              <div className="contact__card">
                <FaPhoneSquareAlt
                  style={{ fontSize: "2rem", marginBottom: "-25" }}
                />

                <h3 className="contact__card-title">Phone</h3>
                <span className="contact__card-data">+95 9785027759</span>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project</label>

                <textarea
                  name="project"
                  cols={30}
                  rows={10}
                  className="contact__form-input"
                  placeholder="Write your project"></textarea>
              </div>
              <button className="button">
                <span className="button-content">Send Message</span>
                <IoSend style={{ marginLeft: "5px", marginTop: "-4px" }} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

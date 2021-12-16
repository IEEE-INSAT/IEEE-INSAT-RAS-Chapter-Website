import emailjs from "emailjs-com";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const templateParams = {
        name: name,
        subject: subject,
        email: email,
        message: message
      };

      await emailjs.send(
        "service_wu2kw48",
        "template_3aihdas",
        templateParams,
        "user_6NouVFFDT56vcvf0a1pAw"
      );
    } catch (e) {
      console.log(e);
    }
    router.reload(window.location.pathname);
  };

  return (
    <section className="ftco-section-contact contact-section">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section  text-center">
          <h2 className="mb-4">Contact Us</h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row block-9">
          <div className="col-md-4 contact-info ">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Contact Information</h2>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Address:</span> 676 INSAT Centre Urbain Nord BP، Tunis
                  Cedex 1080
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Phone:</span> <a href="#">58 945 105</a>
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Email:</span> <a href="#">ieee.ras.insat@gmail.com</a>
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Website:</span>{" "}
                  <a href="#">https://ras-insat.ieee.tn/</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 ">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  onClick={handleSubmit}
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

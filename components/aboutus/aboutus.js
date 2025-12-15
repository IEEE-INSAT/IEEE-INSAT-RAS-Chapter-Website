import styles from "../aboutus/aboutus.module.css";

export default function AboutUs() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pr-md-5">
            <div className="heading-section text-md-right ">
              <span className="subheading mb-4">IEEE</span>
              <p className="mb-4">
                IEEE, The Institute of Electrical and Electronics Engineers is
                the world's largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
              </p>
              <p>
                <a
                  href="https://www.ieee.org/"
                  className="btn btn-primary btn-outline-primary px-4 py-3"
                >
                  View IEEE
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/images/aboutus/IEEE.png" height="80%" width="80%" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/images/aboutus/RAS.png" height="80%" width="80%" />
          </div>
          <div className="col-md-6 pr-md-5">
            <div className="heading-section text-md-right ">
              <span className="subheading mb-4">RAS</span>
              <p className="mb-4">
                the IEEE Robotics and Automation Society's objectives are
                scientific, literary and educational in character. The Society
                strives for the advancement of the theory and practice of
                robotics and automation engineering and science.
              </p>
              <p>
                <a
                  href="https://www.ieee-ras.org/"
                  className="btn btn-primary btn-outline-primary px-4 py-3"
                >
                  View RAS
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

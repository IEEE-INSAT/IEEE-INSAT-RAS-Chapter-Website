import styles from "../aboutus/aboutus.module.css";

export default function AboutUs() {
  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 pr-md-5">
            <div class="heading-section text-md-right ">
              <span class="subheading mb-4">IEEE</span>
              <p class="mb-4">
                IEEE, The Institute of Electrical and Electronics Engineers is
                the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
              </p>
              <p>
                <a
                  href="#"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                >
                  View Full Menu
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="/images/aboutus/IEEE.png" height="80%" width="80%" />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="/images/aboutus/RAS.png" height="80%" width="80%" />
          </div>
          <div class="col-md-6 pr-md-5">
            <div class="heading-section text-md-right ">
              <span class="subheading mb-4">RAS</span>
              <p class="mb-4">
                the IEEE Robotics and Automation Society's objectives are
                scientific, literary and educational in character. The Society
                strives for the advancement of the theory and practice of
                robotics and automation engineering and science.
              </p>
              <p>
                <a
                  href="#"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                >
                  View Full Menu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

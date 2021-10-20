import styles from "../activities/activities.module.css";

export default function Activities() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section  text-center">
            <h2 className="mb-4">Our Latest Activities</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="menu-entry">
              <a href="#" className="img containerActivities1"></a>
              <div className="text text-center pt-4">
                <h3>
                  <a href="#">NEGHLBOUH</a>
                </h3>
                <p>Smart tracking gadget</p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline-primary">
                    See More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="menu-entry">
              <a href="#" className="img containerActivities2"></a>
              <div className="text text-center pt-4">
                <h3>
                  <a href="#">Summer School</a>
                </h3>
                <p>An IEEE educational event </p>

                <p>
                  <a href="#" className="btn btn-primary btn-outline-primary">
                    See More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="menu-entry">
              <a href="#" className="img containerActivities3"></a>
              <div className="text text-center pt-4">
                <h3>
                  <a href="#">Workshop</a>
                </h3>
                <p>raspberry pi training session</p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline-primary">
                    See More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="menu-entry">
              <a href="#" className="img containerActivities1" />
              <div className="text text-center pt-4">
                <h3>
                  <a href="#">NEGHLBOUH</a>
                </h3>
                <p>Smart tracking gadget</p>

                <p>
                  <a href="#" className="btn btn-primary btn-outline-primary">
                    See More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

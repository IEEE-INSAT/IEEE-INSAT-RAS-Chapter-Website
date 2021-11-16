import styles from "../footer/footer.module.css";
export default function Footer() {
  return (
    <div>
      <footer className="ftco-footer ftco-section img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">IEEE RAS</h2>
                <p>
                  when we talk about RAS we'll be talking about: Success,
                  hardwork, dedication, awards, passion, sacrifice, teamwork and
                  endless love.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">copyrights</h2>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4"></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">© 2020,IEEE RAS INSAT. All Rights Reserved</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> 2021/2022
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        676 INSAT Centre Urbain Nord BP، Tunis Cedex 1080
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">58 945 105</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">https://ras-insat.ieee.tn/</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

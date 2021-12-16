import Head from "next/head";
import Navbar from "../components/navbar/navbar";

import Footer from "../components/footer/footer";
import AboutUs from "../components/aboutus/aboutus";
import Team from "../components/team/team";

export default function About() {
  return (
    <div>
      <Navbar />
      <div id="about us">
        <Head>
          <title>About IEEE RAS INSAT</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Neon machine.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <section className="ftco-section-about-us">
          <div className="container mt-5">
            <div className="row justify-content-center mt-5">
              <div className="col-md-7 mt-5 heading-section text-center">
                <h2 className="">Who We ARE </h2>
              </div>
            </div>
          </div>
          <AboutUs />
          <div className="team-bg">
            <div className="container mt-5">
              <div className="row justify-content-center mt-5">
                <div className="col-md-7 mt-5 heading-section text-center">
                  <h2 className="">Our Team </h2>
                </div>
              </div>
            </div>
            <Team />
          </div>
        </section>

        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.easing.1.3.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.stellar.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/jquery.animateNumber.min.js"></script>
        <script src="/js/bootstrap-datepicker.js"></script>
        <script src="/js/jquery.timepicker.min.js"></script>
        <script src="/js/scrollax.min.js"></script>
        <script src="/js/main.js"></script>
      </div>
      <Footer />
    </div>
  );
}

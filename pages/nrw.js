import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";
import Footer from "../components/footer/footer";

export default function Nrw() {
  return (
    <div>
      <Navbar />
      <div id="nrw">
        <Head>
          <title>Create Next Amin app</title>
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

        <header className="d-flex flex-column justify-content-center align-items-center">
          <Image
            className="main-image mb-5"
            width={400}
            height={167}
            src="/images/nrw/logo.png"
            alt=""
          />
          <h1>The National Robotics Congress</h1>
          <h1 className="mb-5">in Tunisia</h1>
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center nrwmargin">
              <img className="mb-3" src="/images/nrw/placeicon.png" alt="" />
              <p>
                <b>5-star hotel business, Tunis</b>
              </p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img className="mb-3" src="/images/nrw/timeicon.png" alt="" />
              <p>
                <b>2-4 JULY 2021</b>
              </p>
            </div>
          </div>
        </header>
        <section className="countdown-timer">
          <div className="container p-4 d-flex justify-content-center ">
            <div className="d-flex justify-content-around w-100">
              <div className="mr-5 text-center countdown-color">
                <h1 className=" countdown-color">Days</h1>
                <p className="countersize">0</p>
              </div>
              <div className="mr-5 text-center">
                <h1 className=" countdown-color">Hours</h1>
                <p className="countersize">0</p>
              </div>
              <div className="text-center">
                <h1 className=" countdown-color">Minutes</h1>
                <p className="countersize">0</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-congress pb-5">
          <div className="container p-5 d-flex flex-column justify-content-center">
            <h1 className="mb-1">About The congress</h1>
            <h5 className="mb-4">
              What makes National Robotics Weekend a special event?
            </h5>
            <p className="mb-5">
              Passionate about the world of robotics, IOT and AI? Interested in
              the big changement that technology brings to different fields?
              National Robotics Weekend will be there to answer all of your
              questions. We introduce to you the 3.1 edition of NRW under the
              theme "robots beyond the limits” organised by IEEE RAS INSAT SBC.
              The congress is your chance to dive into the world of robotics
              through our various activities, enriching workshops and
              challenging Hackathon.
            </p>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-center">
                <img
                  className="mb-3"
                  width="150"
                  src="/images/nrw/workshops.png"
                  alt=""
                />
                <h3>Workshops</h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="mb-3"
                  width="150"
                  src="/images/nrw/forum.png"
                  alt=""
                />
                <h3>Forum</h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="mb-3"
                  width="150"
                  src="/images/nrw/fun.png"
                  alt=""
                />
                <h3>Fun</h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="mb-3"
                  width="150"
                  src="/images/nrw/icon.png"
                  alt=""
                />
                <h3>Hackathon</h3>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row mb-5">
              <div className="col mr-5">
                <h3>Workshops</h3>
                <p>
                  Explorer-pack-dedicated workshops represent one of the
                  National Robotics Weekend’s main axes . We will cover a
                  variety of topics related to the IoT , Robotics and embedded
                  systems in general by offering multiple certified training
                  sessions. Our workshops are open to all levels of expertise
                  and you will get the chance to apply the skills you are
                  learning all along the workshop.
                </p>
              </div>
              <div className="col">
                <h3>Technical Conferences</h3>
                <p>
                  Technical conferences will be a different way of acquiring
                  knowledge . You will attend expert-presented conferences in a
                  friendly atmosphere where we will exchange their technical
                  experience, building their businesses, discovering their field
                  of action, the difficulties and what to expect if you ever
                  want to start a career similar to theirs. This is your chance
                  if you are a beginner and if you are triggered by the terms
                  IoT, embedded systems, Artificial Intelligence, etc.. or if
                  you want to listen to a professional’s experience feedback.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col mr-5">
                <h3>Hackathon</h3>
                <p>
                  Challenger-pack-dedicated, our hackathon aims to improve the
                  capability of future engineers to think BEYOND THE LIMITS by
                  finding advanced and revolutionary ideas for the thematics
                  presented by the ministry of transport and logistics. Teams of
                  4 to 5 participants will be asked to solve the problems by the
                  means of robotics and IoT.
                </p>
              </div>
              <div className="col">
                <h3>Forum</h3>
                <p>
                  In this edition of NRW we added a very important part which is
                  the Forum. You, Internship seekers will be able to meet some
                  leader companies and recruiters that work in the IT, embedded
                  systems, robotics and IoT fields in order to submit your CVs,
                  extend your professional network and get to leave a good
                  impression whether for your upcoming or future experiences.
                  Don’t forget to bring your CVs with you!
                </p>
              </div>
            </div>
          </div>
          <section className="packs">
            <div className="container p-5">
              <h1>Packs</h1>
              <div className="row">
                <div className="col px-5 challenger-border">
                  <h1>Challenger</h1>
                  <p>
                    The highlight of the challenger experience is the 2nd day
                    Hackathon, which will be under the patronage of the ministry
                    of transport and logistics , where your skills will be put
                    to the test alongside your team of 4 or 5 people. This
                    Hackathon unlike most, will be dealing with real life issues
                    that the participants will be trying to solve for 24 hours.
                    Being a challenger requires having some skills in IoT and
                    Robotics, so are you up to the task ? A significant reward
                    is awaiting the winning team so get ready to tackle the
                    challenge.
                  </p>
                </div>
                <div className="col px-5">
                  <h1>Explorer</h1>
                  <p>
                    Our Explorers will benefit, on the 2nd day, from a variety
                    of enriching certified workshops that we will be offering.
                    Not only will you be learning from our experienced trainers,
                    but you will also be putting your newly found knowledge in
                    practice. No matter what your skills are or what your
                    background is, you are welcome to join and you will be able
                    to make the most out of the workshops. Don’t miss this
                    chance if you want to know more about robotics, IoT and
                    embedded systems.
                  </p>
                </div>
              </div>
            </div>
          </section>
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

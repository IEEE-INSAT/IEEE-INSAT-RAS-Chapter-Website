import styles from "../splitter/splitter.module.css";
import { BsFillAwardFill } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export default function Splitter() {
  return (
    <div>
      <section
        className="ftco-counter  img containerSplitter"
        id="section-counter"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <span className="flaticon-coffee-cup">
                          <BsFillPersonFill />
                        </span>
                      </div>
                      <strong className="number" data-number="385">
                        0
                      </strong>
                      <span>Members</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <span className="flaticon-coffee-cup">
                          <BsGearFill />
                        </span>
                      </div>
                      <strong className="number" data-number="6">
                        0
                      </strong>
                      <span>Competitions</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <span className="flaticon-coffee-cup">
                          <BsBookHalf />
                        </span>
                      </div>
                      <strong className="number" data-number="3">
                        0
                      </strong>
                      <span>Workshops</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <span className="flaticon-coffee-cup">
                          <BsFillAwardFill />
                        </span>
                      </div>
                      <strong className="number" data-number="20">
                        0
                      </strong>
                      <span>Award</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

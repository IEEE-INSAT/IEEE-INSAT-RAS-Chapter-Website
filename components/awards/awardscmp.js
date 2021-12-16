import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./awardscmp.module.css";
import Image from "next/image";
export default function Awardscmp() {
  return (
    <section className="ftco-section mt-5 pt-5">
      <div className="row justify-content-center mb-1 pb-3 mt-5 pt-5">
        <div className="col-md-7 heading-section  text-center ">
          <h2 className="mb-1  ">Our Awards</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div>
          <Carousel
            autoFocus={true}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            verticalSwipe="natural"
            interval={2500}
            emulateTouch={true}
            swipeable={true}
          >
            <div>
              <Image src="/images/awards/award1.png" height="450" width="500" />

              <div className="row justify-content-center">
                <div className="col-md-7 heading-section  text-center ">
                  <h2 className="mb-1 ml-8  ">
                    2017 best Ras Student Chapter Award
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <Image src="/images/awards/award2.png" height="450" width="500" />
              <div className="row justify-content-center">
                <div className="col-md-7 heading-section  text-center ">
                  <h2 className="mb-1 ml-8  ">
                    2018 runner up in Region 8 Educational Activites
                    sub-committe(EASC)
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <Image src="/images/awards/award3.png" height="450" width="500" />
              <div className="row justify-content-center">
                <div className="col-md-7 heading-section  text-center ">
                  <h2 className="mb-1 ml-8  ">
                    2018 outstanding Student Branch Chapter Award
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <Image src="/images/awards/award4.png" height="450" width="500" />
              <div className="row justify-content-center">
                <div className="col-md-7 heading-section  text-center ">
                  <h2 className="mb-1 ml-8  ">
                    2019 Student Branch Chapter of the Year
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <Image src="/images/awards/award5.png" height="450" width="500" />
              <div className="row justify-content-center">
                <div className="col-md-7 heading-section  text-center ">
                  <h2 className="mb-1 ml-8  ">
                    2020 winner of innovation challenge 24h enicarthage
                  </h2>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

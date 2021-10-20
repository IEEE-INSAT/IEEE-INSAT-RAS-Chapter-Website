import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./awardscmp.module.css";

 
export default function Awardscmp() {
  return (
    <section className="ftco-section mt-5 pt-5">
         <div className="row justify-content-center mb-1 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section  text-center ">
            <h2 className="mb-1 ">Our Awards</h2>
          </div>
        </div>
      <div className="row justify-content-center">
        <div className={styles.boundries}>
          <Carousel
            axis="vertical"
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
            dynamicHeight={true}
            
          >
            <div>
              <img src="/images/awards/award2017.jpeg" />
             
            </div>
            <div>
              <img src="/images/awards/award2018-1.jpeg" />
              
            </div>
            <div>
              <img src="/images/awards/award2018-2.jpeg" />
              
            </div>
            <div>
              <img src="/images/awards/award2019.jpeg" />
            
            </div>
            <div>
              <img src="/images/awards/award2020.jpeg" />
             
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

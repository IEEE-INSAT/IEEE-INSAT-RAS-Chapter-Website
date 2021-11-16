import React, { useState ,useEffect} from "react";
import "react-vertical-timeline-component/style.min.css";

import { FaRobot } from "react-icons/fa";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default function ActivitiesCmp() {
  const [activitieslist, setActitieslist] = useState([]);
  const accessToken = "EAAIqlGCZBwqABAO0X7fKqBcbWb30s049O3VDu5E1mdWITe1CsMuRV16ScP5DHo5spXbumC8uvQimefEa12CXNb8yKyOtwhbWITZBSCwa147iXKDxTCmfp5HdEoirO3tA0g0KXqdh28H9ZBiKcUrAnEtXQSfsqKqNGg3Aq7GvsjKxcTjAPqT";
  
  useEffect(() => {
    axios.get('https://graph.facebook.com/v12.0/insat.ras/feed?fields=message,created_time,full_picture&access_token=EAAIqlGCZBwqABAO0X7fKqBcbWb30s049O3VDu5E1mdWITe1CsMuRV16ScP5DHo5spXbumC8uvQimefEa12CXNb8yKyOtwhbWITZBSCwa147iXKDxTCmfp5HdEoirO3tA0g0KXqdh28H9ZBiKcUrAnEtXQSfsqKqNGg3Aq7GvsjKxcTjAPqT')
    .then(function (response) {
     setActitieslist(response.data.data)

    })
     
  },[])

  return (
    <section className="ftco-section mt-5 pt-5">
      <div className="row justify-content-center mb-1 pb-3 mt-5 pt-5">
        <div className="col-md-7 heading-section  text-center ">
          <h2 className="mb-1 ">Our Activities </h2>
        </div>
      </div>
      {activitieslist.length<1 &&(<div  style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}><img src="images/DualRing.svg" ></img></div>)}
      { activitieslist.length>=1 &&(<VerticalTimeline>
        {activitieslist.map(activity => {     
           return(<VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(49, 0, 57)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(49, 0, 57)" }}
            date={activity.created_time.substring(0,10)}
            iconStyle={{ background: "rgb(49, 0, 57)", color: "#fff" }}
            icon={<FaRobot />}
          >
            <h3 className="vertical-timeline-element-title">IEEE RAS Chapter - INSAT Student Branch</h3>
           
            <p>
              {activity.message}
            </p>
            <img src={activity.full_picture} width='100%' alt="post" />
          </VerticalTimelineElement>)
             })}
        
      </VerticalTimeline>)}
      
    </section>
  );
}

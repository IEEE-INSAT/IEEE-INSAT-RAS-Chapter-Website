import Head from "next/head";
import Navbar from "../components/navbar/navbar";

import Footer from "../components/footer/footer";
import ActivitiesCmp from "../components/activitiescmp/activitiescmp";


export default function Activities() {
  return (
    <div>
      <Navbar />
      <div id="activities">
      <ActivitiesCmp/>

        

      </div>
      <Footer />
     
    </div>
  );
}

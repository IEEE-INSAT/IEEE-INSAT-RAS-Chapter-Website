import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Awardscmp from "../components/awards/awardscmp";

export default function Awards() {
  return (
    <div>
      <Navbar />
      <div id="awards">
       <Awardscmp/>


        

      </div>
      <Footer />
     
    </div>
  );
}

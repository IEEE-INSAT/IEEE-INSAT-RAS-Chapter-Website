import Head from "next/head";
import AboutUsHome from "../components/aboutushome/aboutushome";
import Banner from "../components/banner/banner";
import Contactus from "../components/contactus/contactus";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Splitter from "../components/splitter/splitter";
import Safe from "react-safe";
export default function Home() {
  return (
    <div>
      <Head>
        <title>IEEE RAS INSAT</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Neon machine.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Navbar />
      <Banner />
      <AboutUsHome />
      <Splitter />
      <hr />
      <hr />
      <Contactus />
      <Footer />

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
      <script src="//embed.typeform.com/next/embed.js"></script>
    </div>
  );
}

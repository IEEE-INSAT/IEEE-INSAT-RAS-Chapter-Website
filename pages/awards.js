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
        <Head>
          <title>Awards</title>
        </Head>
        <Awardscmp />
      </div>
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

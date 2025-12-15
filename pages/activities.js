import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ActivitiesNew from "../components/activitiesnew/activitiesnew";
import { client } from "../lib/sanity/client";

export default function Activities({ activities }) {
  return (
    <div>
      <Navbar />
      <div id="activities">
        <Head>
          <title>Activities</title>
        </Head>
        <ActivitiesNew activities={activities} />
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

export async function getStaticProps() {
  const query = `*[_type == "activity"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    details,
    date,
    image
  }`;

  try {
    const activities = await client.fetch(query);
    
    return {
      props: {
        activities: activities || []
      },
      revalidate: 60 // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching activities:", error);
    return {
      props: {
        activities: []
      },
      revalidate: 60
    };
  }
}

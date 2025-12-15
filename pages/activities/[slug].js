import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ActivityDetail from "../../components/activitydetail/activitydetail";
import { client } from "../../lib/sanity/client";

// Sample detailed activities data - can be moved to a separate data file later
const activitiesData = {
  "neghlbouh": {
    slug: "neghlbouh",
    title: "NEGHLBOUH",
    description: "Smart tracking gadget",
    details: "An innovative IoT project focused on developing smart tracking solutions for everyday use cases.",
    overview: "NEGHLBOUH is an innovative IoT project developed by our RAS chapter members. This smart tracking gadget combines cutting-edge sensor technology with cloud connectivity to provide real-time location tracking and monitoring capabilities. The project showcases the integration of hardware design, embedded programming, and mobile application development.",
    date: "2024",
    location: "INSAT Campus",
    image: "/images/activities/neghlbouh.jpg",
    objectives: [
      "Design and develop a functional IoT tracking device",
      "Implement real-time GPS tracking with cloud integration",
      "Create a user-friendly mobile application interface",
      "Demonstrate practical applications of IoT in daily life"
    ],
    highlights: [
      {
        title: "Hardware Design",
        description: "Custom PCB design with integrated GPS and communication modules"
      },
      {
        title: "Mobile App",
        description: "Cross-platform mobile application for real-time tracking and alerts"
      },
      {
        title: "Cloud Integration",
        description: "Secure cloud backend for data storage and processing"
      },
      {
        title: "Team Collaboration",
        description: "Successful collaboration between hardware and software teams"
      }
    ],
    stats: [
      { value: "15+", label: "Team Members" },
      { value: "6", label: "Months" },
      { value: "3", label: "Prototypes" },
      { value: "100%", label: "Success Rate" }
    ],
    organizers: ["IEEE INSAT RAS", "Embedded Systems Club"],
    gallery: [
      "/images/activities/neghlbouh.jpg",
      "/images/activities/neghlbouh.jpg",
      "/images/activities/neghlbouh.jpg"
    ]
  },
  "summer-school": {
    slug: "summer-school",
    title: "Summer School",
    description: "An IEEE educational event",
    details: "Comprehensive training program covering robotics, automation, and embedded systems.",
    overview: "Our annual Summer School program is a comprehensive training initiative designed to introduce students to the exciting world of robotics and automation. Over the course of several weeks, participants engage in hands-on workshops, lectures from industry experts, and practical projects that reinforce key concepts in embedded systems, control theory, and robotic design.",
    date: "Summer 2024",
    location: "INSAT Campus",
    image: "/images/activities/summer-school.jpg",
    objectives: [
      "Provide comprehensive training in robotics and automation",
      "Bridge the gap between theoretical knowledge and practical skills",
      "Foster collaboration and teamwork among participants",
      "Prepare students for careers in robotics and embedded systems"
    ],
    highlights: [
      {
        title: "Expert Speakers",
        description: "Industry professionals and academic experts sharing their knowledge"
      },
      {
        title: "Hands-on Workshops",
        description: "Practical sessions covering Arduino, Raspberry Pi, and ROS"
      },
      {
        title: "Team Projects",
        description: "Collaborative final projects showcasing learned skills"
      },
      {
        title: "Networking",
        description: "Connect with peers and professionals in the field"
      }
    ],
    stats: [
      { value: "80+", label: "Participants" },
      { value: "4", label: "Weeks" },
      { value: "12", label: "Workshops" },
      { value: "20+", label: "Projects" }
    ],
    organizers: ["IEEE INSAT RAS", "IEEE Tunisia Section"],
    gallery: [
      "/images/activities/summer-school.jpg",
      "/images/activities/summer-school.jpg",
      "/images/activities/summer-school.jpg"
    ]
  },
  "raspberry-pi-workshop": {
    slug: "raspberry-pi-workshop",
    title: "Raspberry Pi Workshop",
    description: "Hands-on training session",
    details: "Interactive workshop teaching practical skills in embedded systems and programming.",
    overview: "This intensive workshop focuses on the Raspberry Pi platform, teaching participants how to leverage this powerful single-board computer for various projects. From basic setup to advanced applications in IoT and robotics, attendees gain practical experience with Linux, Python programming, GPIO interfacing, and project development.",
    date: "October 2024",
    location: "IEEE INSAT Lab",
    image: "/images/activities/raspberry-pi.jpg",
    objectives: [
      "Master Raspberry Pi setup and configuration",
      "Learn Python programming for embedded systems",
      "Understand GPIO interfacing and sensor integration",
      "Build practical IoT and robotics projects"
    ],
    highlights: [
      {
        title: "Hands-on Learning",
        description: "Each participant works with their own Raspberry Pi kit"
      },
      {
        title: "Project-Based",
        description: "Build real-world projects from simple LED control to IoT applications"
      },
      {
        title: "Expert Guidance",
        description: "Experienced mentors provide personalized support"
      },
      {
        title: "Take Home Kit",
        description: "Participants receive a Raspberry Pi starter kit"
      }
    ],
    stats: [
      { value: "40+", label: "Participants" },
      { value: "2", label: "Days" },
      { value: "8", label: "Hours" },
      { value: "5+", label: "Projects" }
    ],
    organizers: ["IEEE INSAT RAS", "Computer Science Club"],
    gallery: [
      "/images/activities/raspberry-pi.jpg",
      "/images/activities/raspberry-pi.jpg",
      "/images/activities/raspberry-pi.jpg"
    ]
  },
  "national-robotics-weekend": {
    slug: "national-robotics-weekend",
    title: "National Robotics Weekend",
    description: "Annual robotics competition",
    details: "Bringing together robotics enthusiasts from across the nation for challenges and networking.",
    overview: "The National Robotics Weekend is our flagship annual event, bringing together the brightest minds in robotics from universities across Tunisia. This intense competition features multiple challenges testing participants' skills in mechanical design, programming, strategy, and teamwork. Beyond the competition, NRW provides invaluable networking opportunities and showcases cutting-edge developments in robotics and automation.",
    date: "March 2024",
    location: "INSAT Main Hall",
    image: "/images/activities/nrw.jpg",
    objectives: [
      "Host a premier national robotics competition",
      "Encourage innovation and creative problem-solving",
      "Foster collaboration between universities",
      "Showcase advancements in robotics technology"
    ],
    highlights: [
      {
        title: "Line Following",
        description: "Classic challenge testing autonomous navigation and speed"
      },
      {
        title: "Maze Solving",
        description: "Robots navigate complex mazes using sensor fusion"
      },
      {
        title: "Sumo Wrestling",
        description: "Strategic robot combat in a circular arena"
      },
      {
        title: "Innovation Award",
        description: "Recognition for most creative and innovative designs"
      }
    ],
    stats: [
      { value: "200+", label: "Participants" },
      { value: "50+", label: "Teams" },
      { value: "10+", label: "Universities" },
      { value: "3", label: "Days" }
    ],
    organizers: ["IEEE INSAT RAS", "IEEE Tunisia Section", "INSAT Administration"],
    gallery: [
      "/images/activities/nrw.jpg",
      "/images/activities/nrw.jpg",
      "/images/activities/nrw.jpg"
    ]
  }
};

export default function ActivityDetailPage({ activity }) {
  return (
    <>
      <Navbar />
      <ActivityDetail activity={activity} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "activity"] {
    "slug": slug.current
  }`;

  try {
    const activities = await client.fetch(query);
    
    // Filter out any activities with null/undefined slugs and ensure slug is a string
    const paths = activities
      .filter((activity) => activity.slug && typeof activity.slug === 'string')
      .map((activity) => ({
        params: { slug: activity.slug }
      }));

    return {
      paths,
      fallback: "blocking" // Enable ISR with blocking fallback
    };
  } catch (error) {
    console.error("Error fetching activity paths:", error);
    return {
      paths: [],
      fallback: "blocking"
    };
  }
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "activity" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    overview,
    details,
    date,
    location,
    image,
    objectives,
    highlights,
    stats,
    organizers,
    gallery
  }`;

  try {
    const activity = await client.fetch(query, { slug: params.slug });

    if (!activity) {
      // Fallback to static data if not found in Sanity
      const fallbackActivity = activitiesData[params.slug];
      
      return {
        props: {
          activity: fallbackActivity || null
        },
        revalidate: 60
      };
    }

    return {
      props: {
        activity
      },
      revalidate: 60 // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching activity:", error);
    
    // Fallback to static data on error
    const fallbackActivity = activitiesData[params.slug];
    
    return {
      props: {
        activity: fallbackActivity || null
      },
      revalidate: 60
    };
  }
}

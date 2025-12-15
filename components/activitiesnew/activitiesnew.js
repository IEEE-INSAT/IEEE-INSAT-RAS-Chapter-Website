import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import { CanvasRevealEffect } from "../ui/canvas-reveal-simple";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity/image";

export default function ActivitiesNew({ activities = [] }) {
  // Fallback activities if none provided
  const defaultActivities = [
    {
      slug: { current: "neghlbouh" },
      title: "NEGHLBOUH",
      description: "Smart tracking gadget",
      details: "An innovative IoT project focused on developing smart tracking solutions for everyday use cases.",
      date: "2024",
      image: "/images/activities/neghlbouh.jpg"
    },
    {
      slug: { current: "summer-school" },
      title: "Summer School",
      description: "An IEEE educational event",
      details: "Comprehensive training program covering robotics, automation, and embedded systems.",
      date: "2024",
      image: "/images/activities/summer-school.jpg"
    },
    {
      slug: { current: "raspberry-pi-workshop" },
      title: "Raspberry Pi Workshop",
      description: "Hands-on training session",
      details: "Interactive workshop teaching practical skills in embedded systems and programming.",
      date: "2024",
      image: "/images/activities/raspberry-pi.jpg"
    },
    {
      slug: { current: "national-robotics-weekend" },
      title: "National Robotics Weekend",
      description: "Annual robotics competition",
      details: "Bringing together robotics enthusiasts from across the nation for challenges and networking.",
      date: "2024",
      image: "/images/activities/nrw.jpg"
    }
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  return (
    <section className="ftco-section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Our Activities</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {displayActivities.map((activity, index) => {
            const slug = activity.slug?.current || activity.slug;
            const imageUrl = activity.image?.asset 
              ? urlFor(activity.image).width(300).height(300).url() 
              : (activity.image || '/images/placeholder.jpg');
            
            return (
              <div key={index} className="col-md-6 col-lg-5 mb-4">
                <Link href={`/activities/${slug}`} className="block h-full">
                  <CardSpotlight 
                  className="w-full relative" 
                  style={{ height: '220px' }}
                  canvasReveal={
                    <CanvasRevealEffect
                      animationSpeed={0.5}
                      containerClassName="absolute inset-0"
                      colors={[
                        [59, 130, 246],
                        [139, 92, 246],
                      ]}
                      dotSize={2}
                      showGradient={false}
                    />
                  }
                >
                  {/* Content layer - image left, text right centered */}
                  <div className="relative z-30 flex gap-4 items-center h-full">
                    {/* Image on the left - portrait rectangle */}
                    {imageUrl && (
                      <div className="flex-shrink-0 w-28 h-40 relative rounded-lg overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={activity.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          unoptimized={imageUrl.startsWith('http')}
                        />
                      </div>
                    )}
                    
                    {/* Text on the right - centered */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {activity.title}
                      </h3>
                      
                      {/* Short description */}
                      <p className="text-neutral-300 text-sm mb-2 line-clamp-2">
                        {activity.description}
                      </p>
                      
                      {/* Date badge */}
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-neutral-800 self-start">
                        <CheckIcon />
                        <span className="text-xs text-neutral-400">{activity.date}</span>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity/image";

export default function ActivityDetail({ activity }) {
  if (!activity) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Activity not found</h2>
        </div>
      </div>
    );
  }

  // Handle both Sanity images and regular image paths
  const mainImageUrl = activity.image?.asset 
    ? urlFor(activity.image).width(800).height(600).url() 
    : (activity.image || '/images/placeholder.jpg');

  return (
    <section className="ftco-section mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Header with image */}
            <div className="activity-header mb-5">
              <div className="row align-items-center">
                <div className="col-md-5">
                  {mainImageUrl && (
                    <div className="activity-image position-relative" style={{ height: "400px" }}>
                      <Image
                        src={mainImageUrl}
                        alt={activity.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded"
                        unoptimized={mainImageUrl.startsWith('http')}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-7">
                  <h1 className="mb-3">{activity.title}</h1>
                  <p className="lead text-muted">{activity.description}</p>
                  <div className="d-flex align-items-center mt-3">
                    <span className="badge badge-primary mr-3">{activity.date}</span>
                    {activity.location && (
                      <span className="text-muted">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {activity.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="activity-section mb-5">
              <h3 className="mb-3">Overview</h3>
              <p>{activity.overview || activity.details}</p>
            </div>

            {/* Objectives */}
            {activity.objectives && (
              <div className="activity-section mb-5">
                <h3 className="mb-3">Objectives</h3>
                <ul className="list-styled">
                  {activity.objectives.map((objective, index) => (
                    <li key={index} className="mb-2">{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}
            {activity.highlights && (
              <div className="activity-section mb-5">
                <h3 className="mb-3">Highlights</h3>
                <div className="row">
                  {activity.highlights.map((highlight, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">{highlight.title}</h5>
                          <p className="card-text">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {activity.gallery && activity.gallery.length > 0 && (
              <div className="activity-section mb-5">
                <h3 className="mb-3">Gallery</h3>
                <div className="row">
                  {activity.gallery.map((image, index) => {
                    const galleryImageUrl = image?.asset 
                      ? urlFor(image).width(600).height(400).url() 
                      : (image || '/images/placeholder.jpg');
                    
                    return galleryImageUrl ? (
                      <div key={index} className="col-md-4 mb-4">
                        <div className="position-relative" style={{ height: "250px" }}>
                          <Image
                            src={galleryImageUrl}
                            alt={`${activity.title} - Image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded"
                            unoptimized={galleryImageUrl.startsWith('http')}
                          />
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Participants/Stats */}
            {activity.stats && (
              <div className="activity-section mb-5">
                <h3 className="mb-3">By the Numbers</h3>
                <div className="row text-center">
                  {activity.stats.map((stat, index) => (
                    <div key={index} className="col-md-3 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h2 className="text-primary mb-2">{stat.value}</h2>
                          <p className="text-muted mb-0">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Organizers */}
            {activity.organizers && (
              <div className="activity-section mb-5">
                <h3 className="mb-3">Organized By</h3>
                <div className="d-flex flex-wrap">
                  {activity.organizers.map((organizer, index) => (
                    <span key={index} className="badge badge-secondary mr-2 mb-2 p-2">
                      {organizer}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

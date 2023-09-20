import React from "react";
import "./JobFeature.css";
import Image from "next/image";
import GoogleLogo from "../../../assets/img/google-logo.svg";
import LocationIconCard from "../../../assets/img/job-card-location-icon.svg";
import JobVector from "../../../assets/img/job-card-vector.svg";
import PopularcategoryArrow1 from "../../../assets/img/popular-category-arrow.svg";

function JobFeature() {
  const jobFeatureCards = [
    {
      jobHeading: "Techical Support Specialist",
      jobPartFullTime: "Part-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-bg-color card-body py-4 px-4",
    },
    {
      jobHeading: "Senior UX Designer",
      jobPartFullTime: "Full-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-bg-color card-body py-4 px-4",
    },
    {
      jobHeading: "Marketing Officer",
      jobPartFullTime: "Internship",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Junior Graphic Designer",
      jobPartFullTime: "Internship",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Interaction Designer",
      jobPartFullTime: "Part-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Project Manager",
      jobPartFullTime: "Full-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-bg-color card-body py-4 px-4",
    },
    {
      jobHeading: "Software Engineer",
      jobPartFullTime: "Full-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Visual Designer",
      jobPartFullTime: "Full-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Project Manager",
      jobPartFullTime: "Full-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Front End Developer",
      jobPartFullTime: "Part-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Senior UX Designer",
      jobPartFullTime: "Full-time",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
    {
      jobHeading: "Marketing Manager",
      jobPartFullTime: "Internship",
      salaryRange: "$20,000 - $25,000",
      googleHeader: "Google Inc.",
      jobLocation: "Dhaka, Bangladesh",
      cardBackgroundColor: "card-body py-4 px-4",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-md-flex justify-content-between align-items-center text-center pb-4">
            <h1 className="py-3 py-md-5 mb-2 mb-md-0">Featured Job</h1>
            <span className="mt-3 mt-md-0 ms-md-3 ms-md-0">
              <a
                href=""
                className="fs-6 fw-bold text-decoration-none border rounded p-3"
              >
                View All <Image src={PopularcategoryArrow1} className="ms-2" />
              </a>
            </span>
          </div>

          {jobFeatureCards.map((jobFeatureDetails) => {
            return (
              <div className="col-sm-6 col-lg-4 mb-3 mb-sm-4">
                <div className="card border-0">
                  <div className={jobFeatureDetails.cardBackgroundColor}>
                    <h5 className="card-title">
                      {jobFeatureDetails.jobHeading}
                    </h5>
                    <p className="card-text pt-2">
                      <span className="card-span-clr p-2 rounded text-uppercase">
                        {jobFeatureDetails.jobPartFullTime}
                      </span>
                      <span className="card-salary-clr">
                        Salary: {jobFeatureDetails.salaryRange}
                      </span>
                    </p>
                    <div className="d-flex position-relative pt-2">
                      <Image
                        src={JobVector}
                        className="position-absolute top-50 end-0 translate-middle-y"
                      />
                      <Image src={GoogleLogo} alt="Google Icon" />
                      <div className="ps-3">
                        <h6>Google Inc.</h6>
                        <span className="card-salary-clr">
                          <Image
                            src={LocationIconCard}
                            alt="Location Icon"
                            className=""
                          />
                          {jobFeatureDetails.jobLocation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default JobFeature;

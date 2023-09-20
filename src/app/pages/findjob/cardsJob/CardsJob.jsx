import React from "react";
import "./CardsJob.css";
import Image from "next/image";
import GoogleLogo from "../../../assets/img/google-logo.svg";
import LocationIconCard from "../../../assets/img/job-card-location-icon.svg";
import JobVector from "../../../assets/img/job-card-vector.svg";
import PopularcategoryArrow1 from "../../../assets/img/popular-category-arrow.svg";
import LeftArrow from "../../../assets/img/left-arrow.svg"
import RightArrow from "../../../assets/img/right-arrow.svg"
import Number1 from "../../../assets/img/number-1.svg"
import Number2 from "../../../assets/img/number-2.svg"
import Number3 from "../../../assets/img/number-3.svg"
import Number4 from "../../../assets/img/number-4.svg"
import Number5 from "../../../assets/img/number-5.svg"

function CardsJob() {
    const JobFeature = [
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
        jobHeading: "UI/UX Designer",
        jobPartFullTime: "Full-time",
        salaryRange: "$20,000 - $25,000",
        googleHeader: "Google Inc.",
        jobLocation: "Dhaka, Bangladesh",
        cardBackgroundColor: "card-bg-color card-body py-4 px-4",
      },
      {
        jobHeading: "Product Designer",
        jobPartFullTime: "Full-time",
        salaryRange: "$20,000 - $25,000",
        googleHeader: "Google Inc.",
        jobLocation: "Dhaka, Bangladesh",
        cardBackgroundColor: "card-bg-color card-body py-4 px-4",
      },
      {
        jobHeading: "Networking Engineer",
        jobPartFullTime: "Internship",
        salaryRange: "$20,000 - $25,000",
        googleHeader: "Google Inc.",
        jobLocation: "Dhaka, Bangladesh",
        cardBackgroundColor: "card-bg-color card-body py-4 px-4",
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
      <div className="container py-5">
        <div className="row">
          {JobFeature.map((jobFeatureDetails) => {
            return (
              <div className="col-sm-6 col-lg-4 mb-3 mb-sm-4">
                <div className="card border-0">
                  <div className={jobFeatureDetails.cardBackgroundColor}>
                    <h5 className="card-title">
                      {jobFeatureDetails.jobHeading}
                    </h5>
                    <p className="card-text pt-2">
                      <span className="card-span-clr p-2 rounded text-uppercase fs-6">
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
          <div className="d-flex g-2 justify-content-center pb-5">
            <Image src={LeftArrow} alt="Left Arrow" />
            <Image src={Number1} alt="Left Arrow" />
            <Image src={Number2} alt="Left Arrow" />
            <Image src={Number3} alt="Left Arrow" />
            <Image src={Number4} alt="Left Arrow" />
            <Image src={Number5} alt="Left Arrow" />
            <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsJob;

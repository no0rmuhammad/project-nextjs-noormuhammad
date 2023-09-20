import Image from "next/image";
import React from "react";
import "./JobPilot.css";
import jobPilotImg from "../../../assets/img/job-pilot-img-1.svg";
import jobPilotImg2 from "../../../assets/img/job-pilot-img-2.svg";
import jobPilotImg3 from "../../../assets/img/job-pilot-img-3.svg";
import jobPilotImg4 from "../../../assets/img/job-pilot-img-4.svg";
function JobPilotWork() {
  const jobPilotCards = [
    {
      imgSrc: jobPilotImg,
      pilotHeading: "Create account",
      pilotPara:
        "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
    },
    {
      imgSrc: jobPilotImg2,
      pilotHeading: "Upload CV/Resume",
      pilotPara:
        "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales",
      style: "bg-white",
    },
    {
      imgSrc: jobPilotImg3,
      pilotHeading: "Find suitable job",
      pilotPara: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
    },
    {
      imgSrc: jobPilotImg4,
      pilotHeading: "Apply job",
      pilotPara:
        "Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.",
    },
  ];
  return (
    <>
      <div className="jobpilot-bg-clr">
        <div className="container py-5">
          <div className="row text-center">
            <h1 className="text-center py-4">How jobpilot work</h1>
            {jobPilotCards.map((pilotitems) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <Image src={pilotitems.imgSrc} />
                  <h2 className="fw-normal pt-3 font-size-heading">{pilotitems.pilotHeading}</h2>
                  <p className="pt-2">{pilotitems.pilotPara}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPilotWork;

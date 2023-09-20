import Image from "next/image";
import React from "react";
import "./CandidateEmployer.css";
import ArrowImg from "../../../assets/img/popular-category-arrow.svg";

function CandidateEmployer(props) {
  return (
    <>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="bg-clr-grey p-4 rounded">
              <h2>{props.candidateTitle}</h2>
              <p className="mb-4 mt-3">{props.candidateDescription}</p>
              <div className="py-2">
                <a
                  href=""
                  className="text-decoration-none border p-3 rounded bg-light"
                >
                  Register now
                  <Image src={ArrowImg} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-clr-light p-4 rounded">
              <h2>{props.employerTitle}</h2>
              <p className="mb-4 mt-3">{props.employerDescription}</p>
              <div className="py-2">
                <a className="text-decoration-none border p-3 rounded bg-light">
                  Register now
                  <Image src={ArrowImg} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateEmployer;

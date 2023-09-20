import Image from "next/image";
import React from "react";
import "./Companies.css";
import EmployerLogo from "../../../assets/img/EmployersLogo.svg";
// import LocationIconCard from "../../../assets/img/job-card-location-icon.svg";

function Companies() {
  const companiesCards = [
    {
      dribbble: "Dribbble",
      feature: "Featured",
      companiesLocation: "Dhaka, Bangladesh",
      buttonPositionNumbers: "(3)",
      imgSrc: EmployerLogo,
    },
    {
      dribbble: "Dribbble",
      feature: "Featured",
      companiesLocation: "Dhaka, Bangladesh",
      buttonPositionNumbers: "(3)",
      imgSrc: EmployerLogo,
    },
    {
      dribbble: "Dribbble",
      feature: "Featured",
      companiesLocation: "Dhaka, Bangladesh",
      buttonPositionNumbers: "(3)",
      imgSrc: EmployerLogo,
    },
    {
      dribbble: "Dribbble",
      feature: "Featured",
      companiesLocation: "Dhaka, Bangladesh",
      buttonPositionNumbers: "(3)",
      imgSrc: EmployerLogo,
    },
    {
      dribbble: "Dribbble",
      feature: "Featured",
      companiesLocation: "Dhaka, Bangladesh",
      buttonPositionNumbers: "(3)",
      imgSrc: EmployerLogo,
    },
    {
      dribbble: "Dribbble",
      feature: "Featured",
      companiesLocation: "Dhaka, Bangladesh",
      buttonPositionNumbers: "(3)",
      imgSrc: EmployerLogo,
    },
  ];
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <h1 className="mb-4">Top Companies</h1>
          {companiesCards.map((companiesDetails) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card-container shadow border rounded py-3">
                  <div className="px-3 py-3 d-flex align-items-center">
                    <div className="my-auto pe-3">
                      <Image src={companiesDetails.imgSrc} />
                    </div>
                    <div className="align-items-center">
                      <div>
                        <span className="dribble-size">
                          {companiesDetails.dribbble}
                          <span className="feature-clr p-2 rounded-pill ms-2">
                            {companiesDetails.feature}
                          </span>
                        </span>
                      </div>
                      <span className="loc-Clr-2">
                        {companiesDetails.companiesLocation}
                      </span>
                    </div>
                  </div>
                  <div className="d-grid pt-3">
                    <button className="btn company-btn-clr" type="button">
                      Open Position {companiesDetails.buttonPositionNumbers}
                    </button>
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

export default Companies;

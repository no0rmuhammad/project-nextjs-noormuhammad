"use client"
import React, { useState } from "react";
import "./HeroSection.css";
import Image from "next/image";
import HeroImg from "../../../assets/img/hero-img.svg";
import SearchBar from "../../../assets/img/search-bar-img.svg";
import LocationIcon from "../../../assets/img/location-icon-img.svg";

function HeroSection() {
  // Button OnClick Function
  const submitDetails = (e) => {
    // e.preventDefault();
    setJobTitle("");
    setLocation("");
    console.log(Jobtitle, location);
  };
  // Input UseState
  const [Jobtitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <div className="hero-bg-clr">
        <div className="container p-5">
          <div className="row d-flex justify-content-center align-items-center centered-column">
            <div className="col-md-12 col-lg-6 col-sm-12 col-12 pb-5">
              <h1 className="height-hero pt-3">
                Find a job that suits your interest & skills.
              </h1>
              <p className="height-para py-2">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
              <div className="p-2 shadow bg-body">
                <div className="d-md-flex justify-content-center align-items-center gap-2">
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      <Image src={SearchBar} className="ms-2" />
                    </div>
                    <input
                      type="text"
                      className="form-control px-5 py-3 border-0 input-clr"
                      placeholder="Job title, Keyword..."
                      value={Jobtitle}
                      onChange={(e) => {
                        setJobTitle(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      <Image src={LocationIcon} className="ms-2" />
                    </div>
                    <input
                      type="text"
                      className="form-control px-5 py-3 border-0 mb-2 mb-md-0"
                      placeholder="Your Location"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="px-3 py-3 flex items-center justify-content-center border bg-button text-white rounded"
                      onClick={submitDetails}
                    >
                      <span style={{ whiteSpace: "nowrap" }}>
                        Find <span style={{ marginLeft: "5px" }}>Job</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h6>
                  <span className="hero-text-clr-1">Suggestion:</span>
                  Designer, Programing,
                  <span className="hero-text-clr-2">Digital Marketing,</span>
                  Video, Animation.
                </h6>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 col-12 text-end">
              <Image src={HeroImg} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

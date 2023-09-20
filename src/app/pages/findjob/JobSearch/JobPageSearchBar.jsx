"use client";
import SearchBar from "../../../assets/img/search-bar-img.svg";
import LocationIcon from "../../../assets/img/location-icon-img.svg";
import FilterIcon from "../../../assets/img/filters-icon.svg";
import React, { useState } from "react";
import Image from "next/image";
import ZipCodeIcon from "../../../assets/img/zip-code-icon.svg";

function JobPageSearchBar() {
  // Button OnClick Function
  const submitInput = (e) => {
    // e.preventDefault();
    setJobTitle("");
    setCityName("");

    console.log(jobtitle, cityname);
  };
  // Input OnChange Functions
  const changeJob = (e) => {
    setJobTitle(e.target.value);
    console.log(e.target.value);
  };
  const changeCity = (e) => {
    setCityName(e.target.value);
    console.log(e.target.value);
  };

  // Input UseState
  const [jobtitle, setJobTitle] = useState("");
  const [cityname, setCityName] = useState("");

  return (
    <>
      <div className="container py-5">
        <div className="p-2 shadow bg-body">
          <div className="d-md-flex justify-content-center align-items-center gap-2">
            <div className="flex-grow-1 position-relative">
              <div className="position-absolute top-50 start-0 translate-middle-y">
                <Image src={SearchBar} className="ms-2" alt="Seacrh Bar Icon" />
              </div>
              <input
                type="text"
                className="form-control ps-5 py-3 border-0 input-clr w-100"
                placeholder="Search by: Job title, Position, Keyword..."
                value={cityname}
                onChange={changeCity}
              />
            </div>
            <div className="flex-grow-1 position-relative">
              <div className="position-absolute top-50 start-0 translate-middle-y">
                <Image
                  src={LocationIcon}
                  className="ms-2"
                  alt="Location Icon"
                />
              </div>
              <input
                type="text"
                className="form-control ps-5 py-3 border-0 mb-2 mb-md-0 w-100"
                placeholder="City, state or zip code"
                value={jobtitle}
                onChange={changeJob}
              />
              <div className="position-absolute top-50 end-0 translate-middle-y">
                <Image src={ZipCodeIcon} className="me-3" alt="Zip Code Icon" />
              </div>
            </div>
            <div className="d-flex justify-content-center gap-2">
              <button
                type="button"
                className="px-3 py-3 flex items-center justify-content-center border rounded"
              >
                <span style={{ whiteSpace: "nowrap" }}>
                  <Image src={FilterIcon} alt="Filter Icon"/> Filter
                  <span style={{ marginLeft: "" }}></span>
                </span>
              </button>
              <button
                type="button"
                className="px-3 py-3 flex items-center justify-content-center border bg-button text-white rounded"
                onClick={submitInput}
              >
                <span style={{ whiteSpace: "nowrap" }}>
                  Find<span style={{ marginLeft: "5px" }}>Job</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPageSearchBar;

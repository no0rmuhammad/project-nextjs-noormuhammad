import React from "react";
import "./FooterSection.css";
import Image from "next/image";
import FooterImg from "../../assets/img/footer-img.svg";
import FooterArrow from "../../assets/img/footer-arrow.svg";
import Contact from "./contact/Contact";

function FooterSection() {
  return (
    <>
      <div className="footer-bg-clr">
        <div className="container pt-5 pb-4">
          <div className="row text-white">
            {/* <!-- First Footer List Start --> */}
            <div className="col-md-6 col-lg-4 col-sm-6 col-12">
              <ul>
                <li className="size14-700w mb-3 fs-6 li-style">
                  <div className="d-flex align-items-center">
                    <Image src={FooterImg} />
                    <span className="fw-medium fs-5 ps-2">Jobpilot</span>
                  </div>
                </li>
                <li className="mb-li">
                  Call now:<span className="text-white"> (319) 555-0115</span>
                </li>
                <li className="mb-li">
                  6391 Elgin St. Celina, Delaware 10299, New York, United States
                  of America
                </li>
              </ul>
            </div>

            {/* <!-- First Footer List End --> */}

            {/* <!-- Second Footer List Start --> */}
            <div className="col-md-6 col-lg-2 col-sm-6 col-12">
              <ul>
                <li className="size14-700w mb-3 fs-6 li-style">Quick Link</li>
                <li className="mb-li">About</li>
                <li className="mb-li text-white">
                  <Image
                    src={FooterArrow}
                    className="img-fluid"
                    alt="Footer Aroow Image"
                  />{" "}
                  Contact
                </li>
                <li className="mb-li">Pricing</li>
                <li className="mb-li">Blog</li>
              </ul>
            </div>
            {/* <!-- Second Footer List End --> */}

            {/* <!-- Third Footer List Start --> */}
            <div className="col-md-6 col-lg-2 col-sm-6 col-12">
              <ul>
                <li className="size14-700w mb-3 fs-6 li-style">Candidate</li>
                <li className="mb-li">Browse Jobs</li>
                <li className="mb-li">Browse Employers</li>
                <li className="mb-li">Candidate Dashboard</li>
                <li className="mb-li">Saved Jobs</li>
              </ul>
            </div>
            {/* <!-- Third Footer List End --> */}

            {/* <!-- Fourth Footer List Start --> */}
            <div className="col-md-6 col-lg-2 col-sm-6 col-12">
              <ul>
                <li className="size14-700w mb-3 fs-6 li-style">Employers</li>
                <li className="mb-li">Post a Job</li>
                <li className="mb-li">Browse Candidates</li>
                <li className="mb-li">Employers Dashboard</li>
                <li className="mb-li">Applications</li>
              </ul>
            </div>
            {/* <!-- Fourth Footer List End --> */}

            {/* <!-- Fifth Footer List Start --> */}
            <div className="col-md-6 col-lg-2 col-sm-6 col-12">
              <ul>
                <li className="size14-700w mb-3 fs-6 li-style">Support</li>
                <li className="mb-li">Faqs</li>
                <li className="mb-li">Privacy Policy</li>
                <li className="mb-li">Terms & Conditions</li>
              </ul>
            </div>
            {/* <!-- Fifth Footer List End --> */}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default FooterSection;

import React from "react";
import "./Navbar.css";
import Image from "next/image";
import callIcon from "../../assets/img/phone-call-img.svg";
import USFlag from "../../assets/img/uk-flag-img.svg";
import DownArrow from "../../assets/img/down-arrow-img.svg";
import Link from "next/link";

function NavbarSection() {
  return (
    <>
      <div className="nav-bg-clr">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="under-line nav-font-size nav-link"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-font-size nav-link"
                      href="/pages/findjob"
                    >
                      Find Job
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-font-size nav-link"
                      href="/pages/employer"
                    >
                      Employer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-font-size nav-link"
                      href="/pages/candidates"
                    >
                      Candidates
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-font-size nav-link"
                      href="/pages/pricingplan"
                    >
                      Pricing Plan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-font-size nav-link"
                      href="/pages/customersupports"
                    >
                      Customer Supports
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Image src={callIcon} />
                <span className="text-center d-flex justify-content-center align-items-center d-none d-lg-inline">
                  +1-202-555-0178
                </span>
                <Image src={USFlag} />
                <span className="text-center">English</span>
                <Image src={DownArrow} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    

    </>
  );
}

export default NavbarSection;

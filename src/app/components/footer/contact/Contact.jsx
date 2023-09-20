import React from "react";
import Image from "next/image";
import "./Contact.css";
import FBIcon from "../../../assets/img/fb-icon.svg";
import YoutubeIcon from "../../../assets/img/youtube-icon.svg";
import InstagramIcon from "../../../assets/img/instagram-icon.svg";
import TwitterIcon from "../../../assets/img/twitter-icon.svg";

function Contact() {
  return (
    <>
      <div className="border-top footer-bg-clr">
        <div className="container">
          <div className="d-flex justify-content-between pt-4">
            <p className="footer-para-clr">
              @ 2021 Jobpilot - Job Portal. All rights Rserved
            </p>
            <div className="d-flex gap-3">
            <Image src={FBIcon} alt="Facebook" />
            <Image src={YoutubeIcon} alt="Youtube" />
            <Image src={InstagramIcon} alt="Instagram" />
            <Image src={TwitterIcon} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

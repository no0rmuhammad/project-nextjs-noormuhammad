import React from "react";
import Image from "next/image";
import CardImg1 from "../../../assets/img/card-icon-1.svg"
import CardImg2 from "../../../assets/img/card-icon-2.svg"
import CardImg3 from "../../../assets/img/card-icon-3.svg"
import CardImg4 from "../../../assets/img/card-icon-4.svg"

function HeroCards() {
  const herodata = [
    {
      imgSrc: CardImg1,
      headingNumbers: "1,75,324",
      heropara : "Live Job"

    },
    {
      imgSrc: CardImg2,
      headingNumbers: "97,354",
      heropara : "Companies"
    },
    {
      imgSrc: CardImg3,
      headingNumbers: "38,47,154",
      heropara : "Candidates"

    },
    {
      imgSrc: CardImg4,
      headingNumbers: "7,532",
      heropara : "New Jobs"

    },
  ];
  return (
    <>
      <div className="hero-bg-clr pb-5">
        <div className="container p-4">
          <div className="row">
            {herodata.map((heroCardData) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3 col-12 mb-sm-3 mb-md-0">
                  <div className="px-3 py-3 d-flex align-items-center shadow">
                    <div className="my-auto pe-3">
                      <Image src={heroCardData.imgSrc} />
                    </div>
                    <div>
                      <h5>{heroCardData.headingNumbers}</h5>
                      <p>{heroCardData.heropara}</p>
                    </div>
                  </div>
                </div>
              );
            })};
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCards;

import React from "react";
import "./PopularCategory.css";
import categoryCardImg1 from "../../../assets/img/popular-card-img-1.svg";
import categoryCardImg2 from "../../../assets/img/popular-card-img-2.svg";
import categoryCardImg3 from "../../../assets/img/popular-card-img-3.svg";
import categoryCardImg4 from "../../../assets/img/popular-card-img-4.svg";
import categoryCardImg5 from "../../../assets/img/popular-card-img-5.svg";
import categoryCardImg6 from "../../../assets/img/popular-card-img-6.svg";
import categoryCardImg7 from "../../../assets/img/popular-card-img-7.svg";
import categoryCardImg8 from "../../../assets/img/popular-card-img-8.svg";
import PopularcategoryArrow from "../../../assets/img/popular-category-arrow.svg";
import Image from "next/image";

function PopularCategory() {
  const popularCategoryCards = [
    {
      imgSrc: categoryCardImg1,
      popularHeading: "Graphics & Design",
      popularParaNumbers: "357",
    },
    {
      imgSrc: categoryCardImg2,
      popularHeading: "Code & Programing",
      popularParaNumbers: "312",
    },
    {
      imgSrc: categoryCardImg3,
      popularHeading: "Digital Marketing",
      popularParaNumbers: "297",
    },
    {
      imgSrc: categoryCardImg4,
      popularHeading: "Video & Animation",
      popularParaNumbers: "247",
    },
    {
      imgSrc: categoryCardImg5,
      popularHeading: "Music & Audio",
      popularParaNumbers: "204",
    },
    {
      imgSrc: categoryCardImg6,
      popularHeading: "Account & Finance",
      popularParaNumbers: "167",
    },
    {
      imgSrc: categoryCardImg7,
      popularHeading: "Health & Care",
      popularParaNumbers: "125",
    },
    {
      imgSrc: categoryCardImg8,
      popularHeading: "Data & Science",
      popularParaNumbers: "57",
    },
  ];
  return (
    <>
      <div className="pb-5">
        <div className="container p-4">
          <div className="row">
            <div className="d-md-flex justify-content-between align-items-center flex-md-row flex-column text-center">
              <h1 className="py-2 py-md-5 mb-2 mb-md-0">Popular category</h1>
              <span className="mt-3 mt-md-0 ms-md-3 ms-md-0">
                <a
                  href=""
                  className="fs-6 fw-bold text-decoration-none border rounded p-3"
                >
                  View All <Image src={PopularcategoryArrow} className="ms-2" />
                </a>
              </span>
            </div>
            {popularCategoryCards.map((popularItems) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3 col-12 mb-sm-3 mb-md-0">
                  <div className="px-3 py-3 d-flex align-items-center justify-content-ce">
                    <div className="my-auto pe-3">
                      <Image src={popularItems.imgSrc} />
                    </div>
                    <div className="align-items-center">
                      <div>
                        <span className="size-heading">
                          {popularItems.popularHeading}
                        </span>
                      </div>
                      <span>{popularItems.popularPara} Open position</span>
                    </div>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCategory;

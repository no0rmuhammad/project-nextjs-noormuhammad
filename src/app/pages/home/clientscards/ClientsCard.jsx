import Image from "next/image";
import React from "react";
import "./ClientsCards.css";
import Star from "../../../assets/img/star-icon.svg";
import Star2 from "../../../assets/img/star-icon-2.svg";
import Star3 from "../../../assets/img/star-icon-3.svg";
import Star4 from "../../../assets/img/star-icon-4.svg";
import Star5 from "../../../assets/img/star-icon-5.svg";
import InvertedCommas from "../../../assets/img/client-inverted-commas.svg";
import Client1 from "../../../assets/img/client-img-1.svg";
import Client2 from "../../../assets/img/client-img-2.svg";
import Client3 from "../../../assets/img/client-img-3.svg";

function ClientsCard() {
  const ClientCardsData = [
    {
      imgCommas: InvertedCommas,
      imgClient1: Client1,
      imgSrc: Star,
      clientsPara:
        "“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.Suspendisse ut dui vulputate augue condimentum ornareMorbi vitae tristique ante”",
      clientsHeading: "Robert Fox",
      clientsJob: "UI/UX Designer",
    },
    {
      imgCommas: InvertedCommas,
      imgClient1: Client2,
      imgStar1: Star,
      imgStar2: Star2,
      imgStar3: Star3,
      imgStar4: Star4,
      imgStar5: Star5,
      clientsPara:
        "“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”",
      clientsHeading: "Bessie Cooper",
      clientsJob: "Creative Director",
    },
    {
      imgCommas: InvertedCommas,
      imgClient1: Client3,
      imgSrc: Star,
      clientsPara:
        "“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”",
      clientsHeading: "Jane Cooper",
      clientsJob: "Photographer",
    },
  ];
  return (
    <>
      <div className="clients-bg-clr">
        <div className="container py-5">
          <div className="row">
            <h1 className="text-center py-4">Clients Testimonial</h1>

            {ClientCardsData.map((ClientsDetails) => {
              return (
                <div className="col-md-4 col-sm-12 mb-4">
                  <div
                    className="bg-white p-3 rounded"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="d-flex gap-1">
                      <Image src={Star} alt="Star Icon" />
                      <Image src={Star2} alt="Star Icon" />
                      <Image src={Star3} alt="Star Icon" />
                      <Image src={Star4} alt="Star Icon" />
                      <Image src={Star5} alt="Star Icon" />
                    </div>
                    <p className="pt-3">{ClientsDetails.clientsPara}</p>

                    <div className="d-flex position-relative">
                      <Image
                        src={ClientsDetails.imgCommas}
                        className="position-absolute top-50 end-0 translate-middle-y"
                        alt="Inverted Commas Image"
                      />
                      <Image src={ClientsDetails.imgClient1} alt="Client Img" />
                      <div className="ps-3">
                        <h6>{ClientsDetails.clientsHeading}</h6>
                        <p>{ClientsDetails.clientsJob}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientsCard;

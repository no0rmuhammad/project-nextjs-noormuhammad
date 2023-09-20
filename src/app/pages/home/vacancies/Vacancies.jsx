import React from "react";
import "./Vacancies.css";

function Vacancies() {
  const vacanciesData = [
    {
      vacHeading: "Anesthesiologists",
      vacParaNumbers: "45,904",
    },
    {
      vacHeading: "Surgeons",
      vacParaNumbers: "50,364",
    },
    {
      vacHeading: "Obstetricians-Gynecologists",
      vacParaNumbers: "4,339",
    },
    {
      vacHeading: "Orthodontists",
      vacParaNumbers: "20,079",
    },
    {
      vacHeading: "Maxillofacial Surgeons",
      vacParaNumbers: "74,875",
    },
    {
      vacHeading: "Software Developer",
      vacParaNumbers: "43359",
    },
    {
      vacHeading: "Psychiatrists",
      vacParaNumbers: "18,599",
    },
    {
      vacHeading: "Data Scientist",
      vacParaNumbers: "28,200",
    },
    {
      vacHeading: "Financial Manager",
      vacParaNumbers: "61,391",
    },
    {
      vacHeading: "Management Analysis",
      vacParaNumbers: "93,046",
    },
    {
      vacHeading: "IT Manager",
      vacParaNumbers: "50,963",
    },
    {
      vacHeading: "Operations Research Analysis",
      vacParaNumbers: "16,627",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="row ">
          <h1 className="my-5 ">Most Popular Vacancies</h1>
          {vacanciesData.map((vacItems) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <h6 className="vacSize">{vacItems.vacHeading}</h6>
                <p className="vacancies-para-clr">
                  {vacItems.vacParaNumbers} Open Positions
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Vacancies;

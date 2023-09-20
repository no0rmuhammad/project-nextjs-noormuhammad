import NavbarSection from "@/app/components/Navbar/Navbar";
import FooterSection from "@/app/components/footer/FooterSection";
import React from "react";
import JobPageSearchBar from "./JobSearch/JobPageSearchBar";
import CardsJob from "./cardsJob/CardsJob";
import NavFindJob from "./navfindjob/NavFindJob";

function FindPage() {
  return (
    <div>
      <NavbarSection />
      {/* <NavFindJob /> */}
      <JobPageSearchBar />
      <CardsJob />
      <FooterSection />
    </div>
  );
}

export default FindPage;

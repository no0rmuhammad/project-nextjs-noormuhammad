import React from "react";
import HeroSection from "./herosection/HeroSection";
import HeroCards from "./herocard/HeroCards";
import Vacancies from "./vacancies/Vacancies";
import JobFeature from "./jobfeature/JobFeature";
import Companies from "./companies/Companies";
import ClientsCard from "./clientscards/ClientsCard";
import JobPilotWork from "./jobpilotwork/JobPilotWork";
import PopularCategory from "./ourpopularcategory/PopularCategory";
import CandidateEmployer from "./candidateEmployer/CandidateEmployer";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <HeroCards />
      <Vacancies />
      <JobPilotWork />
      <PopularCategory />
      <JobFeature />
      <Companies />
      <ClientsCard />
      <CandidateEmployer
        candidateTitle="Become a Candidate"
        candidateDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        cursus a dolor convallis efficitur."
        employerTitle="Become a Employers"
        employerDescription="Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu."
      />
    </div>
  );
}

export default HomePage;

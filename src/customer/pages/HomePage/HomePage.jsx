import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/mens_kurta";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
    <Navigation/>
      <div>
        
        <MainCarosel />

        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
          <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Dress"} />
          <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"} />
          <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

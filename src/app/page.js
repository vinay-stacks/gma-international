'use client'
import AboutUs from "@/components/home-component/AboutUs";
import CardFacility from "@/components/home-component/CardFacility";
import Gallery from "@/components/home-component/Gallery";
import HeroSlider from "@/components/home-component/HeroSlider";
import Team from "@/components/home-component/Team";
import WhyChooseGma from "@/components/home-component/WhyChooseGma";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSlider /> 
      <CardFacility />
      <AboutUs />
      <WhyChooseGma />
      <Gallery />
      <Team />
      
    </>
  );
}
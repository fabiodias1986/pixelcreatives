'use client'

import { Hero } from "@/components/Hero/Hero";
import { Intro } from "@/components/Intro/Intro";
import ServicesCards from "@/components/ServicesCards/ServicesCards";
import SocialSlide from "@/components/SocialSlide/SocialSlide";
import { Steps } from "@/components/Steps/Steps";
import Gallery from "@/components/Gallery/Gallery";
import Features from "@/components/Features/Features";
import { Cta } from "@/components/CTA/CTA";
import { Faq } from "@/components/Faq/Faq";
import { Contact } from "@/components/Contact/Contact";
import LoadingSpinner from "@/components/loading/Loading";
import { Suspense } from "react";

const Home = () => {


  return (
    
    <>      
        <Hero />

        <Intro />
  
        <ServicesCards />
   
        <SocialSlide />
 
        <Steps />
 
        <Gallery />

        <Features />

        <Cta />

        <Faq />
  
        <Contact />
   
    </>
    
  );
};

export default Home;
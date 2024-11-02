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
import Promo from "@/components/Promo/Promo"
const Home = () => {


  return (
    
    <>    
    <Promo />  
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
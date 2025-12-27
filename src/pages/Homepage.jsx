import { Feature } from "../components/HomePage/Feature/Feature";
import { Hero } from "../components/HomePage/Hero/Hero";
import { ServicesSection } from "../components/HomePage/Services";
import { Testimonial } from "../components/HomePage/Testimonial/Testimonial";
import { Footer } from "../layout/Footer";
import "./HomePage.css"

export function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <ServicesSection />
      <Testimonial />
      <Footer />
    </>
  );
}

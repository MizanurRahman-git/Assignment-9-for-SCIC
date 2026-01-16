import AboutUs from "@/components/pages/AboutUs";
import Categories from "@/components/pages/Categories";
import ChooseUs from "@/components/pages/ChooseUs";
import Discount from "@/components/pages/Discount";
import Dishes from "@/components/pages/Dishes";
import HeroSection from "@/components/pages/HeroSection";
import Testimonials from "@/components/pages/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Dishes/>
      <Discount/>
      <Categories/>
      <ChooseUs/>
      <Testimonials/>
      <AboutUs/>
    </div>
  );
}

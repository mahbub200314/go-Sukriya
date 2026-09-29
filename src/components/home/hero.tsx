import Sidebar from "../shared/sidebar";
import HeroSlider from "./hero-slider";

const Hero = () => (
  <div className="">
    <main className="flex">
      <section className="max-md:hidden">
        <Sidebar  />
      </section>
      <section className="w-full  pl-4">
        <HeroSlider />
      </section>
    </main>
  </div>
);

export default Hero;

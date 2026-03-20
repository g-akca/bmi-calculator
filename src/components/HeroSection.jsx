import HeroHeading from "./HeroHeading";
import HeroCalculator from "./HeroCalculator";

function HeroSection() {
  return (
    <section className="relative px-6 pt-8 tablet:px-10">
      <div className="absolute top-0 left-0 bg-linear-[to_right,#FFFFFF_0%,#D6E6FE_100%] h-160 w-full rounded-b-[35px] -z-10" />

      <div className="flex flex-col items-center gap-8 tablet:gap-10">
        <HeroHeading />

        <HeroCalculator />
      </div>
    </section>
  )
}

export default HeroSection;
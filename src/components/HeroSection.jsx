import HeroHeading from "./HeroHeading";
import HeroCalculator from "./HeroCalculator";

import logoImg from "/images/logo.svg";

function HeroSection() {
  return (
    <section className="relative px-6 pt-8 tablet:px-10 desktop:px-36 desktop:py-22">
      <div className="absolute top-0 left-0 bg-linear-[to_right,#FFFFFF_0%,#D6E6FE_100%] h-160 w-full rounded-b-[35px] -z-10 desktop:w-[70%] desktop:h-full" />

      <div className="flex flex-col items-center gap-8 tablet:gap-10 desktop:items-start">
        <img src={logoImg} alt="Logo image" className="w-10 aspect-square desktop:w-16" />

        <div className="flex flex-col items-center gap-8 tablet:gap-10 desktop:grid desktop:grid-cols-2 desktop:items-start desktop:gap-8">
          <HeroHeading />

          <HeroCalculator />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
import logoImg from "/images/logo.svg";

function HeroHeading() {
  return (
    <div className="flex flex-col items-center gap-8 tablet:gap-10">
      <img src={logoImg} alt="Logo image" className="w-10 aspect-square" />

      <div className="text-center">
        <h1 className="mb-6 font-semibold text-[48px] leading-[110%] tracking-[-4%] text-blue-900">Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our body mass index (BM) calculator. 
          While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to 
          evaluate your overall health and well-being.
        </p>
      </div>
    </div>
  )
}

export default HeroHeading;
import manImg from "/images/image-man-eating.webp";
import curveLeft from "/images/pattern-curved-line-left.svg";

function ResultsSection() {
  return (
    <section className="relative flex flex-col items-center gap-12 tablet:flex-row tablet:gap-18 tablet:-translate-x-24 tablet:min-w-210 desktop:translate-none desktop:px-36 desktop:pb-21.5 desktop:pt-13 desktop:self-center desktop:gap-33.75">
      <img src={curveLeft} alt="Line curved left" className="absolute top-0 right-44 hidden desktop:block" />

      <img src={manImg} alt="Image of a man eating" className="tablet:w-108.75 desktop:w-141" />

      <div className="px-6 flex flex-col gap-8 tablet:px-0 desktop:translate-y-18">
        <h2 className="text-[32px] leading-[110%] font-semibold tracking-[-4%] text-blue-900 desktop:text-[48px]">What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy 
          weight may lower your chances of experiencing health issues later on, such as obesity 
          and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, 
          incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, 
          ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  )
}

export default ResultsSection;
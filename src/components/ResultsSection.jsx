import manImg from "/images/image-man-eating.webp";

function ResultsSection() {
  return (
    <section className="flex flex-col gap-12">
      <img src={manImg} alt="Image of a man eating" />

      <div className="px-6 flex flex-col gap-8">
        <h2 className="text-[32px] leading-[110%] font-semibold tracking-[-4%] text-blue-900">What your BMI result means</h2>
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
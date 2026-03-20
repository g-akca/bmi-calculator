import genderIcon from "/images/icon-gender.svg";
import ageIcon from "/images/icon-age.svg";
import muscleIcon from "/images/icon-muscle.svg";
import pregnancyIcon from "/images/icon-pregnancy.svg";
import raceIcon from "/images/icon-race.svg";

import LimitsItem from "./LimitsItem";

function LimitsSection() {
  const limits = [
    {
      id: 1,
      icon: genderIcon,
      name: "Gender",
      description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
      id: 2,
      icon: ageIcon,
      name: "Age",
      description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
      id: 3,
      icon: muscleIcon,
      name: "Muscle",
      description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
      id: 4,
      icon: pregnancyIcon,
      name: "Pregnancy",
      description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
      id: 5,
      icon: raceIcon,
      name: "Race",
      description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
    },
  ]

  return (
    <section className="flex flex-col gap-14 px-5">
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-[32px] leading-[110%] font-semibold tracking-[-4%] text-blue-900">Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not suited 
          for every person. Specific groups should carefully consider their BMI outcomes, and 
          in certain cases, the measurement may not be beneficial to use.
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        {limits.map(item => (
          <LimitsItem key={item.id} limit={item} />
        ))}
      </div>
    </section>
  )
}

export default LimitsSection;
import genderIcon from "/images/icon-gender.svg";
import ageIcon from "/images/icon-age.svg";
import muscleIcon from "/images/icon-muscle.svg";
import pregnancyIcon from "/images/icon-pregnancy.svg";
import raceIcon from "/images/icon-race.svg";
import curveRight from "/images/pattern-curved-line-right.svg";

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
    <section className="relative flex flex-col gap-14 px-5 tablet:px-9.75 desktop:px-36 desktop:py-26 desktop:self-center desktop:grid desktop:grid-cols-12 desktop:gap-8 desktop:max-w-360">
      <div className="flex flex-col gap-8 text-center desktop:text-start desktop:col-start-1 desktop:w-138">
        <h2 className="text-[32px] leading-[110%] font-semibold tracking-[-4%] text-blue-900 desktop:text-[48px]">Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not suited 
          for every person. Specific groups should carefully consider their BMI outcomes, and 
          in certain cases, the measurement may not be beneficial to use.
        </p>
      </div>

      <img src={curveRight} alt="Line curved right" className="absolute left-75 top-90 hidden desktop:block" />

      <div className="flex flex-col gap-4 items-center tablet:flex-row tablet:justify-center tablet:flex-wrap tablet:items-stretch desktop:contents">
        {limits.map((item, index) => {
          const positions = [
            // Gender
            "desktop:col-start-8 desktop:row-start-1",

            // Age
            "desktop:col-start-5 desktop:row-start-2",

            // Muscle
            "desktop:col-start-9 desktop:row-start-2",

            // Pregnancy
            "desktop:col-start-3 desktop:row-start-3",

            // Race
            "desktop:col-start-7 desktop:row-start-3",
          ];

          return (
            <LimitsItem
              key={item.id}
              limit={item}
              className={`tablet:w-83.75 desktop:w-91.25 ${positions[index]}`}
            />
          );
        })}
      </div>
    </section>
  )
}

export default LimitsSection;
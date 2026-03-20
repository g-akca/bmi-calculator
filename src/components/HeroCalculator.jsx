import { useState } from "react";

function HeroCalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("metric");

  function calculateBMI() {
    if (!height || !weight) return null;

    if (unit === "metric") {
      const heightInMeters = height / 100;
      return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    }
    else {
      return ((weight / (height * height)) * 703).toFixed(1);
    }
  };

  function getBMICategory(bmi) {
    if (!bmi) return null;

    if (bmi < 18.5) return "underweight";
    if (bmi < 25) return "a healthy weight";
    if (bmi < 30) return "overweight";
    return "obese";
  };

  function getIdealWeightRange() {
    if (!height) return null;

    if (unit === "metric") {
      const h = height / 100;

      return {
        min: (18.5 * h * h).toFixed(1),
        max: (24.9 * h * h).toFixed(1),
      };
    }
    else {
      return {
        min: ((18.5 * height * height) / 703).toFixed(1),
        max: ((24.9 * height * height) / 703).toFixed(1),
      };
    }
  };

  const bmi = calculateBMI();
  const category = getBMICategory(bmi);
  const range = getIdealWeightRange();

  return (
    <form className="bg-white w-full p-6 rounded-2xl flex flex-col gap-6 shadow-[16px_32px_56px_rgba(143,174,207,0.25)] tablet:p-8 tablet:gap-8">
      <h2 className="text-blue-900 font-semibold text-[24px] leading-7.25 tracking-[-4%]">Enter your details below</h2>

      <fieldset className="grid grid-cols-2 gap-6">
        <label className="flex gap-4 items-center">
          <input 
            type="radio" name="unit" value="metric" required defaultChecked
            checked={unit === "metric"}
            onChange={() => setUnit("metric")}
            className="
              appearance-none w-7.75 h-7.75 rounded-full border border-grey-500 flex items-center justify-center
              cursor-pointer hover:border-blue-500 checked:bg-blue-100 checked:border-0 checked:before:content[''] 
              checked:before:w-3.75 checked:before:h-3.75 checked:before:bg-blue-500 checked:before:rounded-full
            " 
          />
          <span className="font-semibold text-blue-900">Metric</span> 
        </label>

        <label className="flex gap-4 items-center">
          <input 
            type="radio" name="unit" value="imperial" required
            checked={unit === "imperial"}
            onChange={() => setUnit("imperial")}
            className="
              appearance-none w-7.75 h-7.75 rounded-full border border-grey-500 flex items-center justify-center
              cursor-pointer hover:border-blue-500 checked:bg-blue-100 checked:border-0 checked:before:content[''] 
              checked:before:w-3.75 checked:before:h-3.75 checked:before:bg-blue-500 checked:before:rounded-full
            " 
          />
          <span className="font-semibold text-blue-900">Imperial</span> 
        </label>
      </fieldset>

      <div className="flex flex-col gap-4 tablet:grid tablet:grid-cols-2 tablet:gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="height" className="text-[14px] leading-base">Height</label>
          <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
            <input type="number" id="height" placeholder="0" min="0" value={height} onChange={(e) => setHeight(e.target.value)} className="grow min-w-0 text-blue-900 placeholder:text-grey-500 focus:outline-none" />
            <span className="text-blue-500">cm</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="weight" className="text-[14px] leading-base">Weight</label>
          <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
            <input type="number" id="weight" placeholder="0" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} className="grow min-w-0 text-blue-900 placeholder:text-grey-500 focus:outline-none" />
            <span className="text-blue-500">kg</span>
          </div>
        </div>
      </div>

      <section className="p-8 bg-blue-500 rounded-2xl text-white flex flex-col gap-6 tablet:gap-4 tablet:rounded-l-2xl tablet:rounded-r-[80px]">
        {!bmi || !range || !category ? (
          <>
            <h3 className="text-[24px] leading-7.25 font-semibold tracking-[-4%]">Welcome!</h3>
            <p className="text-[14px] leading-base">Enter your height and weight and you’ll see your BMI result here</p>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Your BMI is...</p>
              <p className="font-semibold text-[48px] leading-[110%] tracking-[-4%]">{bmi}</p>
            </div>

            <p className="text-[14px] leading-base">
              Your BMI suggests you’re {category}. Your ideal weight is between{" "}
              <strong>{range.min}kgs - {range.max}kgs</strong>.
            </p>
          </>
        )}
      </section>
    </form>
  )
}

export default HeroCalculator;
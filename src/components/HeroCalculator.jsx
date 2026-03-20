import { useState } from "react";

function HeroCalculator() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const [heightFt, setHeightFt] = useState();
  const [heightIn, setHeightIn] = useState();
  const [weightSt, setWeightSt] = useState();
  const [weightLbs, setWeightLbs] = useState();

  const [unit, setUnit] = useState("metric");

  function calculateBMI() {
    const heightInMeters = getHeightInMeters();
    if (!heightInMeters) return null;

    let weightInKg;

    if (unit === "metric") {
      if (!weight || weight <= 0) return null;
      weightInKg = weight;
    }
    else {
      const totalLbs = (weightSt || 0) * 14 + (weightLbs || 0);
      if (totalLbs === 0) return null;

      weightInKg = totalLbs * 0.453592;
    }

    return (weightInKg / (heightInMeters ** 2)).toFixed(1);
  }

  function getBMICategory(bmi) {
    if (!bmi) return null;

    if (bmi < 18.5) return "underweight";
    if (bmi < 25) return "a healthy weight";
    if (bmi < 30) return "overweight";
    return "obese";
  };

  function getHeightInMeters() {
    if (unit === "metric") {
      if (!height || height <= 0) return null;
      return height / 100;
    }
    else {
      const totalInches = (heightFt || 0) * 12 + (heightIn || 0);
      if (totalInches === 0) return null;

      return totalInches * 0.0254;
    }
  }

  function getIdealWeightRange() {
    const heightInMeters = getHeightInMeters();

    if (!heightInMeters) return null;

    return {
      min: (18.5 * heightInMeters ** 2).toFixed(1),
      max: (24.9 * heightInMeters ** 2).toFixed(1),
    };
  }

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

      <div className={`flex flex-col gap-4 tablet:gap-6 ${unit === "metric" ? "tablet:grid tablet:grid-cols-2" : ""}`}>
        <div className="flex flex-col gap-2">
          <label htmlFor="height" className="text-[14px] leading-base">Height</label>

          {unit === "metric" ? (
            <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
              <input type="number" id="height" placeholder="0" min="0" onChange={(e) => setHeight(Number(e.target.value))} className="w-full text-blue-900 placeholder:text-grey-500 focus:outline-none" />
              <span className="text-blue-500">cm</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 tablet:gap-6">
              <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
                <input type="number" id="height-ft" placeholder="0" min="0" onChange={(e) => setHeightFt(Number(e.target.value))} className="w-full text-blue-900 placeholder:text-grey-500 focus:outline-none" />
                <span className="text-blue-500">ft</span>
              </div>

              <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
                <input type="number" id="height-in" placeholder="0" min="0" onChange={(e) => setHeightIn(Number(e.target.value))} className="w-full text-blue-900 placeholder:text-grey-500 focus:outline-none" />
                <span className="text-blue-500">in</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="weight" className="text-[14px] leading-base">Weight</label>

          {unit === "metric" ? (
            <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
              <input type="number" id="weight" placeholder="0" min="0" onChange={(e) => setWeight(Number(e.target.value))} className="w-full text-blue-900 placeholder:text-grey-500 focus:outline-none" />
              <span className="text-blue-500">kg</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 tablet:gap-6">
              <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
                <input type="number" id="weight-st" placeholder="0" min="0" onChange={(e) => setWeightSt(Number(e.target.value))} className="w-full text-blue-900 placeholder:text-grey-500 focus:outline-none" />
                <span className="text-blue-500">st</span>
              </div>

              <div className="flex gap-6 p-6 border border-grey-500 hover:border-blue-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%] desktop:py-4">
                <input type="number" id="weight-lbs" placeholder="0" min="0" onChange={(e) => setWeightLbs(Number(e.target.value))} className="w-full text-blue-900 placeholder:text-grey-500 focus:outline-none" />
                <span className="text-blue-500">lbs</span>
              </div>
            </div>
          )}
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
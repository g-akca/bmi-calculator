function HeroCalculator() {
  return (
    <form className="bg-white w-full p-6 rounded-2xl flex flex-col gap-6">
      <h2 className="text-blue-900 font-semibold text-[24px] leading-7.25 tracking-[-4%]">Enter your details below</h2>

      <fieldset className="grid grid-cols-2 gap-6">
        <label className="flex gap-4 items-center">
          <input 
            type="radio" name="unit" value="metric" required checked 
            className="
              appearance-none w-7.75 h-7.75 rounded-full border border-grey-500 flex items-center justify-center
              checked:bg-blue-100 checked:border-0 checked:before:content[''] checked:before:w-3.75 checked:before:h-3.75 
              checked:before:bg-blue-500 checked:before:rounded-full
            " 
          />
          <span className="font-semibold text-blue-900">Metric</span> 
        </label>

        <label className="flex gap-4 items-center">
          <input 
            type="radio" name="unit" value="imperial" required checked 
            className="
              appearance-none w-7.75 h-7.75 rounded-full border border-grey-500 flex items-center justify-center
              checked:bg-blue-100 checked:border-0 checked:before:content[''] checked:before:w-3.75 checked:before:h-3.75 
              checked:before:bg-blue-500 checked:before:rounded-full
            " 
          />
          <span className="font-semibold text-blue-900">Imperial</span> 
        </label>
      </fieldset>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="height" className="text-[14px] leading-base">Height</label>
          <div className="flex gap-6 p-6 border border-grey-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%]">
            <input type="number" id="height" placeholder="0" min="0" className="grow min-w-0 text-blue-900 placeholder:text-grey-500" />
            <span className="text-blue-500">cm</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="weight" className="text-[14px] leading-base">Weight</label>
          <div className="flex gap-6 p-6 border border-grey-500 rounded-xl text-[24px] leading-7.25 font-semibold tracking-[-4%]">
            <input type="number" id="weight" placeholder="0" min="0" className="grow min-w-0 text-blue-900 placeholder:text-grey-500" />
            <span className="text-blue-500">kg</span>
          </div>
        </div>
      </div>

      <section className="p-8 bg-blue-500 rounded-2xl text-white flex flex-col gap-6">
        <h3 className="text-[24px] leading-7.25 font-semibold tracking-[-4%]">Welcome!</h3>
        <p className="text-[14px] leading-base">Enter your height and weight and you’ll see your BMI result here</p>
      </section>
    </form>
  )
}

export default HeroCalculator;
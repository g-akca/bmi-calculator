function HeroCalculator() {
  return (
    <form className="bg-white w-full p-6 rounded-2xl flex flex-col gap-6">
      <h2>Enter your details below</h2>

      <fieldset className="grid grid-cols-2 gap-6">
        <label>
          <input type="radio" name="unit" id="metric" value="metric" required />
          <span>Metric</span> 
        </label>

        <label>
          <input type="radio" name="unit" id="imperial" value="imperial" required />
          <span>Imperial</span> 
        </label>
      </fieldset>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="height">Height</label>
          <div>
            <input type="number" id="height" placeholder="0" />
            <span>cm</span>
          </div>
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <div>
            <input type="number" id="weight" placeholder="0" />
            <span>kg</span>
          </div>
        </div>
      </div>

      <section className="p-8 bg-blue-500 rounded-2xl text-white flex flex-col gap-6">
        <h3>Welcome!</h3>
        <p>Enter your height and weight and you’ll see your BMI result here</p>
      </section>
    </form>
  )
}

export default HeroCalculator;
function TipsItem({ tip }) {
  return (
    <section className="flex flex-col gap-8">
      <img src={tip.icon} alt={tip.name} className="w-16 aspect-square" />

      <div className="flex flex-col gap-6">
        <h3 className="text-[24px] leading-7.25 font-semibold tracking-[-4%] text-blue-900">{tip.name}</h3>
        <p>{tip.description}</p>
      </div>
    </section>
  )
}

export default TipsItem;
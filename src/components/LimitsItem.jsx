function LimitsItem({ limit, className }) {
  return (
    <section className={`relative ${className}`}>
      <div className="absolute inset-0 shadow-[16px_32px_56px_rgba(143,174,207,0.25)] rounded-2xl" />
      
      <div className="relative h-full p-6 bg-white rounded-2xl flex flex-col gap-4 tablet:p-8">
        <div className="flex gap-4 text-[20px] font-semibold leading-base tracking-[-4%] text-blue-900">
          <img src={limit.icon} alt={`${limit.name} icon`} className="w-8 aspect-square" />
          <h3>{limit.name}</h3>
        </div>

        <p>{limit.description}</p>
      </div>
    </section>
  )
}

export default LimitsItem;
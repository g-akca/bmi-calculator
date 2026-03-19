import eatingIcon from "/images/icon-eating.svg";
import exerciseIcon from "/images/icon-exercise.svg";
import sleepIcon from "/images/icon-sleep.svg";

import TipsItem from "./TipsItem";

function TipsSection() {
  const tips = [
    {
      icon: eatingIcon,
      name: "Healthy eating",
      description: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
    }
  ]

  return (
    <section className="px-6 py-12 flex flex-col gap-10">
      {tips.map(item => (
        <TipsItem tip={item} />
      ))}
    </section>
  )
}

export default TipsSection;
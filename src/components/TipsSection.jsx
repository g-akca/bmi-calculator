import eatingIcon from "/images/icon-eating.svg";
import exerciseIcon from "/images/icon-exercise.svg";
import sleepIcon from "/images/icon-sleep.svg";

import TipsItem from "./TipsItem";

function TipsSection() {
  const tips = [
    {
      id: 1,
      icon: eatingIcon,
      name: "Healthy eating",
      description: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
    },
    {
      id: 2,
      icon: exerciseIcon,
      name: "Regular exercise",
      description: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
    },
    {
      id: 3,
      icon: sleepIcon,
      name: "Adequate sleep",
      description: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
    },
  ]

  return (
    <section className="px-6 py-12 flex flex-col gap-10">
      {tips.map(item => (
        <TipsItem key={item.id} tip={item} />
      ))}
    </section>
  )
}

export default TipsSection;
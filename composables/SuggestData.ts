import { Flame, ScrollText, Code, Brain } from "lucide-vue-next";

export const useSuggestData = () => {
  const suggestions = reactive([
    {
      title: "A Story Line",
      prompt:
        "Create a captivating story by developing characters, settings, and plots. Let your imagination lead the way.",
      icon: ScrollText,
      color: "bg-blue-100 text-blue-500", // Changed color to blue
    },
    {
      title: "Java Programming",
      prompt:
        "Explore the core concepts of Object-Oriented Programming in Java. Learn about classes, objects, inheritance, and polymorphism.",
      icon: Code,
      color: "bg-green-100 text-green-500", // Changed color to green
    },
    {
      title: "BrainStorm Juice Idea",
      prompt:
        "Generate creative ideas for a new juice product. Think about unique flavors, ingredients, and health benefits.",
      icon: Brain,
      color: "bg-purple-100 text-purple-500", // Changed color to purple
    },
    {
      title: "Benefit Of Exercise",
      prompt:
        "Discover the various health benefits of drinking fresh juice. Learn how it can improve your digestion, boost immunity, and hydrate your body.",
      icon: Flame,
      color: "bg-orange-100 text-orange-500", // Changed color to yellow
    },
  ]);


  return {
    suggestions,
  };
};

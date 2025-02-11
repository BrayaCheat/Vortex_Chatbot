import { Gamepad } from "lucide-vue-next";

export const useSuggestData = () => {
  const suggestions = reactive([
    {
      title: "Chess Champ",
      prompt:
        "Play chess with a language model. Make your first move using chess notation to start your match.",
      icon: Gamepad,
      color: "bg-amber-100 text-amber-400",
    },
    {
      title: "Chess Champ",
      prompt:
        "Play chess with a language model. Make your first move using chess notation to start your match.",
      icon: Gamepad,
      color: "bg-amber-100 text-amber-400",
    },
    {
      title: "Chess Champ",
      prompt:
        "Play chess with a language model. Make your first move using chess notation to start your match.",
      icon: Gamepad,
      color: "bg-amber-100 text-amber-400",
    },
    {
      title: "Chess Champ",
      prompt:
        "Play chess with a language model. Make your first move using chess notation to start your match.",
      icon: Gamepad,
      color: "bg-amber-100 text-amber-400",
    },
  ]);

  return {
    suggestions,
  };
};

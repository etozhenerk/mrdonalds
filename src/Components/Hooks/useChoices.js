import { useState } from "react";

export const useChoices = () => {
  const [choice, setChoice] = useState();

  const changeChoice = (e) => {
    setChoice(e.target.value);
  };

  return { choice, changeChoice };
};

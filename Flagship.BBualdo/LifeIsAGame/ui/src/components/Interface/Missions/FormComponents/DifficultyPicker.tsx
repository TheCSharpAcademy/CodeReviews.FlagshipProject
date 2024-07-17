"use client";

import { useEffect, useState } from "react";
import DifficultyInfo from "./DifficultyInfo";
import DifficultySlider from "./DifficultySlider";
import { UseFormReturn } from "react-hook-form";
import { difficultyLevels } from "@/src/data/difficultyLevels";
import { MissionSchema } from "@/src/utils/types";

const DifficultyPicker = ({ form }: { form: UseFormReturn<MissionSchema> }) => {
  const [difficulty, setDifficulty] = useState<number[]>([50]);
  const [difficultyLevel, setDifficultyLevel] = useState(2);

  const [points] = difficulty;

  const xp = Math.floor(
    (points + 25) * difficultyLevels[difficultyLevel].xpMultiplier,
  );

  useEffect(() => {
    if (points >= 95) {
      setDifficultyLevel(4);
    } else if (points >= 75) {
      setDifficultyLevel(3);
    } else if (points >= 50) {
      setDifficultyLevel(2);
    } else if (points >= 25) {
      setDifficultyLevel(1);
    } else {
      setDifficultyLevel(0);
    }
  }, [points]);

  return (
    <>
      <DifficultySlider
        form={form}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        difficultyLevel={difficultyLevel}
      />
      <DifficultyInfo form={form} difficultyLevel={difficultyLevel} xp={xp} />
    </>
  );
};

export default DifficultyPicker;

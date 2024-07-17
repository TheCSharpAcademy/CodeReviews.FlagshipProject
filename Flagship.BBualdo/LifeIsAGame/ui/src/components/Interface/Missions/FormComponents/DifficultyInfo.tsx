"use client";

import { difficultyLevels } from "@/src/data/difficultyLevels";
import { FormField } from "@/src/shadcn/ui/form";
import { MissionSchema } from "@/src/utils/types";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

const DifficultyInfo = ({
  form,
  difficultyLevel,
  xp,
}: {
  form: UseFormReturn<MissionSchema>;
  difficultyLevel: number;
  xp: number;
}) => {
  const { setValue } = form;

  useEffect(() => {
    setValue("xp", xp);
  }, [setValue, xp]);

  return (
    <FormField
      control={form.control}
      name="xp"
      render={({ field }) => {
        return (
          <div className="flex items-stretch gap-1 xs:max-lg:flex-col">
            <div className="flex flex-1 flex-col gap-4 border-2 border-cp-cyan bg-black xs:p-4 lg:p-8">
              <div className="text-center font-bold">
                <h3 className="xs:text-md uppercase text-cp-red lg:text-xl">
                  {difficultyLevels[difficultyLevel].title}
                </h3>
                <p className="text-cp-red xs:text-xs lg:text-sm">
                  XP Multiplier:{" "}
                  {difficultyLevels[difficultyLevel].xpMultiplier}x
                </p>
              </div>

              <p className="lg:text-md text-center text-cp-cyan xs:text-sm">
                {difficultyLevels[difficultyLevel].description}
              </p>
              <div className="lg:text-md flex flex-col gap-2 xs:text-sm">
                <p className="text-cp-yellow">Examples:</p>
                <ul>
                  {difficultyLevels[difficultyLevel].eg.map((example) => (
                    <li className="text-cp-yellow" key={example.id}>
                      - {example.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-1 gap-1 xs:flex-col-reverse lg:flex-col">
              <div className="border-2 border-cp-cyan bg-black xs:p-2 lg:p-8">
                <p className="text-center text-cp-red xs:text-xs lg:text-lg">
                  Adjust difficulty to your preferences. If something is
                  slightly harder than one level, but not that hard as the next
                  one, keep the slider at the top range of that level rather
                  than going straight to the next. Just be fair with yourself!
                </p>
              </div>
              <div className="border-2 border-cp-cyan bg-black xs:p-2 lg:p-8">
                <h3 className="font-bold uppercase text-cp-yellow xs:text-lg lg:text-xl">
                  Reward:
                </h3>
                <div className="flex justify-center text-cp-cyan">
                  <p className="xs:text-3xl lg:text-6xl">
                    {xp}
                    <span className="text-xl">XP</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default DifficultyInfo;

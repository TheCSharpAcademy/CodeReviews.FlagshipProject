"use client";

import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch } from "@/src/redux/store";
import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import IMission from "@/src/models/IMission";
import DifficultyLevel from "@/src/enums/DifficultyLevel";

const Mission = ({
  mission,
  selectedMission,
}: {
  mission: IMission;
  selectedMission: IMission;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const completedSubtasks = mission.subtasks.filter(
    (subtask) => subtask.isCompleted,
  );
  const progress = Math.ceil(
    (completedSubtasks.length / mission.subtasks.length) * 100,
  );

  const missionCompleted = mission.isCompleted;

  return (
    <button
      onClick={() => {
        dispatch(setSelectedMission(mission));
      }}
      disabled={mission === selectedMission}
      className={clsx(
        "mission-button relative bg-black/50 transition-all duration-200 enabled:hover:bg-cp-red/50",
        {
          "border-cp-cyan": mission === selectedMission,
          "border-cp-red": mission !== selectedMission,
        },
      )}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {missionCompleted && (
            <FaRegCheckCircle className="text-3xl text-cp-red" />
          )}
          <div>
            <h2
              className={clsx("xs:text-md font-bold uppercase lg:text-lg", {
                "text-cp-cyan": !missionCompleted,
                "text-cp-green": missionCompleted,
              })}
            >
              {mission.title}
            </h2>
            <p className="absolute -bottom-4 -right-3 text-[10px] text-cp-red/50">
              {mission.id}
            </p>
            <h3 className="lg:text-md xs:text-sm">
              Difficulty:{" "}
              <span className="lg:text-md font-bold uppercase text-cp-red xs:text-sm">
                {DifficultyLevel[mission.difficulty]}
              </span>
            </h3>
          </div>
        </div>

        <p
          className={clsx("xs:text-lg lg:text-xl", {
            "text-cp-cyan": !missionCompleted,
            "text-cp-green": missionCompleted,
          })}
        >
          {mission.xpReward} XP
        </p>
      </div>
      <div
        className="absolute left-0 top-0 h-full bg-cp-cyan/20 transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
    </button>
  );
};

export default Mission;

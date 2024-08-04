"use client";

import { AppDispatch } from "@/src/redux/store";
import { Checkbox } from "@/src/shadcn/ui/checkbox";
import { Label } from "@/src/shadcn/ui/label";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";
import EditMissionButton from "../EditMissionButton";
import MissionButtons from "./MissionButtons";
import IMission from "@/src/models/IMission";
import { format } from "date-fns";
import MissionsService from "@/src/services/MissionsService";
import { toast } from "sonner";
import { toggleSubtask } from "@/src/redux/slices/missionsSlice";

const MissionDetails = ({ selectedMission }: { selectedMission: IMission }) => {
  const { id, title, description, subtasks, createdAt, completedAt } =
    selectedMission;
  const dispatch = useDispatch<AppDispatch>();

  const missionCompleted = selectedMission.isCompleted;

  async function handleSubtaskChange(subtaskId: string) {
    if (!missionCompleted) {
      await MissionsService.toggleSubtask(subtaskId)
        .then(() => {
          dispatch(toggleSubtask({ missionId: id, subtaskId: subtaskId }));
        })
        .catch(() => {
          toast.error("Toggling subtask failed!");
        });
    }
  }

  return (
    <div className="flex h-full w-full flex-col xs:max-lg:mt-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold uppercase text-cp-red shadow-black text-shadow-xl xs:text-xl lg:text-2xl">
          {title}
        </h2>
        {!missionCompleted && <EditMissionButton />}
      </div>
      <div className="flex flex-col xs:gap-6 lg:gap-10">
        <div className="flex flex-col">
          <p className="text-sm text-light-silver">
            Created:{" "}
            <span className="font-bold uppercase text-cp-cyan">
              {format(new Date(createdAt), "dd-MM-yyyy")}
            </span>
          </p>
          {completedAt && (
            <p className="text-sm text-light-silver">
              Completed:{" "}
              <span className="font-bold uppercase text-cp-green">
                {format(new Date(completedAt), "dd-MM-yyyy")}
              </span>
            </p>
          )}
        </div>

        <ul className="flex flex-col gap-2">
          {subtasks.map((subtask) => (
            <li
              key={subtask.id}
              className="flex items-center gap-4 border border-cp-red/30 bg-cp-red/10 p-2"
            >
              <Checkbox
                id={subtask.id}
                checked={subtask.isCompleted}
                onCheckedChange={() => handleSubtaskChange(subtask.id)}
                className={
                  missionCompleted ? "cursor-default" : "cursor-pointer"
                }
              />
              <Label
                htmlFor={subtask.id}
                className={clsx("uppercase xs:text-sm lg:text-base", {
                  "text-cp-cyan/50 line-through": subtask.isCompleted,
                  "text-cp-cyan": !subtask.isCompleted,
                  "cursor-pointer": !missionCompleted,
                  "cursor-default": missionCompleted,
                })}
              >
                {subtask.title}
              </Label>
            </li>
          ))}
        </ul>
        {!missionCompleted ? (
          <ProgressBar selectedMission={selectedMission} />
        ) : (
          <p className="text-center uppercase text-cp-green shadow-cp-green text-shadow-xl xs:text-xl lg:text-3xl">
            Mission Completed
          </p>
        )}
        <div className="max-h-[30vh] overflow-y-auto border-y border-cp-red p-4">
          <p className="lg:text-md text-cp-cyan xs:text-sm xs:max-lg:text-center">
            {description || "This mission has no description."}
          </p>
        </div>
        {!missionCompleted && (
          <MissionButtons selectedMission={selectedMission} />
        )}
      </div>
    </div>
  );
};

export default MissionDetails;

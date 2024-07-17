"use client";

import {
  completeMission,
  deleteMission,
  unlockAchievement,
} from "@/src/redux/slices/userSlice";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import { useDispatch } from "react-redux";
import Modal from "../../shared/Modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { giveXP } from "@/src/redux/slices/userSlice";
import { toast } from "sonner";

const MissionButtons = ({
  selectedMission,
}: {
  selectedMission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const achievements = useAppSelector(
    (state) => state.userReducer.achievements,
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const incompletedSubtasks = selectedMission.subtasks.filter(
    (subtask) => subtask.isCompleted === false,
  );

  const giveUpMission = () => {
    if (
      selectedMission.subtasks.some((subtask) => subtask.isCompleted === true)
    ) {
      const giveUpWithSubtaskCompleted = achievements.find(
        (achievement) =>
          achievement.requirements ===
          "Give up a mission with at least one subtask completed.",
      );
      if (
        giveUpWithSubtaskCompleted &&
        !giveUpWithSubtaskCompleted.isUnlocked
      ) {
        dispatch(unlockAchievement(giveUpWithSubtaskCompleted));
        toast(giveUpWithSubtaskCompleted.title, {
          description: giveUpWithSubtaskCompleted.requirements,
        });
        dispatch(giveXP({ xp: giveUpWithSubtaskCompleted.xp }));
      }
    }
    dispatch(deleteMission(selectedMission));
    dispatch(setSelectedMission(null));
    toast("Mission removed!");
  };

  const missionComplete = () => {
    dispatch(completeMission(selectedMission));
    dispatch(setSelectedMission(null));
    dispatch(giveXP(selectedMission));
    toast("Mission completed!", {
      description: `You received ${selectedMission.xp}XP.`,
    });
  };

  return (
    <>
      <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-20">
        <button onClick={openModal} className="btn btn-red hover:bg-cp-red/50">
          Give up
        </button>
        <button
          onClick={missionComplete}
          disabled={incompletedSubtasks.length !== 0}
          className="btn btn-green enabled:hover:bg-cp-green/50"
        >
          Complete Mission
        </button>
      </div>
      {isOpen && (
        <Modal className={["modal-cyan"]} isOpen={isOpen}>
          <div className="flex w-full items-center justify-between border-b border-cp-cyan">
            <h2 className="text-xl text-cp-cyan">Give Up Mission</h2>
            <IoClose
              onClick={closeModal}
              className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center xs:p-2 lg:p-10">
              <h2 className="text-center font-bold text-cp-red xs:text-xl lg:text-3xl">
                Are you sure you want to give up this mission?
              </h2>
              <p className="text-center text-cp-red xs:text-sm lg:text-lg">
                Progress will be lost and it can't be undone!
              </p>
            </div>
            <div className="flex items-center xs:gap-2 xs:max-lg:flex-col lg:gap-10">
              <button
                onClick={giveUpMission}
                className="btn btn-red hover:bg-cp-red/50"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="btn btn-cyan hover:bg-cp-cyan/50"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MissionButtons;

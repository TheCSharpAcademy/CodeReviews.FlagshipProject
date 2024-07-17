"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Mission from "./Mission";
import CreateMissionButton from "./CreateMissionButton";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import MissionDetails from "./DetailsComponents/MissionDetails";
import { useDispatch } from "react-redux";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import MissionsEmpty from "../shared/MissionsEmpty";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuAlertCircle } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import Modal from "../shared/Modal";
import { IoClose } from "react-icons/io5";
import useAchievement from "@/src/utils/useAchievement";

const MissionsContainer = () => {
  useAchievement();

  const [missionsCategory, setMissionsCategory] = useState<
    "active" | "completed"
  >("active");

  const missions = useAppSelector((state) => state.userReducer.missions);
  const selectedMission = useAppSelector(
    (state) => state.selectedMissionReducer.selectedMission,
  );

  const dispatch = useDispatch<AppDispatch>();

  const filteredMissions = missions
    .filter((mission) => mission.status === missionsCategory)
    .map((mission) => (
      <Mission
        mission={mission}
        key={mission.id}
        selectedMission={selectedMission!}
      />
    ));

  const activeMissions = missions.filter(
    (mission) => mission.status === "active",
  );
  const completedMissions = missions.filter(
    (mission) => mission.status === "completed",
  );

  // If selected mission has been updated somehow (checking subtasks, editing) it will set that mission with changes as selected
  useEffect(() => {
    if (selectedMission) {
      const updatedMission = missions.find(
        (mission) => mission.id === selectedMission.id,
      );

      if (updatedMission) {
        dispatch(setSelectedMission(updatedMission));
      }
    }
  }, [missions, selectedMission]);

  return (
    <>
      <motion.nav
        variants={fadeIn("", 0.5, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 flex w-full items-stretch overflow-hidden"
      >
        <button
          onClick={() => {
            setMissionsCategory("active");
            dispatch(setSelectedMission(null));
          }}
          className={clsx(
            "flex items-center gap-2 border-x-2 border-t-2 border-cp-red px-6 py-2 text-3xl text-cp-cyan transition-all duration-200 hover:bg-cp-cyan/30",
            { "bg-cp-cyan/30": missionsCategory === "active" },
          )}
        >
          <LuAlertCircle />
          {activeMissions.length}
        </button>
        <button
          onClick={() => {
            setMissionsCategory("completed");
            dispatch(setSelectedMission(null));
          }}
          className={clsx(
            "flex items-center gap-2 border-x-2 border-t-2 border-x-cp-red border-t-cp-red px-6 py-2 text-3xl text-cp-red transition-all duration-200 hover:bg-cp-cyan/30",
            { "bg-cp-cyan/30": missionsCategory === "completed" },
          )}
        >
          <FaRegCheckCircle />
          {completedMissions.length}
        </button>
        <CreateMissionButton
          className={clsx(
            "border-x-2 border-b border-t-2 border-cp-yellow px-6 py-2 text-3xl text-cp-yellow transition-all duration-200 hover:border-cp-cyan hover:text-cp-cyan xs:max-lg:hidden",
            {
              "translate-y-full": missionsCategory === "completed",
              "translate-y-0": missionsCategory === "active",
            },
          )}
        >
          <FaPlus />
        </CreateMissionButton>
      </motion.nav>
      <motion.section
        variants={fadeIn("", 0.5, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gradient-cp-red-3 relative flex w-full border-2 border-cp-red xs:h-[400px] xs:p-2 xs:max-lg:mb-[130px] lg:h-[800px] lg:p-10"
      >
        <div className="flex max-h-full flex-col gap-1 overflow-y-auto xs:w-full lg:w-[500px] lg:pr-4">
          {filteredMissions.length > 0 ? (
            filteredMissions
          ) : (
            <MissionsEmpty className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 p-2">
              {missionsCategory === "active" ? (
                <>
                  <p className="text-center uppercase text-cp-red xs:text-xl lg:text-2xl">
                    There is no active missions right now.{" "}
                    <CreateMissionButton className="btn-yellow hover:btn-cyan uppercase">
                      Add one!
                    </CreateMissionButton>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-center uppercase text-cp-red xs:text-xl lg:text-2xl">
                    Your completed missions will appear here.
                  </p>
                </>
              )}
            </MissionsEmpty>
          )}
        </div>
        <div className="flex-1 pl-20 xs:max-lg:hidden">
          {selectedMission ? (
            <div className="flex flex-col items-center gap-10">
              <MissionDetails selectedMission={selectedMission} />
            </div>
          ) : filteredMissions.length > 0 ? (
            <MissionsEmpty className="flex h-full w-full items-center justify-center border-2 border-cp-red/20">
              <p className="text-2xl uppercase text-cp-red">
                Select mission to show details.
              </p>
            </MissionsEmpty>
          ) : null}
        </div>
      </motion.section>
      {selectedMission && (
        <Modal className={["modal-red", "lg:hidden"]} isOpen={true}>
          <div className="flex w-full items-center justify-between border-b border-cp-yellow">
            <h2 className="text-xl text-cp-yellow">Mission Details</h2>
            <IoClose
              onClick={() => dispatch(setSelectedMission(null))}
              className="cursor-pointer text-3xl text-cp-yellow transition-all duration-200 hover:text-cp-red-hover"
            />
          </div>
          <MissionDetails selectedMission={selectedMission} />
        </Modal>
      )}
    </>
  );
};

export default MissionsContainer;

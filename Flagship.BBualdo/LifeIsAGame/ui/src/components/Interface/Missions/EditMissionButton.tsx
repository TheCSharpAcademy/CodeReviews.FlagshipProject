"use client";

import { IoClose } from "react-icons/io5";
import Modal from "../shared/Modal";
import { useState } from "react";
import { GiCog } from "react-icons/gi";
import EditMissionForm from "./EditMissionForm";
import { useAppSelector } from "@/src/redux/store";

const CreateMissionButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedMission = useAppSelector(
    (state) => state.selectedMissionReducer.selectedMission!,
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="btn-yellow hover:btn-cyan">
        <GiCog className="xs:text-xl lg:text-3xl" />
      </button>
      <Modal className={["modal-cyan"]} isOpen={isOpen}>
        <div className="flex w-full items-center justify-between border-b border-cp-cyan">
          <h2 className="text-xl text-cp-cyan">Edit Mission</h2>
          <IoClose
            onClick={closeModal}
            className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
          />
        </div>
        <EditMissionForm closeModal={closeModal} mission={selectedMission} />
      </Modal>
    </>
  );
};

export default CreateMissionButton;

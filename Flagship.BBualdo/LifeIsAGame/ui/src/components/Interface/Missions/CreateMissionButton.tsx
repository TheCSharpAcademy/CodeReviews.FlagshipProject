"use client";

import { IoClose } from "react-icons/io5";
import Modal from "../shared/Modal";
import { ReactNode, useState } from "react";
import CreateMissionForm from "./CreateMissionForm";
import { ClassValue } from "clsx";
import { cn } from "@/src/lib/utils";

const CreateMissionButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className: ClassValue;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={cn(className)}>
        {children}
      </button>
      <Modal className={["modal-cyan"]} isOpen={isOpen}>
        <div className="flex w-full items-center justify-between border-b border-cp-cyan">
          <h2 className="text-xl text-cp-cyan">Create Mission</h2>
          <IoClose
            onClick={closeModal}
            className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
          />
        </div>
        <CreateMissionForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CreateMissionButton;

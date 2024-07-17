"use client";

import { useState } from "react";
import Modal from "../shared/Modal";
import { IoClose } from "react-icons/io5";
import AvatarPicker from "./AvatarPicker";

const ChangeAvatarButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="text-md absolute bottom-0 w-full translate-y-full border-t-2 border-cp-cyan bg-black py-2 font-bold uppercase text-cp-cyan transition-all duration-300 group-hover:translate-y-0"
      >
        Change Avatar
      </button>
      <Modal className={["modal-cyan"]} isOpen={isOpen}>
        <div className="flex w-full items-center justify-between border-b border-cp-cyan">
          <h2 className="text-xl text-cp-cyan">Choose Avatar</h2>
          <IoClose
            onClick={closeModal}
            className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
          />
        </div>
        <AvatarPicker />
        <div className="flex w-full items-center justify-center">
          <button
            onClick={closeModal}
            className="btn btn-yellow transition-all duration-200 hover:bg-black"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ChangeAvatarButton;

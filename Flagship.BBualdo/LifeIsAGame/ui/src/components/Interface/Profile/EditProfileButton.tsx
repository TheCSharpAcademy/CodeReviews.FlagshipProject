"use client";

import { cn } from "@/src/lib/utils";
import { ClassValue } from "clsx";
import { useState } from "react";
import Modal from "../shared/Modal";
import { IoClose } from "react-icons/io5";
import EditProfileForm from "./EditProfileForm";

import { useAppSelector } from "@/src/redux/store";

const EditProfileButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: ClassValue;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useAppSelector((state) => state.userReducer);

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
      <Modal className={["modal-red"]} isOpen={isOpen}>
        <div className="flex w-full items-center justify-between border-b border-cp-cyan">
          <h2 className="text-xl text-cp-cyan">Edit Profile</h2>
          <IoClose
            onClick={closeModal}
            className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
          />
        </div>
        <EditProfileForm closeModal={closeModal} user={user} />
      </Modal>
    </>
  );
};

export default EditProfileButton;

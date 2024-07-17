"use client";

import { IoClose } from "react-icons/io5";
import Modal from "../shared/Modal";
import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FinalStep from "./FinalStep";
import { useDispatch } from "react-redux";
import useAchievement from "@/src/utils/useAchievement";
import { completeTutorial } from "@/src/redux/slices/userSlice";
import { AppDispatch } from "@/src/redux/store";

const TutorialStepper = ({
  isOpen,
  closeStepper,
}: {
  isOpen: boolean;
  closeStepper: () => void;
}) => {
  useAchievement();
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  const handleStepperDone = () => {
    dispatch(completeTutorial());
    closeStepper();
    setCurrentStep(1);
  };

  const handleStepperClose = () => {
    closeStepper();
    setCurrentStep(1);
  };

  const progress = (currentStep / 5) * 100;

  return (
    isOpen && (
      <Modal isOpen={isOpen} className={["modal-red"]}>
        <div className="flex w-full items-center justify-between border-b border-cp-cyan">
          <h2 className="text-xl text-cp-cyan">How to Play</h2>
          <IoClose
            onClick={handleStepperClose}
            className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
          />
        </div>
        <div className="mt-2 h-2 w-full border border-cp-red p-[1px]">
          <div
            className="h-full bg-cp-red transition-all duration-500"
            style={{ width: progress + "%" }}
          />
        </div>
        <div className="w-full overflow-hidden xs:mt-2 lg:mt-6">
          <div className="flex" style={{ width: 100 * 5 + "%" }}>
            <Step1 currentStep={currentStep} />
            <Step2 currentStep={currentStep} />
            <Step3 currentStep={currentStep} />
            <Step4 currentStep={currentStep} />
            <FinalStep currentStep={currentStep} />
          </div>
        </div>
        <div className="flex w-full items-center justify-between xs:mt-2 xs:max-lg:flex-col-reverse xs:max-lg:gap-2 lg:mt-6">
          <button
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className={`${
              currentStep === 1 ? "opacity-0" : "btn btn-red"
            } transition-opacity duration-200 enabled:hover:bg-cp-red/50`}
          >
            Previous
          </button>

          {currentStep < 5 && (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="btn btn-cyan justify-end transition-all duration-200 hover:bg-cp-red/50"
            >
              Next
            </button>
          )}
          {currentStep === 5 && (
            <button
              onClick={handleStepperDone}
              className="btn btn-green transition-all duration-200 hover:bg-cp-green/50"
            >
              Done
            </button>
          )}
        </div>
      </Modal>
    )
  );
};

export default TutorialStepper;

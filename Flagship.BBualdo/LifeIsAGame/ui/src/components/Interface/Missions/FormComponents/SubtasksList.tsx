"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";
import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Subtask from "./Subtask";

import { v4 as uuidv4 } from "uuid";
import { IoClose } from "react-icons/io5";
import ISubtask from "@/src/models/ISubtask";
import { z } from "zod";
import { KeyboardEvent } from "react";
import combinedMissionFormSchema from "@/src/schemas/combinedMissionFormSchema";

const SubtasksList = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof combinedMissionFormSchema>>;
}) => {
  const [subtasksArr, setSubtasksArr] = useState<ISubtask[]>(
    form.getValues().subtasks,
  );
  const [subtaskErr, setSubtaskErr] = useState<boolean>(false);

  const subtaskInput = useRef<HTMLInputElement>(null);

  const addSubtask = () => {
    const inputValue = subtaskInput.current?.value || "";

    if (subtaskInput.current!.value === "") {
      setSubtaskErr(true);
      return;
    } else {
      const newSubtask: ISubtask = {
        id: uuidv4(),
        title: inputValue,
        isCompleted: false,
      };
      setSubtaskErr(false);
      setSubtasksArr((prev) => [...prev, newSubtask]);
      form.setValue("subtasks", [...subtasksArr, newSubtask]);
      subtaskInput.current!.value = "";
    }
  };

  const removeSubtask = (id: string) => {
    const filteredSubtasks = subtasksArr.filter((subtask) => subtask.id !== id);
    setSubtasksArr(filteredSubtasks);
    setSubtaskErr(false);
    form.setValue("subtasks", filteredSubtasks);
  };

  const handleSubtaskAdd = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addSubtask();
    }
  };

  const subtasks = subtasksArr.map((subtask) => (
    <div key={subtask.id} className="flex w-full items-center gap-4">
      <Subtask>{subtask.title}</Subtask>
      <button
        onClick={() => removeSubtask(subtask.id)}
        className="x-btn btn-red flex w-[50px] items-center justify-center py-2 hover:bg-cp-red/50"
      >
        <IoClose className="text-2xl" />
      </button>
    </div>
  ));

  return (
    <FormField
      control={form.control}
      name="subtasks"
      render={() => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Subtasks
          </FormLabel>
          <FormDescription className="text-cp-yellow/80">
            Set your mission to smaller parts. This will keep you motivated!
          </FormDescription>
          <div className="flex max-h-[500px] w-full flex-col gap-2">
            {subtasks}
          </div>
          <FormControl>
            <div className="flex items-center gap-4 xs:max-lg:flex-col">
              <Input ref={subtaskInput} onKeyDown={handleSubtaskAdd} />
              <button
                type="button"
                onClick={addSubtask}
                className="btn btn-cyan hover:bg-cp-cyan/50"
              >
                Add Subtask
              </button>
            </div>
          </FormControl>
          {subtaskErr && (
            <FormMessage>Subtask name can't be empty.</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default SubtasksList;

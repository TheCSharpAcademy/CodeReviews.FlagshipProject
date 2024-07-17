"use client";

import { Form } from "@/src/shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Title from "./FormComponents/Title";
import Description from "./FormComponents/Description";
import SubtasksList from "./FormComponents/SubtasksList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { v4 as uuidv4 } from "uuid";
import { missionFormSchema } from "@/src/utils/schemas";
import { MissionSchema } from "@/src/utils/types";
import { updateMission } from "@/src/redux/slices/userSlice";
import { toast } from "sonner";

const EditMissionForm = ({
  closeModal,
  mission,
}: {
  closeModal: () => void;
  mission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof missionFormSchema>>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      id: mission.id,
      status: mission.status,
      title: mission.title,
      description: mission.description,
      difficulty: mission.difficulty,
      xp: mission.xp,
      subtasks: mission.subtasks,
    },
  });

  function onSubmit(values: z.infer<typeof missionFormSchema>) {
    if (values.subtasks.length === 0) {
      values.subtasks.push({
        id: uuidv4(),
        title: values.title,
        isCompleted: false,
      });
    }
    dispatch(updateMission(values));
    toast("Mission has been updated!");
    closeModal();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <Title form={form} />
        <Description form={form} />
        <SubtasksList form={form} />
        <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-10">
          <button className="btn btn-yellow hover:bg-black">Update</button>
          <button
            onClick={closeModal}
            type="button"
            className="btn btn-red hover:bg-cp-red/50"
          >
            Cancel
          </button>
        </div>
      </form>
    </Form>
  );
};

export default EditMissionForm;

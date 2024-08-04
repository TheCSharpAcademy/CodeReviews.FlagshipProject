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
import { toast } from "sonner";
import IMission from "@/src/models/IMission";
import MissionsService from "@/src/services/MissionsService";
import { updateMission } from "@/src/redux/slices/missionsSlice";
import editMissionFormSchema from "@/src/schemas/editMissionFormSchema";

const EditMissionForm = ({
  closeModal,
  mission,
}: {
  closeModal: () => void;
  mission: IMission;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof editMissionFormSchema>>({
    resolver: zodResolver(editMissionFormSchema),
    defaultValues: {
      id: mission.id,
      title: mission.title,
      description: mission.description,
      subtasks: mission.subtasks,
    },
  });

  async function onSubmit(values: z.infer<typeof editMissionFormSchema>) {
    if (values.subtasks.length === 0) {
      values.subtasks.push({
        id: uuidv4(),
        title: values.title,
        isCompleted: false,
      });
    }

    await MissionsService.updateMission(values)
      .then(() => {
        dispatch(updateMission(values));
        toast("Mission has been updated!");
      })
      .catch(() => {
        toast.error("Updating mission failed!");
      });

    closeModal();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        {/*@ts-ignore*/}
        <Title form={form} />
        {/*@ts-ignore*/}
        <Description form={form} />
        {/*@ts-ignore*/}
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

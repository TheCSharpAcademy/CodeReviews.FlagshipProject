"use client";

import { Form } from "@/src/shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Title from "./FormComponents/Title";
import Description from "./FormComponents/Description";
import DifficultyPicker from "./FormComponents/DifficultyPicker";
import SubtasksList from "./FormComponents/SubtasksList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import useUser from "@/src/utils/hooks/useUser";
import MissionsService from "@/src/services/MissionsService";
import { addMission } from "@/src/redux/slices/missionsSlice";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import addMissionFormSchema from "@/src/schemas/addMissionFormSchema";
import { setUserMissionsCounters } from "@/src/redux/slices/userSlice";
import useAchievementsUnlocker from "@/src/utils/hooks/useAchievementsUnlocker";
import ACHIEVEMENT_KEYS from "@/src/constants/achievements";

const CreateMissionForm = ({ closeModal }: { closeModal: () => void }) => {
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();
  const { tryUnlockAchievement } = useAchievementsUnlocker();

  const form = useForm<z.infer<typeof addMissionFormSchema>>({
    resolver: zodResolver(addMissionFormSchema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: 2,
      xpReward: 150,
      subtasks: [],
      userId: user?.id,
    },
  });

  async function onSubmit(values: z.infer<typeof addMissionFormSchema>) {
    if (values.subtasks.length === 0) {
      values.subtasks.push({
        id: uuidv4(),
        title: values.title,
        isCompleted: false,
      });
    }

    await MissionsService.addMission(values)
      .then(async (res) => {
        dispatch(addMission(res.data));
        dispatch(setUserMissionsCounters("ADD_MISSION"));
        dispatch(setSelectedMission(res.data));

        await tryUnlockAchievement(ACHIEVEMENT_KEYS.ADD_FIRST_MISSION);

        toast("Mission has been added!");
      })
      .catch(() => {
        toast.error("Adding mission failed!");
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
        <DifficultyPicker form={form} />
        {/*@ts-ignore*/}
        <SubtasksList form={form} />
        <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-10">
          <button className="btn btn-yellow hover:bg-black">Create</button>
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

export default CreateMissionForm;

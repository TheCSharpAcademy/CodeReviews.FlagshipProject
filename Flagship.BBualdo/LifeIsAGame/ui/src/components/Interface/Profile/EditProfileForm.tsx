"use client";

import { Form } from "@/src/shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { User } from "@/src/utils/types";
import { toast } from "sonner";
import { userCreatorSchema } from "@/src/utils/schemas";
import { updateProfile } from "@/src/redux/slices/userSlice";
import FirstName from "./FormComponents/FirstName";
import Username from "./FormComponents/Username";
import LastName from "./FormComponents/LastName";
import CurrentGoal from "./FormComponents/CurrentGoal";
import Bio from "./FormComponents/Bio";

const EditProfileForm = ({
  closeModal,
  user,
}: {
  closeModal: () => void;
  user: User;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, username, currentGoal, bio } = user;

  const form = useForm<z.infer<typeof userCreatorSchema>>({
    resolver: zodResolver(userCreatorSchema),
    defaultValues: {
      firstName,
      lastName,
      username,
      currentGoal,
      bio,
    },
  });

  function onSubmit(values: z.infer<typeof userCreatorSchema>) {
    dispatch(updateProfile(values));
    toast("Profile has been updated!");
    closeModal();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <div className="flex w-full flex-col justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-6">
          <Username form={form} />
          <FirstName form={form} />
          <LastName form={form} />
          <CurrentGoal form={form} />
          <Bio form={form} />
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
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;

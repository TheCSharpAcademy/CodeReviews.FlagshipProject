"use client";

import { Form } from "@/src/shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { toast } from "sonner";
import FirstName from "./FormComponents/FirstName";
import LastName from "./FormComponents/LastName";
import CurrentGoal from "./FormComponents/CurrentGoal";
import Bio from "./FormComponents/Bio";
import IUser from "@/src/models/IUser";
import editProfileInfoSchema from "@/src/schemas/editProfileInfoSchema";
import UserService from "@/src/services/UserService";
import { updateUserInfo } from "@/src/redux/slices/userSlice";
import { PiWarningCircleFill } from "react-icons/pi";
import Username from "@/src/components/Interface/Profile/FormComponents/Username";
import IEditProfileDto from "@/src/services/DTO/IEditProfileDto";
import { useMemo } from "react";

const EditProfileForm = ({
  closeModal,
  user,
}: {
  closeModal: () => void;
  user: IUser;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, username, currentGoal, bio } = user;

  const form = useForm<z.infer<typeof editProfileInfoSchema>>({
    resolver: zodResolver(editProfileInfoSchema),
    defaultValues: {
      username,
      firstName,
      lastName,
      currentGoal,
      bio,
    },
  });

  // monitor all fields for changes
  const watchedValues = useWatch({ control: form.control });

  const hasChanges = useMemo(() => {
    return (
      watchedValues.username !== user.username ||
      watchedValues.firstName !== user.firstName ||
      watchedValues.lastName !== user.lastName ||
      watchedValues.currentGoal !== user.currentGoal ||
      watchedValues.bio !== user.bio
    );
  }, [watchedValues, user]);

  async function onSubmit(values: z.infer<typeof editProfileInfoSchema>) {
    if (!hasChanges) {
      closeModal();
      return;
    }

    const profileInfo: IEditProfileDto = {
      username: values.username,
      firstName: values.firstName ?? "",
      lastName: values.lastName ?? "",
      currentGoal: values.currentGoal ?? "",
      bio: values.bio ?? "",
    };

    try {
      const res = await UserService.updateProfile(user.id, profileInfo);
      dispatch(updateUserInfo(values));
      toast(res.data.message);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message, {
          description: error.response.data.errors?.map(
            (error: string, index: number) => <p key={index}>{error}</p>,
          ),
        });
      } else {
        toast.error("Profile update failed!", {
          description:
            "Server error occurred. Please try again later or contact customer support.",
        });
      }
    }

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

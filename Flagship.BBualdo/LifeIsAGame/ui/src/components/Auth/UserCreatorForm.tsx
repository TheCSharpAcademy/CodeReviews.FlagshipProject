// This is temporary signup form. In the future I want to implement real authentication and db for each user. For now it will be saving User's Data to localStorage.

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { userCreatorSchema } from "@/src/utils/schemas";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { createUser } from "@/src/redux/slices/userSlice";
import { v4 as uuidv4 } from "uuid";

// User Creator Component
const UserCreatorForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const signupForm = useForm<z.infer<typeof userCreatorSchema>>({
    resolver: zodResolver(userCreatorSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      currentGoal: "",
    },
  });

  function onSubmit({
    firstName,
    lastName,
    username,
    currentGoal,
  }: z.infer<typeof userCreatorSchema>) {
    dispatch(
      createUser({ id: uuidv4(), firstName, lastName, username, currentGoal }),
    );
    router.push("/profile");
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="flex flex-col items-center"
    >
      <Form {...signupForm}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={signupForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={signupForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  FIRST NAME
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  LAST NAME <span className="text-cp-yellow">(OPTIONAL)</span>
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  USERNAME
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="currentGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  YOUR GOAL <span className="text-cp-yellow">(OPTIONAL)</span>
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className="btn btn-cyan hover:btn-red hover:bg-cp-red/30">
            Hack in
          </button>
        </form>
      </Form>
    </motion.div>
  );
};

export default UserCreatorForm;

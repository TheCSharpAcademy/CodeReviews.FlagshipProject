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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signupFormSchema } from "@/src/utils/schemas";

// Signup Component
const SignupForm = () => {
  const router = useRouter();

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit({
    email,
    password,
    username,
  }: z.infer<typeof signupFormSchema>) {
    router.push("/");
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  EMAIL
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  PASSWORD
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  CONFIRM PASSWORD
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="btn btn-cyan hover:btn-red hover:bg-cp-red/30"
          >
            Sign up
          </button>
          <div className="relative mt-3 flex w-full items-center justify-center border">
            <span className="absolute -top-2 text-xs uppercase text-cp-yellow backdrop-blur-sm">
              Already have an account?
            </span>
          </div>
          <Link href="/login">
            <button type="button" className="btn btn-yellow hover:bg-black">
              Log in
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default SignupForm;

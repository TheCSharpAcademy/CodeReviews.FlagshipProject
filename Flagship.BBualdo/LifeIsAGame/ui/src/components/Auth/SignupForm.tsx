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
import signupFormSchema from "@/src/schemas/signUpFormSchema";
import AuthService from "@/src/services/AuthService";
import IRegisterData from "@/src/models/IRegisterData";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";
import { useState } from "react";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    if (isLoading) return;
    const registerData: IRegisterData = { ...values };
    try {
      setIsLoading(true);
      await AuthService.register(registerData);
      toast("Register successful!", {
        description: "Now you can log in.",
      });
      router.push("/login");
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      if (error.response) {
        toast.error(error.response.data.message, {
          description: error.response.data.errors.map(
            (e: string, index: number) => <p key={index}>{e}</p>,
          ),
        });
      } else {
        toast.error("Register failed!", {
          description:
            "Server error occurred. Please try again later or contact customer support.",
        });
      }
    }
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
            disabled={isLoading}
            type="submit"
            className="btn btn-cyan enabled:hover:btn-red enabled:hover:bg-cp-red/30"
          >
            {isLoading ? "Hacking..." : "Sign up"}
          </button>
          <div className="relative mt-3 flex w-full items-center justify-center border">
            <span className="absolute -top-2 text-xs uppercase text-cp-yellow backdrop-blur-sm">
              Already have an account?
            </span>
          </div>
          <Link href="/login">
            <button
              disabled={isLoading}
              type="button"
              className="btn btn-yellow enabled:hover:bg-black"
            >
              {isLoading ? "Hacking..." : "Log in"}
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default SignupForm;

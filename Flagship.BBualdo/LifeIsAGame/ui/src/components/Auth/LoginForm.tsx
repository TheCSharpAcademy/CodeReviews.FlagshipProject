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
import loginFormSchema from "@/src/schemas/loginFormSchema";
import ILoginData from "@/src/models/ILoginData";
import AuthService from "@/src/services/AuthService";
import { toast } from "sonner";
import { useState } from "react";
import { Checkbox } from "@/src/shadcn/ui/checkbox";
import { Label } from "@/src/shadcn/ui/label";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    if (isLoading) return;
    const loginData: ILoginData = { ...values };
    try {
      setIsLoading(true);
      await AuthService.login(loginData);
      router.push("/");
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
        toast.error("Login failed!", {
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
      <Form {...loginForm}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={loginForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="tracking-[6px] text-white">
                  EMAIL
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="tracking-[6px] text-white">
                    PASSWORD
                  </FormLabel>
                  <Link tabIndex={-1} href={"/forgot-password"}>
                    <button
                      tabIndex={-1}
                      type="button"
                      className="text-xs text-cp-cyan transition-all duration-200 hover:text-cp-yellow"
                    >
                      DON'T REMEMBER?
                    </button>
                  </Link>
                </div>
                <FormControl>
                  <Input className="min-w-[360px]" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex w-full items-center gap-2">
                <FormControl>
                  <Checkbox
                    id="rememberMe"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="scale-75"
                  />
                </FormControl>
                <Label
                  htmlFor="rememberMe"
                  className="!mt-0 cursor-pointer uppercase text-cp-cyan"
                >
                  Remember Me
                </Label>
              </FormItem>
            )}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-cyan enabled:hover:btn-red enabled:hover:bg-cp-red/30"
          >
            {isLoading ? "Hacking..." : "Log in"}
          </button>
          <div className="relative mt-3 flex w-full items-center justify-center border">
            <span className="absolute -top-2 text-xs uppercase text-cp-yellow backdrop-blur-sm">
              Are you new here?
            </span>
          </div>
          <Link href={"/signup"}>
            <button
              disabled={isLoading}
              type="button"
              className="btn btn-yellow enabled:hover:bg-black"
            >
              {isLoading ? "Hacking..." : "Create Account"}
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default LoginForm;

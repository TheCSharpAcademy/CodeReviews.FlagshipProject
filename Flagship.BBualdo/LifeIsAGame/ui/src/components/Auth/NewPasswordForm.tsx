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
import { useRouter, useSearchParams } from "next/navigation";
import signupFormSchema from "@/src/schemas/signUpFormSchema";
import AuthService from "@/src/services/AuthService";
import IRegisterData from "@/src/models/IRegisterData";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import newPasswordSchema from "@/src/schemas/newPasswordSchema";
import INewPasswordDto from "@/src/services/DTO/INewPasswordDto";

const NewPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const newPasswordForm = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    if (isLoading || !email || !token) return;
    const newPasswordDto: INewPasswordDto = {
      email,
      resetToken: token,
      newPassword: values.password,
    };

    try {
      setIsLoading(true);
      await AuthService.resetPassword(newPasswordDto);
      toast("Password has been changed!", {
        description: "Now you can log in.",
      });
      router.push("/login");
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      if (error.response) {
        toast.error(error.response.data.message, {
          description: error.response.data.errors?.map(
            (e: string, index: number) => <p key={index}>{e}</p>,
          ),
        });
      } else {
        toast.error("Password changing failed!", {
          description:
            "Server error occurred. Please try again later or contact customer support.",
        });
      }
    }
  }

  useEffect(() => {
    if (!email || !token) {
      router.replace("/login");
      return;
    }
  }, [email, token, router]);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="mt-4 flex flex-col items-center"
    >
      <Form {...newPasswordForm}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={newPasswordForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={newPasswordForm.control}
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
            control={newPasswordForm.control}
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
            {isLoading ? "Hacking..." : "Change Password"}
          </button>
          <Link href={"/login"}>
            <button
              disabled={isLoading}
              type="button"
              className="btn btn-yellow enabled:hover:bg-black"
            >
              {isLoading ? "Hacking..." : "Cancel"}
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default NewPasswordForm;

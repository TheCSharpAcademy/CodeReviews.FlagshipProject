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
import { useState } from "react";
import forgotPasswordSchema from "@/src/schemas/forgotPasswordSchema";
import { useRouter } from "next/navigation";
import AuthService from "@/src/services/AuthService";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    if (isLoading) return;
    const { email } = values;

    try {
      setIsLoading(true);
      const res = await AuthService.forgotPassword(email);
      toast("Check your inbox!", {
        description: `We sent password recovery link to '${email}'.`,
      });
      router.push("/login");
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      toast.error("Password reset failed!", {
        description:
          "Server error occurred. Please try again later or contact customer support.",
      });
    }
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="mt-4 flex flex-col items-center gap-4"
    >
      <div className="w-[320px] border-2 border-cp-cyan bg-cp-cyan/20 p-4 md:w-[400px]">
        <p className="text-center font-bold text-cp-cyan">
          Enter your email so we can send you password recovery link.
        </p>
      </div>
      <Form {...forgotPasswordForm}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={forgotPasswordForm.control}
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
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-cyan enabled:hover:btn-red enabled:hover:bg-cp-red/30"
          >
            {isLoading ? "Hacking..." : "Send"}
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

export default ForgotPasswordForm;

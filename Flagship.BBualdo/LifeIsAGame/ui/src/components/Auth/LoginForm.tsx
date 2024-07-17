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
import { loginFormSchema } from "@/src/utils/schemas";

// Login Component
const LoginForm = () => {
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    router.push("/");
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
                  <button
                    tabIndex={-1}
                    type="button"
                    className="text-xs text-cp-cyan"
                  >
                    DON'T REMEMBER?
                  </button>
                </div>
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
            Log in
          </button>
          <div className="relative mt-3 flex w-full items-center justify-center border">
            <span className="absolute -top-2 text-xs uppercase text-cp-yellow backdrop-blur-sm">
              Are you new here?
            </span>
          </div>
          <Link href="/signup">
            <button type="button" className="btn btn-yellow hover:bg-black">
              Create account
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default LoginForm;

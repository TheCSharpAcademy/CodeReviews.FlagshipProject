"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import AuthService from "@/src/services/AuthService";

const LoginProviders = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="relative my-8 flex w-3/4 items-center justify-between border border-cp-cyan px-8 py-6"
    >
      <div className="absolute -top-[10px] left-0 z-10 flex w-full items-center justify-center text-sm uppercase text-cp-cyan">
        <span aria-hidden className="backdrop-blur-sm">
          Log in using
        </span>
      </div>
      <motion.button
        aria-label="Login with Google"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1 }}
        className="flex items-center justify-center"
        onClick={() => AuthService.loginWithGoogle()}
      >
        <FaGoogle className="text-2xl text-cp-cyan transition-all duration-200 hover:text-cp-red" />
      </motion.button>

      <motion.button
        aria-label="Login with GitHub"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1.5 }}
        className="flex items-center justify-center"
        onClick={() => AuthService.loginWithGithub()}
      >
        <FaGithub className="text-2xl text-cp-cyan transition-all duration-200 hover:text-cp-red" />
      </motion.button>

      <motion.button
        aria-label="Login with Facebook"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 2 }}
        className="flex items-center justify-center"
        onClick={() => AuthService.loginWithFacebook()}
      >
        <FaFacebook className="text-2xl text-cp-cyan transition-all duration-200 hover:text-cp-red" />
      </motion.button>
      <div className="absolute -bottom-[10px] left-0 z-10 flex w-full items-center justify-center text-sm uppercase text-cp-cyan">
        <span aria-hidden className="backdrop-blur-sm">
          or
        </span>
      </div>
    </motion.div>
  );
};

export default LoginProviders;

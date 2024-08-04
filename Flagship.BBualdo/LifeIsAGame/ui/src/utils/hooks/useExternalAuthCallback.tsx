"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import useUser from "@/src/utils/hooks/useUser";
import { useEffect } from "react";
import AuthService from "@/src/services/AuthService";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";
import { setUserProviderId } from "@/src/redux/slices/userSlice";

const useExternalAuthCallback = (
  providerName: "Github" | "Google" | "Facebook",
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const code = searchParams.get("code");
  const { user } = useUser();

  const callbackMethods = {
    Github: AuthService.handleGithubCallback,
    Facebook: AuthService.handleFacebookCallback,
    Google: AuthService.handleGoogleCallback,
  };

  useEffect(() => {
    if (!code) {
      if (user) {
        router.replace("/profile");
      } else {
        router.replace("/login");
      }
      return;
    }

    const callbackMethod = callbackMethods[providerName];

    if (!user) {
      callbackMethod(code)
        .then(() => {
          router.replace("/");
        })
        .catch((error: any) => {
          if (error.response) {
            toast.error(error.response.data.message, {
              description: error.response.data.errors?.map(
                (e: string, index: number) => <p key={index}>{e}</p>,
              ),
            });
          } else {
            toast.error(`${providerName} login failed!`, {
              description:
                "Server error occurred. Please try again later or contact customer support.",
            });
          }

          router.replace("/login");
        });
    } else {
      AuthService.linkAccount(code, user.id, providerName)
        .then(() => {
          dispatch(setUserProviderId(providerName));
          router.replace("/profile");
        })
        .catch((error: any) => {
          if (error.response) {
            toast.error(error.response.data.message, {
              description: error.response.data.errors?.map(
                (e: string, index: number) => <p key={index}>{e}</p>,
              ),
            });
          } else {
            toast.error(`${providerName} login failed!`, {
              description:
                "Server error occurred. Please try again later or contact customer support.",
            });
          }

          router.replace("/login");
        });
    }
  }, [code, router]);
};

export default useExternalAuthCallback;

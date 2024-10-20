"use client";

import { Switch } from "@/src/shadcn/ui/switch";
import { clsx } from "clsx";
import { Provider } from "@/src/constants/externalProviders";
import IUser from "@/src/models/IUser";
import { useState } from "react";
import AuthService from "@/src/services/AuthService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { clearUserProviderId } from "@/src/redux/slices/userSlice";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";

const UserLink = ({ provider, user }: { provider: Provider; user: IUser }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const idName = provider.idName as keyof IUser;

  async function unlinkAccount(providerName: string, userId: string) {
    try {
      const res = await AuthService.unlinkAccount(provider.name, user.id);
      dispatch(
        clearUserProviderId(provider.name as "Google" | "Github" | "Facebook"),
      );
      toast(res.data.message);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message, {
          description: error.response.data.errors?.map(
            (e: string, index: number) => <p key={index}>{e}</p>,
          ),
        });
      } else {
        toast.error("Login failed!", {
          description:
            "Server error occurred. Please try again later or contact customer support.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  const toggleAccountLink = async (idName: keyof IUser) => {
    if (isLoading) return;
    setIsLoading(true);
    if (user[idName]) {
      await unlinkAccount(provider.name, user.id);
    } else {
      switch (provider.name) {
        case "Github": {
          AuthService.loginWithGithub();
          break;
        }
        case "Facebook": {
          AuthService.loginWithFacebook();
          break;
        }
        case "Google": {
          AuthService.loginWithGoogle();
          break;
        }
      }
    }
  };

  return (
    <div className="flex w-[120px] flex-col items-center gap-2 border-2 border-cp-red py-4 text-cp-red md:w-[200px]">
      <provider.icon className="text-lg md:text-2xl" />
      <p className="uppercase md:text-lg">{provider.name}</p>
      {!isLoading ? (
        <Switch
          checked={!!user[idName]}
          onClick={() => toggleAccountLink(idName)}
        />
      ) : (
        "Hacking..."
      )}
      <p
        className={clsx(
          {
            "text-cp-cyan": user[idName],
            "text-cp-red": !user[idName],
          },
          "text-xs uppercase md:text-base",
        )}
      >
        {user[idName] ? "Connected" : "Disconnected"}
      </p>
    </div>
  );
};

export default UserLink;

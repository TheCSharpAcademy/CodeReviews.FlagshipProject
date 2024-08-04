"use client";

import { AppDispatch, useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import AuthService from "@/src/services/AuthService";
import { useDispatch } from "react-redux";
import { setUser } from "@/src/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import logout from "@/src/utils/logout";

const useUser = () => {
  const { user, isLoggedOut } = useAppSelector((state) => state.authReducer);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoggedOut) {
      try {
        AuthService.getCurrentUser().then((res) => dispatch(setUser(res.data)));
      } catch {
        logout(dispatch, router);
      }
    }

    setIsLoadingUser(false);
  }, [user, dispatch, router, isLoggedOut]);

  return { user, isLoadingUser };
};

export default useUser;

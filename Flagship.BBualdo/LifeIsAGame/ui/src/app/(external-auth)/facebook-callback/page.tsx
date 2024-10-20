"use client";

import Loading from "@/src/app/loading";
import useExternalAuthCallback from "@/src/utils/hooks/useExternalAuthCallback";

const FacebookCallback = () => {
  useExternalAuthCallback("Facebook");

  return <Loading text="Hacking with Facebook..." />;
};

export default FacebookCallback;

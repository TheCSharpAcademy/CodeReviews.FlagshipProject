"use client";

import Loading from "@/src/app/loading";
import useExternalAuthCallback from "@/src/utils/hooks/useExternalAuthCallback";

const GoogleCallback = () => {
  useExternalAuthCallback("Google");

  return <Loading text="Hacking with Google..." />;
};

export default GoogleCallback;

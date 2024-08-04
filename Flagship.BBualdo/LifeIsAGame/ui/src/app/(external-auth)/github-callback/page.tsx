"use client";

import Loading from "@/src/app/loading";
import useExternalAuthCallback from "@/src/utils/hooks/useExternalAuthCallback";

const GithubCallback = () => {
  useExternalAuthCallback("Github");

  return <Loading text="Hacking with Github..." />;
};

export default GithubCallback;

import Backdrop from "@/src/components/Auth/Backdrop";
import { arcade } from "@/src/fonts";
import Logo from "@/src/components/Auth/Logo";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Backdrop />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className={arcade.className}>
          <Logo arbitaryClasses="flex-col h-[132px]" />
        </div>
        {children}
      </main>
    </>
  );
};

export default AuthLayout;

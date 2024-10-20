import { ReactNode } from "react";
import LoginProviders from "@/src/components/Auth/LoginProviders";

const FormAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <LoginProviders />
      {children}
    </div>
  );
};

export default FormAuthLayout;

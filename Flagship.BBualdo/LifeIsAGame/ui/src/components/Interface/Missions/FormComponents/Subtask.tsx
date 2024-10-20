import { ReactNode } from "react";

const Subtask = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 border border-cp-yellow bg-black p-2 text-base font-extrabold text-cp-yellow ring-offset-cp-yellow">
      {children}
    </div>
  );
};

export default Subtask;

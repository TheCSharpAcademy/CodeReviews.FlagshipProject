"use client";

import ReactLoading from "react-loading";

export default function Loading({ text = "Hacking..." }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ReactLoading type="bars" color="#ef4444" height={100} width={70} />
      <h2 className="text-2xl uppercase text-cp-red">{text}</h2>
    </div>
  );
}

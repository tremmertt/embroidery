import React, { useContext } from "react";
import { ThemeCustomContext } from "../../settings/theme-context";

export default function SigninPage() {
  const { theme } = useContext(ThemeCustomContext);
  return (
    <div className="h-full w-full" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="p-12 font-bold text-3xl">Signin</div>
      <div className="flex flex-row justify-center items-center">
        <div className="p-12 bg-blue-500">01</div>
        <div className="p-12 bg-blue-500">02</div>
        <div className="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

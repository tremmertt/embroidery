import React, { useContext } from "react";
import { ThemeContext } from "../../settings/theme-context";

export default function ProfilePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="h-full w-full" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="p-12 font-bold text-3xl">Profile</div>
      <div class="flex flex-row justify-center items-center">
        <div class="p-12 bg-blue-500">01</div>
        <div class="p-12 bg-blue-500">02</div>
        <div class="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

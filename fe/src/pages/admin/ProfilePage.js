import React, { useContext } from "react";
import EBreadcrumb from "../../component/admin/common/EBreadcrumb";
import { ThemeContext } from "../../settings/theme-context";

export default function ProfilePage() {
  const { theme } = useContext(ThemeContext);
  const breadcrumbItems = [
    {
      name: 'Home',
      path: '/admin',
    },
    {
      name: 'Profile',
      path: '/admin/profile',
    }
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Profile"} />
      <div class="flex flex-row justify-center items-center">
        <div class="p-12 bg-blue-500">01</div>
        <div class="p-12 bg-blue-500">02</div>
        <div class="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

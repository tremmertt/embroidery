import React, { useContext } from "react";
import EBreadcrumb from "../../components/admin/common/EBreadcrumb";
import { ThemeContext } from "../../settings/theme-context";

export default function ProfilePage() {
  const { theme } = useContext(ThemeContext);
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: "Profile",
      path: "/admin/profile",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Profile"} />
      </div>

      <div className="flex flex-row justify-center items-center">
        <div className="p-12 bg-blue-500">01</div>
        <div className="p-12 bg-blue-500">02</div>
        <div className="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

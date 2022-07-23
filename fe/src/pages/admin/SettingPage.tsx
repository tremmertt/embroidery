import React, { useContext } from "react";
import EBreadcrumb from "../../components/admin/common/EBreadcrumb";
import { ThemeCustomContext } from "../../settings/theme-context";

export default function SettingPage() {
  const { theme } = useContext(ThemeCustomContext);
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: "Setting",
      path: "/admin/setting",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Setting"} />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="p-12 bg-blue-500">01</div>
        <div className="p-12 bg-blue-500">02</div>
        <div className="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

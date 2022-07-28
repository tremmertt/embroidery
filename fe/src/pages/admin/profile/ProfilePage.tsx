import React, { useContext } from "react";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();

  const breadcrumbItems = [
    {
      name: t("Home"),
      path: "/admin",
    },
    {
      name: t("profile.Profile"),
      path: "/admin/profile",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("profile.Profile")} />
      </div>

      <div className="flex flex-row justify-center items-center">
        <div className="p-12 bg-blue-500">01</div>
        <div className="p-12 bg-blue-500">02</div>
        <div className="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

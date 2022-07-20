import React, { useContext } from "react";
import EBreadcrumb from "../../component/admin/common/EBreadcrumb";
import { ThemeContext } from "../../settings/theme-context";

export default function CustomerList() {
  const { theme } = useContext(ThemeContext);
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: "Customer List",
      path: "/admin/customers",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Customer List"} />
      <div className="flex flex-row justify-center items-center">
        <div className="p-12 bg-blue-500">01</div>
        <div className="p-12 bg-blue-500">02</div>
        <div className="p-12 bg-blue-500">03</div>
      </div>
    </div>
  );
}

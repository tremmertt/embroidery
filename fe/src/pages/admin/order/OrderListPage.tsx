import React, { useContext } from "react";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { useTranslation } from "react-i18next";
import useTitle from "../../../components/general/useTitle";

export default function OrderListPage() {
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();
  const breadcrumbItems = [
    {
      name: t("Home"),
      path: "/admin",
    },
    {
      name: t("order.OrderList"),
      path: "/admin/orders",
    },
  ];

  useTitle(t("order.OrderList"));

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("order.OrderList")} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div className="flex flex-row justify-start items-center w-content">
          {/* <Link to="/admin/staffs/create">
            <Button className="mr-4 elevation-1" variant="contained" disableRipple>
              Create
            </Button>
          </Link> */}
          {/* <Button variant="contained" href="#contained-buttons">
            Link
          </Button> */}
        </div>
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        ></div>
      </div>
    </div>
  );
}

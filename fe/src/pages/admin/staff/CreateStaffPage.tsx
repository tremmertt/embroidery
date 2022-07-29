import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { useTranslation } from "react-i18next";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import StaffAction from "../../../redux/actions/StaffAction";
import FormCreateStaff from "./form/FormCreateStaff";

const CreateStaffPage = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();

  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: t("staff.StaffList"),
      path: "/admin/staffs",
    },
    {
      name: t("staff.CreateStaff"),
      path: "/admin/staffs/create",
    },
  ];

  useEffect((listStaff = StaffAction.listStaff()) => {
    dispatch(listStaff);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full h-screen" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        {" "}
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("staff.CreateStaff")} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full">
            <FormCreateStaff />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStaffPage;

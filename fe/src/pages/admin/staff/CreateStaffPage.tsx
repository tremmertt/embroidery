import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import { ThemeCustomContext } from "../../../settings/theme-context";
import StaffAction from "../../../redux/actions/StaffAction";
import FormCreateStaff from "./FormCreateStaff";

const StaffListPage = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeCustomContext);

  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: "Staff List",
      path: "/admin/staffs",
    },
    {
      name: "Create Staff",
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
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Create Staff"} />
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

export default StaffListPage;

import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import { ThemeCustomContext } from "../../../settings/theme-context";
import StaffAction from "../../../redux/actions/StaffAction";
import FormEditStaff from "./form/FormEditStaff";
import { IRootState } from "../../../redux/configStore";
import { useParams } from "react-router-dom";
import { IStaff } from "../../../service/StaffService";
import { useTranslation } from "react-i18next";

const EditStaffPage = () => {
  const dispatch = useDispatch();
  const { selectedStaff } = useSelector((state: IRootState) => state.StaffReducer);
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();
  const params = useParams();

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
      name: t("staff.EditStaff"),
      path: "/admin/staffs/edit",
    },
  ];

  console.log(params.id);

  useEffect(() => {
    dispatch(StaffAction.listStaff());
    if (params.id) dispatch(StaffAction.getStaff(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full h-screen" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        {" "}
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("staff.EditStaff")} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full">{selectedStaff ? <FormEditStaff staffItem={selectedStaff} /> : <></>}</div>
        </div>
      </div>
    </div>
  );
};

export default EditStaffPage;

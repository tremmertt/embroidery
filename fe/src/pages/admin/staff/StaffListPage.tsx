import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { IRootState } from "../../../redux/configStore";
import { IStaff } from "../../../service/StaffService";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StaffAction from "../../../redux/actions/StaffAction";
import moment from "moment-timezone";
import useTitle from "../../../components/general/useTitle";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import ICustomTable, { IColumn, IData } from "../../../components/table/ICustomTable";

const StaffListPage = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeCustomContext);
  const { listStaff } = useSelector((state: IRootState) => state.StaffReducer);
  const { t } = useTranslation();

  useTitle(t("staff.StaffList"));
  useEffect((listStaff = StaffAction.listStaff()) => {
    dispatch(listStaff);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const breadcrumbItems = [
    {
      name: t("Home"),
      path: "/admin",
    },
    {
      name: t("staff.StaffList"),
      path: "/admin/staffs",
    },
  ];

  const data: IData<IStaff> = {
    defaultOrder: undefined,
    columns: [
      {
        id: "no",
        label: "No",
        minWidth: 60,
        align: "center",
        alignHeader: "center",
        sortable: false,
      },
      {
        id: "name",
        label: "Name",
        minWidth: 120,
        align: "left",
        alignHeader: "center",
        sortable: true,
      },
      { id: "email", label: "Email", minWidth: 200, align: "center", alignHeader: "center", sortable: false },
      { id: "phone", label: "Phone", minWidth: 170, align: "center", alignHeader: "center", sortable: false },
      {
        id: "role",
        label: "Role",
        minWidth: 100,
        align: "center",
        alignHeader: "center",
        format: (value: string) => value.toUpperCase(),
        sortable: false,
      },
      {
        id: "ipAddress",
        label: "IP Address",
        minWidth: 140,
        align: "center",
        format: (value: string) => value,
        alignHeader: "center",
        sortable: false,
      },
      {
        id: "lastTimeUsing",
        label: "Last Time Login",
        minWidth: 200,
        align: "center",
        alignHeader: "center",
        format: (value: string) => moment(new Date(value)).format("HH:mm YYYY-MM-DD"),
        sortable: false,
      },
      {
        id: "action",
        label: "",
        minWidth: 50,
        align: "center",
        alignHeader: "center",
        actions: [
          { action: "edit", path: "/admin/staffs/edit" },
          { action: "delete", path: "#" },
        ],
      },
    ] as IColumn[],
    rows: listStaff.map((i: IStaff, index: number) => ({ ...i, no: index + 1 })) as IStaff[],
  };

  return (
    <div className="relative w-full pb-4" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        {" "}
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("staff.StaffList")} />
      </div>

      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div className="flex flex-row justify-start items-center w-content">
          <Link to="/admin/staffs/create">
            <Button className="mr-4 elevation-1" variant="contained" disableRipple>
              {t("action.CreateNew")}
            </Button>
          </Link>
          {/* <Button variant="contained" href="#contained-buttons">
            Link
          </Button> */}
        </div>
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full rounded-0">
            <ICustomTable data={data}></ICustomTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffListPage;

import { useContext, useEffect } from "react";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import { ThemeCustomContext } from "../../../settings/theme-context";
import ShieldMoonSharpIcon from "@mui/icons-material/ShieldMoonSharp";
import ICustomTable, { IColumn, IData } from "../../../components/table/ICustomTable";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/configStore";
import StaffAction from "../../../redux/actions/StaffAction";
import { IStaff } from "../../../service/StaffService";
import { useTranslation } from "react-i18next";

const DashBoardPage = () => {
  const { t } = useTranslation();
  const { listStaff } = useSelector((state: IRootState) => state.StaffReducer);
  const { theme } = useContext(ThemeCustomContext);
  const dispatch = useDispatch();
  const breadcrumbItems = [
    {
      name: t("Home"),
      path: "/admin",
    },
  ];

  const data: IData<IStaff> = {
    defaultOrder: "id",
    columns: [
      {
        id: "id",
        label: "No",
        minWidth: 60,
        align: "center",
        alignHeader: "center",
      },
      {
        id: "name",
        label: "Name",
        minWidth: 170,
        align: "left",
        alignHeader: "center",
      },
      { id: "email", label: "Email", minWidth: 170, align: "center", alignHeader: "center" },
      { id: "phone", label: "Phone", minWidth: 170, align: "center", alignHeader: "center" },
      {
        id: "role",
        label: "Role",
        minWidth: 70,
        align: "center",
        alignHeader: "center",
        format: (value: string) => value.toUpperCase(),
      },
      {
        id: "ipAddress",
        label: "IP Address",
        minWidth: 170,
        align: "center",
        format: (value: string) => value,
        alignHeader: "center",
      },
      {
        id: "lastTimeUsing",
        label: "Last Time Login",
        minWidth: 170,
        align: "center",
        alignHeader: "center",
        format: (value: string) => moment(value).format("HH:mm YYYY-MM-DD"),
      },
    ] as IColumn[],
    rows: listStaff.slice(0, 2),
  };

  useEffect((listStaff = StaffAction.listStaff()) => {
    dispatch(listStaff);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full h-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("dashboard.Dashboard")}></EBreadcrumb>
      </div>
      <div className="grid grid-cols-3 gap-4 m-6 p-2">
        {/* Table 1 */}
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>

        {/* Table 2 */}
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 2"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>

        {/* Table 3 */}
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 3"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 m-6 p-2">
        {/* Table 1 */}
        <div
          className="p-4 col-span-2 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>

        {/* Table 2 */}
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 2"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 m-6 mb-0 pb-6 p-2">
        {/* Table 1 */}
        <div
          className="p-4 col-span-1 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>

        {/* Table 2 */}
        <div
          className="p-4 col-span-2 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 2"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <ShieldMoonSharpIcon />
            </span>
          </div>
          <ICustomTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;

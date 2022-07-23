import { useContext } from "react";
import EBreadcrumb from "../../components/admin/common/EBreadcrumb";
import CheckTable from "../../components/admin/dashboard/CheckTable";
import { ThemeContext } from "../../settings/theme-context";
import ShieldMoonSharpIcon from "@mui/icons-material/ShieldMoonSharp";
export default function DashBoardPage() {
  const { theme } = useContext(ThemeContext);
  const title = "CheckTable";
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
  ];

  return (
    <div className="relative w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Dashboard"}></EBreadcrumb>
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
          <CheckTable />
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
          <CheckTable />
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
          <CheckTable />
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
          <CheckTable />
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
          <CheckTable />
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
          <CheckTable />
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
          <CheckTable />
        </div>
      </div>
    </div>
  );
}

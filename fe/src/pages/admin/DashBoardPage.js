import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import EBreadcrumb from "../../component/admin/common/EBreadcrumb";
import CheckTable from "../../component/admin/dashboard/CheckTable";
import { ThemeContext } from "../../settings/theme-context";

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
    <div className=" w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Dashboard"} />
      <div className="grid grid-cols-3 gap-4 m-6 p-2">
        {/* Table 1 */}
        <div
          class="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>

        {/* Table 2 */}
        <div
          class="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 2"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>

        {/* Table 3 */}
        <div
          class="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 3"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 m-6 p-2">
        {/* Table 1 */}
        <div
          class="p-4 col-span-2 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>

        {/* Table 2 */}
        <div
          class="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 2"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 m-6 mb-0 pb-6 p-2">
        {/* Table 1 */}
        <div
          class="p-4 col-span-1 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>

        {/* Table 2 */}
        <div
          class="p-4 col-span-2 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 2"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              <FontAwesomeIcon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                color={theme.color}
                icon={"fas fa-ellipsis"}
              ></FontAwesomeIcon>
            </span>
          </div>
          <CheckTable />
        </div>
      </div>
    </div>
  );
}

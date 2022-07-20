import { useContext } from "react";
import EBreadcrumb from "../../component/admin/common/EBreadcrumb";
import ETable from "../../component/admin/common/ETable";
import { ThemeContext } from "../../settings/theme-context";
import MenuIcon from "@material-ui/icons/Menu";
const UserList = () => {
  const { theme } = useContext(ThemeContext);
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: "User List",
      path: "/admin/users",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"User List"} />
      <div className="grid grid-cols-1 gap-4 m-6 p-2">
        {/* Table 1 */}
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span className={"rounded-full " + theme.backgroundColorWithHover}>
              {/* <Icon
                className={"hover-pointer p-2"}
                height="24"
                width="24"
                
              ></Icon> */}
              <MenuIcon />
            </span>
          </div>
          <ETable />
        </div>
      </div>
    </div>
  );
};

export default UserList;

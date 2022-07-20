import {
  Button,
  ButtonBase,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import EBreadcrumb from "../../components/admin/common/EBreadcrumb";
import ETable from "../../components/admin/common/ETable";
import { ThemeContext } from "../../settings/theme-context";

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
    <div className="relative w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        {" "}
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"User List"} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 p-2">
        <div className="flex flex-row justify-start items-center w-content">
          <Button className="mr-4" variant="contained">
            Contained
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          {/* <div className="w-full flex flex-row justify-between items-center text-xl font-bold text-left">
            <span>{"Table 1"}</span>
            <span>
              <MenuIcon className={"p-1 rounded-full " + theme.backgroundColorWithHover} />
            </span>
          </div> */}

          <div className="w-full ">
            <ETable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

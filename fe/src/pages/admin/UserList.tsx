import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EBreadcrumb from "../../components/admin/common/EBreadcrumb";
import ICustomTable, { IColumn } from "../../components/table/ICustomTable";
import { ThemeCustomContext } from "../../settings/theme-context";
import UserAction from "../../redux/actions/UserAction";
import moment from "moment-timezone";
import { IRootState } from "../../redux/configStore";

const UserList = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeCustomContext);
  const { listUser } = useSelector((state: IRootState) => state.UserReducer);

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

  const data = {
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
    rows: listUser,
  };

  useEffect((listUser = UserAction.listUser()) => {
    dispatch(listUser);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        {" "}
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"User List"} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div className="flex flex-row justify-start items-center w-content">
          <Button className="mr-4" variant="contained">
            Create
          </Button>
          {/* <Button variant="contained" href="#contained-buttons">
            Link
          </Button> */}
        </div>
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full ">
            <ICustomTable data={data}></ICustomTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

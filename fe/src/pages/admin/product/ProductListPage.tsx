import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import ICustomTable, { IColumn, IData } from "../../../components/table/ICustomTable";
import { IRootState } from "../../../redux/configStore";
import { IProduct } from "../../../service/ProductService";
import ProductAction from "../../../redux/actions/ProductAction";
import { ThemeCustomContext } from "../../../settings/theme-context";

export default function ProductListPage() {
  const { theme } = useContext(ThemeCustomContext);
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: "Product List",
      path: "/admin/products",
    },
  ];
  const dispatch = useDispatch();
  const { listProduct } = useSelector((state: IRootState) => state.ProductReducer);
  const data: IData<IProduct> = {
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
        minWidth: "20%",
        align: "left",
        alignHeader: "center",
        sortable: true,
      },
      {
        id: "action",
        label: "",
        minWidth: "15%",
        align: "center",
        alignHeader: "center",
        actions: ["edit", "delete"],
      },
    ] as IColumn[],
    rows: listProduct.map((i: IProduct, index: number) => ({ ...i, no: index + 1 })) as IProduct[],
  };

  useEffect((listProduct = ProductAction.listProduct()) => {
    dispatch(listProduct);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={"Product List"} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div className="flex flex-row justify-start items-center w-content">
          {/* <Link to="/admin/staffs/create">
            <Button className="mr-4 elevation-1" variant="contained" disableRipple>
              Create
            </Button>
          </Link> */}
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
}

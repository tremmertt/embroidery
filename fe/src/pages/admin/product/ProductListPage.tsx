import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import ICustomTable, { IColumn, IData } from "../../../components/table/ICustomTable";
import { IRootState } from "../../../redux/configStore";
import { IProduct, ISize, ITypeProduct } from "../../../service/ProductService";
import ProductAction from "../../../redux/actions/ProductAction";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { useTranslation } from "react-i18next";

export default function ProductListPage() {
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();
  const breadcrumbItems = [
    {
      name: t("Home"),
      path: "/admin",
    },
    {
      name: t("product.ProductList"),
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
        minWidth: 120,
        align: "left",
        alignHeader: "center",
        sortable: true,
        searchable: true,
      },
      {
        id: "category",
        label: "Category",
        minWidth: 70,
        align: "left",
        alignHeader: "center",
        sortable: true,
        searchable: true,
      },
      {
        id: "price",
        label: "Price",
        minWidth: 50,
        align: "center",
        alignHeader: "center",
        sortable: true,
        searchable: true,
      },
      {
        id: "size",
        label: "Size",
        minWidth: 100,
        width: 70,
        align: "center",
        alignHeader: "center",
        sortable: false,
        searchable: true,
        format: (value: ISize) => `[${value.length},${value.width},${value.height}]`,
      },
      {
        id: "listColor",
        label: "Color",
        width: 90,
        minWidth: 90,
        align: "left",
        alignHeader: "center",
        sortable: false,
        searchable: true,
        format: (value: string[]) => value.join(","),
      },
      {
        id: "listTypeProduct",
        label: "Type",
        minWidth: "10%",
        align: "left",
        alignHeader: "center",
        sortable: false,
        searchable: true,
        format: (value: ITypeProduct[]) => value.map((i) => `${i.type.split(".")[1]}`).join(","),
      },
      {
        id: "content",
        label: "Content",
        minWidth: "10%",
        align: "left",
        alignHeader: "center",
        sortable: false,
        searchable: true,
      },

      {
        id: "action",
        label: "",
        minWidth: 70,
        align: "center",
        alignHeader: "center",
        actions: [
          { action: "edit", path: "/admin/product/edit" },
          { action: "delete", path: "#" },
        ],
      },
    ] as IColumn[],
    rows: listProduct.map((i: IProduct, index: number) => ({ ...i, no: index + 1 })) as IProduct[],
  };

  useEffect((listProduct = ProductAction.listProduct()) => {
    dispatch(listProduct);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full py-4" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("product.ProductList")} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div className="flex flex-row justify-start items-center w-content">
          <Link to="/admin/products/create">
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
}

import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { useTranslation } from "react-i18next";
import EBreadcrumb from "../../../components/admin/common/EBreadcrumb";
import StaffAction from "../../../redux/actions/StaffAction";
import FormCreateProduct from "./form/FormCreateProduct";

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();

  const breadcrumbItems = [
    {
      name: "Home",
      path: "/admin",
    },
    {
      name: t("product.ProductList"),
      path: "/admin/products",
    },
    {
      name: t("product.CreateProduct"),
      path: "/admin/products/create",
    },
  ];

  useEffect((listStaff = StaffAction.listStaff()) => {
    dispatch(listStaff);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full h-screen" style={{ backgroundColor: "transparent", color: theme.color }}>
      <div className="sticky top-0 z-50">
        {" "}
        <EBreadcrumb breadcrumbItems={breadcrumbItems} title={t("product.ProductList")} />
      </div>
      <div className="grid grid-cols-1 gap-4 m-6 mt-2 p-2">
        <div
          className="p-4 flex flex-col justify-center items-center rounded-lg"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="w-full">
            <FormCreateProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;

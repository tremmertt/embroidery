import { useEffect } from "react";
import SearchParams from "../../custom/SearchParams";
import { useDispatch, useSelector } from "react-redux";
import LoginAction from "../../redux/actions/LoginAction";
import LoginService from "service/LoginService";
export default function LoginSuccess() {
  const { customer } = useSelector((state: any) => state.LoginReducer);
  const [searchParams] = SearchParams.useCustomSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = LoginService.getToken();
    if (token === "") {
      dispatch(
        LoginAction.loginBySocialMediaAction("google", {
          state: (searchParams as any).state,
          code: (searchParams as any).code,
        })
      );
    }
  });

  return (
    <div>
      {customer ? (
        <div className="flex-col text-center">
          <div>{customer.id}</div>
          <div>{customer.name}</div>
          <div>{customer.email}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

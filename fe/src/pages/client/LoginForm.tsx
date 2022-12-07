import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginService from "../../service/LoginService";
import { useTranslation } from "react-i18next";
import useTitle from "../../components/general/useTitle";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ThemeCustomContext } from "settings/theme-context";
import RuleTextField from "custom/RuleTextField";
import LoginAction from "redux/actions/LoginAction";
import "../../components/client/home/Inquiry.css";
import DefaultButton from "custom/DefaultButton";

export default function LoginForm(props: any) {
  const { theme } = useContext(ThemeCustomContext);
  const { t } = useTranslation();
  useTitle(t("login.LoginPage"));

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorObj, setErrorObj] = useState({
    email: {
      isValid: true,
      messageErrors: [] as string[],
    },
    password: {
      isValid: true,
      messageErrors: [] as string[],
    },
  });

  const validateForm = () => {
    let isValid = true;
    isValid = checkValid(email, "email", "required|email") && isValid;
    isValid = checkValid(password, "password", "required|password") && isValid;
    setIsFormValid(!isValid);
    return isValid;
  };

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("valid form");
      dispatch(
        LoginAction.loginByEmailAction({
          email: email,
          password: password,
        })
      );
    } else {
      console.log("inValid form");
    }
  };
  const checkValid = (
    value: string,
    field: "email" | "password",
    rules = "required",
    valueConfirm?: string,
    fieldConfirm?: string
  ) => {
    const { isValid, messages } = RuleTextField.checkValid(value, field, rules, valueConfirm, fieldConfirm);

    if (isValid) {
      errorObj[field].isValid = true;
      errorObj[field].messageErrors = [];
      setErrorObj(errorObj);
    } else {
      errorObj[field].isValid = false;
      errorObj[field].messageErrors = messages;
      setErrorObj(errorObj);
      setIsFormValid(false);
    }
    return isValid;
  };

  const getUrlLogin = async (media: string) => {
    const { url, state } = await LoginService.getUrlLogin(media);
    // window.location.href = url;
    window.open(url, "abc", "menubar=1,resizable=1,width=450,height=650");
  };
  const { customer } = useSelector((state: any) => state.LoginReducer);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (customer) {
  //     navigate("/");
  //   }
  // });

  const setValue = (value: string, field: "email" | "password", rules = "required") => {
    const { isValid, messages } = RuleTextField.checkValid(value, field, rules);
    if (isValid) {
      console.log("valid", field, value);
      errorObj[field].isValid = true;
      errorObj[field].messageErrors = [];
      setErrorObj(errorObj);
    } else {
      console.log("invalid", field, value);
      errorObj[field].isValid = false;
      errorObj[field].messageErrors = messages;
      setErrorObj(errorObj);
    }
    if (field === "email") setEmail(value);
    else if (field === "password") setPassword(value);
  };

  return (
    <div>
      <section className="py-16" style={{ height: 500 }}>
        <div className="md:px-6 px-2 text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
            <div className="px-2 grow-0 shrink-1 md:shrink-0 basis-auto w-full md:w-9/12 mb-12 md:mb-0">
              <form onSubmit={loginHandler}>
                {/* Email input */}
                <div className="mb-6">
                  <TextField
                    /* styles the wrapper */
                    sx={{
                      backgroundColor: theme.colorMain,
                      height: theme.textFieldHeightPrimary,
                      input: { color: "gray", backgroundColor: "white" },
                    }}
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: theme.textFieldHeightPrimary,
                        padding: "0 14px",
                      },
                    }}
                    size="medium"
                    className="my-1 inputNoneRounded"
                    fullWidth
                    error={!errorObj.email.isValid}
                    variant="outlined"
                    id="emailInputSignUp"
                    placeholder="Email Address"
                    helperText={errorObj.email.messageErrors ? errorObj.email.messageErrors[0] : ""}
                    onChange={(evt) => {
                      setEmail(evt.target.value);
                      checkValid(evt.target.value, "email", "required|email");
                    }}
                    value={email}
                    autoComplete="on"
                    type="text"
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <TextField
                    /* styles the wrapper */
                    sx={{
                      backgroundColor: theme.colorMain,
                      height: theme.textFieldHeightPrimary,
                    }}
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: theme.textFieldHeightPrimary,
                        padding: "0 14px",
                      },
                    }}
                    className="my-1 inputNoneRounded"
                    fullWidth
                    error={!errorObj.password.isValid}
                    variant="outlined"
                    id="passwordInputSignUp"
                    placeholder="Password"
                    helperText={errorObj.password.messageErrors ? errorObj.password.messageErrors[0] : ""}
                    onChange={(evt) => {
                      setPassword(evt.target.value);
                      checkValid(evt.target.value, "password", "required|password");
                    }}
                    value={password}
                    autoComplete="on"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={() => setShowPassword(true)}
                            onMouseDown={() => setShowPassword(false)}
                            edge="end"
                          >
                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                      Remember me
                    </label>
                  </div>
                  <a href="#forgot-password" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center lg:text-left">
                  <span onClick={(e) => loginHandler(e)}>
                    <DefaultButton
                      id="loginButton"
                      className="rounded-3xl box-button-2"
                      variant="contained"
                      value="Login"
                      type="small"
                    />
                  </span>

                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account? &nbsp;
                    <span
                      onClick={props.transitionToSignUpForm}
                      className="cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </span>
                  </p>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    onClick={() => getUrlLogin("google")}
                    style={{
                      backgroundColor: theme.primaryTextColor,
                    }}
                  >
                    {/* Google */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 512" className="w-4 h-4">
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      />
                    </svg>
                  </button>
                  {/* <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    style={{
                      backgroundColor: theme.primaryTextColor,
                    }}
                    className="inline-block p-3 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

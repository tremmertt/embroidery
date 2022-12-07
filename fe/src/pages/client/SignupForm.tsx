import { Visibility, VisibilityOff } from "@material-ui/icons";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeCustomContext } from "settings/theme-context";
import RuleTextField from "../../custom/RuleTextField";
import { useTranslation } from "react-i18next";
import useTitle from "../../components/general/useTitle";
import { useDispatch, useSelector } from "react-redux";
import LoadingAction from "redux/actions/LoadingAction";
import LoginService from "service/LoginService";
import { toast } from "react-toastify";
import "../../components/client/home/Inquiry.css";
import DefaultButton from "custom/DefaultButton";

export default function SignupForm(props: any) {
  const { isLoading } = useSelector((state: any) => state.LoadingReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useTitle(t("login.SignUpPage"));

  const { theme } = useContext(ThemeCustomContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [errorObj, setErrorObj] = useState({
    name: {
      isValid: true,
      messageErrors: [] as string[],
    },
    email: {
      isValid: true,
      messageErrors: [] as string[],
    },
    password: {
      isValid: true,
      messageErrors: [] as string[],
    },
    confirmPassword: {
      isValid: true,
      messageErrors: [] as string[],
    },
  });

  const validateForm = () => {
    let isValid = true;
    isValid = checkValid(name, "name", "required|normalText") && isValid;
    isValid = checkValid(email, "email", "required|email") && isValid;
    isValid = checkValid(password, "password", "required|password") && isValid;
    isValid =
      checkValid(confirmPassword, "confirmPassword", "required|password|confirmPassword", password, "password") &&
      isValid;
    setIsFormValid(!isValid);
    return isValid;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsFormValid(false);
  };

  const signUpHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("valid form");
      dispatch(LoadingAction.displayLoading());
      await LoginService.signUpByEmail({
        email: email,
        name: name,
        password: password,
      })
        .then((res) => {
          if (res.status === 200) {
            toast(`Sign up is successful, please check your email!`, { type: "success" });
          }
          resetForm();
          return res.data;
        })
        .catch((err) => {
          console.log("error", { ...err });
          if (err.response.status === 409) {
            toast(err.response.data.message, { type: "error" });
          }
        });
      dispatch(LoadingAction.hideLoading());
    } else {
      console.log("inValid form");
    }
  };
  const checkValid = (
    value: string,
    field: "name" | "email" | "password" | "confirmPassword",
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

  return (
    <div>
      <section className="py-16" style={{ height: 500 }}>
        <div className="md:px-6 px-2 text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
            <div className="px-2 grow-0 shrink-1 md:shrink-0 basis-auto w-full md:w-9/12 mb-12 md:mb-0">
              <form className="rounded-2xl px-2" onSubmit={signUpHandler}>
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
                    error={!errorObj.name.isValid}
                    variant="outlined"
                    id="nameInputSignUp"
                    placeholder="Full Name"
                    helperText={errorObj.name.messageErrors ? errorObj.name.messageErrors[0] : ""}
                    onChange={(evt) => {
                      setName(evt.target.value);
                      checkValid(evt.target.value, "name", "required|normalText|min:6|max:32");
                    }}
                    value={name}
                    type="text"
                  />
                </div>
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
                            aria-label="toggle password visibility"
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
                    error={!errorObj.confirmPassword.isValid}
                    variant="outlined"
                    id="confirmPasswordInputSignUp"
                    placeholder="Confirm Password"
                    helperText={errorObj.confirmPassword.messageErrors ? errorObj.confirmPassword.messageErrors[0] : ""}
                    onChange={(evt) => {
                      setConfirmPassword(evt.target.value);
                      checkValid(
                        evt.target.value,
                        "confirmPassword",
                        "required|password|confirmPassword",
                        password,
                        "password"
                      );
                    }}
                    value={confirmPassword}
                    autoComplete="on"
                    type={showConfirmPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={() => setShowConfirmPassword(true)}
                            onMouseDown={() => setShowConfirmPassword(false)}
                            edge="end"
                          >
                            {!showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <span onClick={(e) => signUpHandler(e)}>
                    <DefaultButton
                      id="loginButton"
                      className="rounded-3xl box-button-2"
                      variant="contained"
                      value="Sign Up"
                      type="small"
                    />
                  </span>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Do you have an account? &nbsp;
                    <span
                      onClick={props.transitionToLoginForm}
                      className="cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeCustomContext } from "settings/theme-context";
import RuleTextField from "../../custom/RuleTextField";
import { useTranslation } from "react-i18next";
import useTitle from "../../components/general/useTitle";

export default function Signup() {
  const { t } = useTranslation();
  useTitle(t("login.SignUpPage"));
  const { theme } = useContext(ThemeCustomContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const signUpHandler = () => {};

  // console.log("name: " + name);
  // console.log("email: " + email);
  // console.log("password: " + password);
  // console.log("confirmPassword: " + confirmPassword);

  const submit = (e: React.FormEvent) => {
    console.log(submit);
  };

  const setValue = (value: string, field: "name" | "email" | "password" | "confirmPassword", rules = "required") => {
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
    if (field === "name") setName(value);
    else if (field === "email") setEmail(value);
    else if (field === "password") setPassword(value);
    else if (field === "confirmPassword") setConfirmPassword(value);
  };

  return (
    <div>
      <section className="h-full md:py-24 py-12">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h1 className="text-red-900 font-semibold text-4xl pb-6 text-center"> SIGN UP </h1>
              <form className="rounded-2xl" onSubmit={(e) => submit(e)} noValidate={false}>
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
                    fullWidth
                    error={!errorObj.name.isValid}
                    variant="outlined"
                    id="nameInputSignUp"
                    placeholder="Full Name"
                    helperText={errorObj.name.messageErrors ? errorObj.name.messageErrors[0] : ""}
                    onChange={(evt) => setValue(evt.target.value, "name", "required|normalText")}
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
                    fullWidth
                    error={!errorObj.email.isValid}
                    variant="outlined"
                    id="emailInputSignUp"
                    placeholder="Email Address"
                    helperText={errorObj.email.messageErrors ? errorObj.email.messageErrors[0] : ""}
                    onChange={(evt) => setValue(evt.target.value, "email", "required")}
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
                    fullWidth
                    error={!errorObj.password.isValid}
                    variant="outlined"
                    id="passwordInputSignUp"
                    placeholder="Password"
                    helperText={errorObj.password.messageErrors ? errorObj.password.messageErrors[0] : ""}
                    onChange={(evt) => setValue(evt.target.value, "password", "required")}
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
                    fullWidth
                    error={!errorObj.confirmPassword.isValid}
                    variant="outlined"
                    id="confirmPasswordInputSignUp"
                    placeholder="Confirm Password"
                    helperText={errorObj.confirmPassword.messageErrors ? errorObj.confirmPassword.messageErrors[0] : ""}
                    onChange={(evt) => setValue(evt.target.value, "confirmPassword", "required")}
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
                  <button
                    type="button"
                    onClick={(e) => submit(e)}
                    className="inline-block px-7 py-3 bg-red-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Do you have an account? &nbsp;
                    <a
                      href="/login"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

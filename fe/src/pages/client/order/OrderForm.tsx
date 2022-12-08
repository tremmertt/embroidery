import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button, Typography } from "@mui/material";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import { ThemeCustomContext } from "settings/theme-context";
import { useDispatch, useSelector } from "react-redux";
import DefaultButton from "custom/DefaultButton";
import "../../../components/client/home/Inquiry.css";
import LoginAction from "redux/actions/LoginAction";
import { toast } from "react-toastify";
import OrderTable from "./OrderTable";

export default function OrderForm() {
  const dispatch = useDispatch();
  const { customer } = useSelector((state: any) => state.LoginReducer);
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const steps = ["Login", "Fill into form", "Confirm order"];
  const [form, setForm] = useState<"login" | "signup" | "none">("none");
  const [isFocusedScreen, setIsFocusedScreen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  // console.log("isFocusedScreen", isFocusedScreen, customer);

  const onFocus = () => {
    setIsFocusedScreen(true);
    if (!customer) {
      dispatch(LoginAction.getCustomer());
    }
  };
  const onBlur = () => {
    setIsFocusedScreen(false);
  };

  useEffect(() => {
    if (isFocusedScreen && form !== "none") {
      if (customer) {
        setForm("none");
      }
    } else {
      setForm("login");
    }
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    // Calls onFocus when the window first loads
    onFocus();
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, [isFocusedScreen, customer, dispatch]);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleLogout = (e: any) => {
    dispatch(LoginAction.logout());
    setForm("login");
  };

  const handleStep1 = () => {
    return (
      <React.Fragment>
        {form === "login" ? (
          <LoginForm transitionToSignUpForm={() => setForm("signup")} />
        ) : form === "signup" ? (
          <SignupForm transitionToLoginForm={() => setForm("login")} />
        ) : customer ? (
          <div className="grid grid-cols-2 text-center gap-3 py-16">
            <div className="col-span-1">Name: </div>
            <div className="col-span-1 text-left">{customer.name}</div>

            <div className="col-span-1">Email: </div>
            <div className="col-span-1 text-left">{customer.email}</div>

            <div className="col-span-2 pt-8" onClick={(e) => handleLogout(e)}>
              <DefaultButton
                id="loginButton"
                className="rounded-3xl box-button-2"
                variant="contained"
                value="Logout"
                type="small"
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext} disabled={form !== "none"}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    );
  };
  const handleStep2 = () => {
    return (
      <React.Fragment>
        <OrderTable />
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
        </Box>
      </React.Fragment>
    );
  };
  const handleStep3 = () => {
    return (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
        </Box>
      </React.Fragment>
    );
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{ width: "100%", height: "100%" }}
      className="flex justify-center items-center py-4"
      style={{
        backgroundImage: "url(" + require("../../../assets/v2/bg/bg_pc_5.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box className="py-8" style={{ width: 750, minHeight: 600 }}>
        <div className="text-center pb-8" style={{ fontSize: styleE.fontSize42, color: theme.primaryTextColor }}>
          Order Form
        </div>
        <Stepper activeStep={activeStep} style={{ color: "red" }}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : activeStep === 0 ? (
          handleStep1()
        ) : activeStep === 1 ? (
          handleStep2()
        ) : (
          handleStep3()
        )}
      </Box>
    </Box>
  );
}

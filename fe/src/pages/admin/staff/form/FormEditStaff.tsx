import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, TextField, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import { ThemeCustomContext } from "../../../../settings/theme-context";
import { IStaff } from "../../../../service/StaffService";

const myHelper = {
  email: {
    required: "Email is required",
    pattern: "Invalid email address",
  },
  phone: {
    required: "Phone is required",
    pattern: "Invalid phone",
  },
};

export default function FormEditStaff(props: { staffItem: IStaff }) {
  const { theme } = useContext(ThemeCustomContext);
  const { control, reset, handleSubmit } = useForm({
    reValidateMode: "onBlur",
    defaultValues: useMemo(() => {
      return props.staffItem;
    }, [props]),
  });

  useEffect(() => {
    reset(props.staffItem);
  }, [props.staffItem]);

  const handleOnSubmit = (evt: any) => {
    console.log(evt);
  };

  const fixColum = (field: any, title: string, form: any) => {
    return (
      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={1} className="flex items-center justify-start font-bold" style={{ color: theme.color }}>
          {title}
        </Grid>
        <Grid item md={5}>
          {form}
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    );
  };

  return (
    <div className="py-4">
      <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
        {props.staffItem ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="name"
                render={({ field }) =>
                  fixColum(
                    field,
                    "Name",
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          color: theme.color,
                          backgroundColor: theme.backgroundColor,
                          borderColor: theme.color + " !important",
                          borderWidth: "1px",
                        },
                      }}
                    />
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                }}
                render={({ field, fieldState: { error } }) =>
                  fixColum(
                    field,
                    "Email",
                    <TextField
                      {...field}
                      type="email"
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          color: theme.color,
                          backgroundColor: theme.backgroundColor,
                          borderColor: theme.color + " !important",
                          borderWidth: "1px",
                        },
                      }}
                      error={error !== undefined}
                      helperText={error ? (myHelper as any).email[error.type] : ""}
                    />
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="phone"
                rules={{
                  required: true,
                  pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                }}
                render={({ field, fieldState: { error } }) =>
                  fixColum(
                    field,
                    "Phone",
                    <TextField
                      {...field}
                      type="phone"
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          color: theme.color,
                          backgroundColor: theme.backgroundColor,
                          borderColor: theme.color + " !important",
                          borderWidth: "1px",
                        },
                      }}
                      error={error !== undefined}
                      helperText={error ? (myHelper as any).phone[error.type] : ""}
                    />
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="role"
                render={({ field }) =>
                  fixColum(
                    field,
                    "Role",
                    <TextField
                      {...field}
                      select
                      variant={"outlined"}
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          color: theme.color,
                          backgroundColor: theme.backgroundColor,
                          borderColor: theme.color + " !important",
                          borderWidth: "1px",
                        },
                      }}
                    >
                      <MenuItem key={"admin"} value="admin">
                        Admin
                      </MenuItem>
                      <MenuItem key={"user"} value="user">
                        User
                      </MenuItem>
                    </TextField>
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-row justify-center items-center">
                <Link to="/admin/staffs">
                  <Button
                    className="mr-4"
                    style={{
                      backgroundColor: theme.backgroundColor,
                      color: theme.colorMint,
                      borderColor: theme.colorMint,
                    }}
                    variant="outlined"
                  >
                    Back
                  </Button>
                </Link>
                <Button type="submit" className="mr-4" variant="contained">
                  Edit
                </Button>
              </div>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
}

import * as React from "react";
import { ThemeCustomContext } from "../../../../settings/theme-context";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/configStore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import SettingsSuggestSharpIcon from "@mui/icons-material/SettingsSuggestSharp";
import FitScreenSharpIcon from "@mui/icons-material/FitScreenSharp";
import BorderColorSharpIcon from "@mui/icons-material/SupervisorAccountSharp";
import img from "../../../../assets/avatar/20220606-201051.jpeg";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
}));

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { theme } = React.useContext(ThemeCustomContext);
  const { lang } = useSelector((state: IRootState) => state.LanguageReducer);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selections = [
    { title: t("profile.Profile"), icon: <PersonSharpIcon />, path: "/admin/profile" },
    { title: t("setting.Setting"), icon: <SettingsSuggestSharpIcon />, path: "/admin/setting" },
    { title: t("auth.Logout"), icon: <Logout />, path: "/logout" },
  ];
  const importantSelections = [
    { title: t("dashboard.Dashboard"), icon: <FitScreenSharpIcon />, path: "/admin" },
    { title: t("order.Order"), icon: <BorderColorSharpIcon />, path: "/admin/orders" },
  ];
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        style={{ backgroundColor: "transparent", color: theme.color }}
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        {/* <Typography sx={{ minWidth: 70 }}>Contact</Typography>
        <Typography sx={{ minWidth: 70 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2, p: 0, mt: 1 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar alt="Remy Sharp" src={img} sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          classes: { padding: classes.padding },
        }}
        PaperProps={{
          elevation: 1,
          sx: {
            width: lang === "en" ? 170 : 210,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            borderRadius: 3,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 12,
              height: 12,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {importantSelections.map((i) => (
          <Link to={i.path} key={i.title}>
            <MenuItem
              sx={{
                padding: 1.2,
                paddingLeft: 2.2,
              }}
            >
              <ListItemIcon>{i.icon}</ListItemIcon>
              <Typography classes={classes} className="p-5">
                {i.title}
              </Typography>
            </MenuItem>
          </Link>
        ))}
        <Divider />
        {selections.map((i) => (
          <Link to={i.path} key={i.title}>
            <MenuItem
              sx={{
                padding: 1.2,
                paddingLeft: 2.2,
              }}
            >
              <ListItemIcon>{i.icon}</ListItemIcon>
              {i.title}
            </MenuItem>
          </Link>
        ))}{" "}
      </Menu>
    </React.Fragment>
  );
}

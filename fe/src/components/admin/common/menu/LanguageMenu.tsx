import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ThemeCustomContext } from "../../../../settings/theme-context";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";
import en from "../../../../assets/flag/en.png";
import vn from "../../../../assets/flag/vn.png";
import { useDispatch, useSelector } from "react-redux";
import { i18n } from "../../../../translations/i18n";
import { IRootState } from "../../../../redux/configStore";
import LanguageAction from "../../../../redux/actions/LanguageAction";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
}));

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { theme } = React.useContext(ThemeCustomContext);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const handleOnChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    dispatch(LanguageAction.setLanguage(lang));
  };
  const { lang } = useSelector((state: IRootState) => state.LanguageReducer);
  const selections = [
    { title: t("lang.English"), code: "en" },
    { title: t("lang.Vietnamese"), code: "vn" },
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
            <Avatar alt="Remy Sharp" src={lang === "en" ? en : vn} sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        MenuListProps={{
          classes: { padding: classes.padding },
        }}
        PaperProps={{
          elevation: 1,
          sx: {
            width: 170,
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
        {selections.map((i) => (
          <MenuItem
            key={i.title}
            sx={{
              padding: 1.2,
              paddingLeft: 2.2,
            }}
            onClick={() => handleOnChangeLanguage(i.code)}
          >
            {i.title}
          </MenuItem>
        ))}{" "}
      </Menu>
    </React.Fragment>
  );
}

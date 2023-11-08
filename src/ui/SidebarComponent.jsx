import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";

import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";

import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";

function SidebarComponent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Sidebar backgroundColor={`${colors.primary[400]}`}>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
            "&:hover": {
              backgroundColor: `${colors.primary[300]} !important`,
              color: "white !important",
            },
          },
        }}
      >
        <Box display="flex" justifyContent="center" sx={{ py: 5 }}>
          <Typography variant="h3">CHANCHOL</Typography>
        </Box>
        <MenuItem
          component={<NavLink to="/overview" />}
          icon={<EqualizerOutlinedIcon />}
        >
          Overview
        </MenuItem>
        <MenuItem
          component={<NavLink to="/salesreport" />}
          icon={<AttachMoneyOutlinedIcon />}
        >
          Sales Report
        </MenuItem>
        <MenuItem
          component={<NavLink to="/inventory" />}
          icon={<Inventory2OutlinedIcon />}
        >
          Inventory
        </MenuItem>
        <MenuItem
          component={<NavLink to="/customer" />}
          icon={<PersonPinCircleOutlinedIcon />}
        >
          Customer
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
export default SidebarComponent;

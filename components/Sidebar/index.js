import { styled, alpha } from "@mui/material/styles";

import {
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
  Collapse,
  ListItemButton,
} from "@mui/material";

import { useState } from "react";

import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import SpeedTwoToneIcon from "@mui/icons-material/SpeedTwoTone";
import CrisisAlertTwoToneIcon from "@mui/icons-material/CrisisAlertTwoTone"
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone"
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone"
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone"
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone"
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone"
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone"
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone"
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone"
import BrandingWatermarkTwoToneIcon from "@mui/icons-material/BrandingWatermarkTwoTone"
import ForwardToInboxTwoToneIcon from "@mui/icons-material/ForwardToInboxTwoTone"

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Sidebar(props) {
  const { window, title, icon, children } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openManagement, setOpenManagement] = useState(true);
  const [openConfiguration, setOpenConfiguration] = useState(true);

  const handleClickManagement = () => {
    setOpenManagement((prevState) => !prevState);
  };

  const handleClickConfiguration = () => {
    setOpenConfiguration((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem onClick={() => router.push("/dashboard")} button>
          <ListItemIcon>
            <SpeedTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItemButton onClick={handleClickManagement}>
          <ListItemText primary="Management" />
          {openManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openManagement} timeout="auto" unmountOnExit>
          <ListItem onClick={() => router.push("/breaches")} button>
            <ListItemIcon>
              <CrisisAlertTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Breaches" />
          </ListItem>
          <ListItem onClick={() => router.push("/customers")} button>
            <ListItemIcon>
              <GroupTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem onClick={() => router.push("/featureRequests")} button>
            <ListItemIcon>
              <DashboardCustomizeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Feature Requests" />
          </ListItem>
          <ListItem onClick={() => router.push("/news")} button>
            <ListItemIcon>
              <NewspaperTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
          <ListItem onClick={() => router.push("/breachCatalogue")} button>
            <ListItemIcon>
              <AutoStoriesTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Breache Catalogue" />
          </ListItem>
          <ListItem onClick={() => router.push("/prospectingReport")} button>
            <ListItemIcon>
              <AssessmentTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Prospecting Report" />
          </ListItem>
          <ListItem onClick={() => router.push("/training")} button>
            <ListItemIcon>
              <SchoolTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Training" />
          </ListItem>
        </Collapse>
        <ListItemButton onClick={handleClickConfiguration}>
          <ListItemText primary="Configuration" />
          {openConfiguration ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openConfiguration} timeout="auto" unmountOnExit>
          <ListItem onClick={() => router.push("/account")} button>
            <ListItemIcon>
              <AccountBoxTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem onClick={() => router.push("/users")} button>
            <ListItemIcon>
              <PeopleAltTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem onClick={() => router.push("/branding")} button>
            <ListItemIcon>
              <BrandingWatermarkTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Branding" />
          </ListItem>
          <ListItem onClick={() => router.push("/helpdesk-alerting")} button>
            <ListItemIcon>
              <ForwardToInboxTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Helpdesk Alerting" />
          </ListItem>
        </Collapse>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ marginTop: 67 }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ height: 64 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {icon && icon}
          <Typography
            noWrap
            variant="h6"
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0, display: "flex", flexDirection: "row" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Alexis Toranzo"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "calc(100% - 67px)",
              top: 67,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "calc(100% - 67px)",
              top: 67,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
          marginTop: { xs: "135px" },
        }}
      >
        {children}
      </Box>
    </div>
  );
}

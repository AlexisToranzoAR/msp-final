import Sidebar from "components/Sidebar";
import Head from "components/Head";
import dynamic from "next/dynamic";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import TextField from "components/TextField";
import Button from "components/Button";
import OutlinedInput from "components/OutlinedInput";
import TabPanel from "components/TabPanel";
import { useState } from "react";
import Select from "components/Select";
import CustomerReports from "./components/customerReports";
import BrandingLogo from "./components/brandingLogo";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Branding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head title="Your Branding - MSP" />

      <Sidebar
        title="Your Branding"
        icon={<AccountBoxTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Customer Reports" {...a11yProps(0)} />
                <Tab label="Branding Logo" {...a11yProps(1)} />
                <Tab label="Reports Logo" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CustomerReports />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BrandingLogo />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

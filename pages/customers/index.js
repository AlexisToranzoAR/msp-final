import Sidebar from "components/Sidebar";
import Head from "components/Head";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import IconWithText from "components/IconWithText";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import Link from "next/link";

export default function Breaches() {
  return (
    <>
      <Head title="Customers - MSP" />

      <Sidebar title="Customers" icon={<GroupTwoToneIcon sx={{ mr: 1 }} />}>
        <Grid container spacing={2}>
          <Grid
            xs={12}
            item
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/customers/add">
              <a>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AddBoxOutlinedIcon
                    color="primary"
                    sx={{ height: 30, width: 30, mr: 1 }}
                  />
                  <Typography variant="h5">Add customer</Typography>
                </Box>
              </a>
            </Link>
            <IconWithText
              icon={<LanguageTwoToneIcon sx={{ height: 50, width: 50 }} />}
              text="1/5"
              helperText="Domains"
            />
          </Grid>
          <Grid xs={12} item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Company</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Domain(s)</TableCell>
                    <TableCell>Email(s)</TableCell>
                    <TableCell>Total Compromises</TableCell>
                    <TableCell>Last 30 Days Compromises</TableCell>
                    <TableCell>Reports</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Alexis</TableCell>
                      <TableCell>alexistoranzoar@gmail.com</TableCell>
                      <TableCell>pass****</TableCell>
                      <TableCell>yes</TableCell>
                      <TableCell>Google</TableCell>
                      <TableCell>2021/05/21</TableCell>
                      <TableCell>unknown</TableCell>
                      <TableCell>5</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

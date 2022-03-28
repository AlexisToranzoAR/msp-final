import Sidebar from "components/Sidebar";
import Head from "components/Head";
import CrisisAlertTwoToneIcon from "@mui/icons-material/CrisisAlertTwoTone";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TextField from "components/TextField";
import Button from "components/Button";

export default function Breaches() {
  return (
    <>
      <Head title="Breaches - MSP" />

      <Sidebar
        title="Breaches"
        icon={<CrisisAlertTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid xs={12} lg={6} item>
            <Grid container spacing={2}>
              <Grid xs={4} item>
                <TextField
                  fullWidth
                  id="domainSearch"
                  label="Domain Search"
                  placeholder="Enter the domain"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={4} item>
                <TextField
                  fullWidth
                  id="emailSearch"
                  label="Email Search"
                  placeholder="Enter the email"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid xs={4} item>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Decrypted Password</TableCell>
                    <TableCell>Breach Source</TableCell>
                    <TableCell>Breach Date</TableCell>
                    <TableCell>Publish Date</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell>Alert Sent</TableCell>
                    <TableCell>Resend Alert</TableCell>
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
                      <TableCell>yes</TableCell>
                      <TableCell>Create ticket</TableCell>
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

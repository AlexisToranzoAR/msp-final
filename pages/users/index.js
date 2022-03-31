import Sidebar from "components/Sidebar";
import Head from "components/Head";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import {
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
import TextField from "components/TextField";
import Button from "components/Button";

export default function Users() {
  return (
    <>
      <Head title="Users - MSP" />

      <Sidebar title="Users" icon={<PeopleAltTwoToneIcon sx={{ mr: 1 }} />}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Typography variant="h5">Add User</Typography>
          </Grid>
          <Grid xs={12} lg={9} item>
            <Grid container spacing={2}>
              <Grid xs={12} lg={3} item>
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  placeholder="Enter the first name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={12} lg={3} item>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  placeholder="Enter the last name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={12} lg={3} item>
                <TextField
                  fullWidth
                  id="emailAddress"
                  label="Email Address"
                  placeholder="Enter the email"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={12} lg={3} item>
                <Button
                  variant="contained"
                  sx={{ height: { lg: 56, xs: "large" } }}
                  fullWidth
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} lg={9} item>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>2FA</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Delete</TableCell>
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
                      <TableCell>yes</TableCell>
                      <TableCell>Google</TableCell>
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

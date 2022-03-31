import Sidebar from "components/Sidebar";
import Head from "components/Head";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import AddIcon from "@mui/icons-material/Add";
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
import OutlinedInput from "components/OutlinedInput";

export default function Account() {
  return (
    <>
      <Head title="Your Account - MSP" />

      <Sidebar
        title="Your Account"
        icon={<AccountBoxTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid lg={4} item>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  placeholder="Enter the company name"
                  variant="outlined"
                  value="Alexis MSP"
                  disabled
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="street"
                  label="Street"
                  placeholder="Enter the street"
                  variant="outlined"
                  value="Dr Luis Agote 3574"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="city"
                  label="City"
                  placeholder="Enter the city"
                  variant="outlined"
                  value="Punta Alta"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="postcode"
                  label="Postcode / Zip"
                  placeholder="Enter the postcode or zip"
                  variant="outlined"
                  value="8109"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="companyPhone"
                  label="Company Phone"
                  placeholder="Enter the company phone"
                  variant="outlined"
                  value="+542932578521"
                />
              </Grid>
              <Grid xs={12} item>
                <OutlinedInput
                  fullWidth
                  id="domains"
                  label="Domain(s)"
                  placeholder="Enter the domain"
                  endAdornment={<AddIcon />}
                  helperText="Adding a domain will monitor the entire email domain for your customer and look for any breaches with email addresses in that domain."
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={4} item>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="pcFirstName"
                  label="Primary Contact First Name"
                  placeholder="Enter the first name"
                  variant="outlined"
                  value="Alexis"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="pcLastName"
                  label="Primary Contact Last Name"
                  placeholder="Enter the last name"
                  variant="outlined"
                  value="Toranzo"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="pcEmail"
                  label="Primary Contact Email"
                  placeholder="Enter the email"
                  variant="outlined"
                  value="alexistoranzoar@gmail.com"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="pcTelephone"
                  label="Primary Contact Telephone"
                  placeholder="Enter the telephone"
                  variant="outlined"
                  value="+542932578521"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="website"
                  label="Company Website"
                  placeholder="Enter the website"
                  variant="outlined"
                  value="github.com/alexistoranzoar"
                />
              </Grid>
              <Grid xs={12} item>
                <OutlinedInput
                  fullWidth
                  id="personalEmailAddresses"
                  label="Personal Email Addresses"
                  placeholder="Enter the email"
                  endAdornment={<AddIcon />}
                  helperText="Adding personal email addresses for persons of significant importance within this company will monitor for breaches on that email address only."
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={4} item>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="bcFirstName"
                  label="Billing Contact First Name"
                  placeholder="Enter the first name"
                  variant="outlined"
                  value="Alexis"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="bcLastName"
                  label="Billing Contact Last Name"
                  placeholder="Enter the last name"
                  variant="outlined"
                  value="Toranzo"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="bcEmail"
                  label="Billing Contact Email"
                  placeholder="Enter the email"
                  variant="outlined"
                  value="alexistoranzoar@gmail.com"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="bcTelephone"
                  label="Billing Contact Telephone"
                  placeholder="Enter the telephone"
                  variant="outlined"
                  value="+542932578521"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="invoiceDeliveryEmail"
                  label="Invoice Delivery Email"
                  placeholder="Enter the email"
                  variant="outlined"
                  value="alexistoranzoar@gmail.com"
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  variant="contained"
                  sx={{ height: { lg: 56, xs: "large" } }}
                  fullWidth
                >
                  Upgrade your account
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Domain/Email</TableCell>
                    <TableCell>View Initial Scan</TableCell>
                    <TableCell>Reset Initial Scan</TableCell>
                    <TableCell>Remove</TableCell>
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12} item sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{ width: { xs: "100%", lg: "10%" } }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

import Sidebar from "components/Sidebar";
import Head from "components/Head";
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";
import {
  Grid,
} from "@mui/material";
import TextField from "components/TextField";
import Button from "components/Button";
import Checkbox from "components/Checkbox";

export default function ProspectingReport() {
  return (
    <>
      <Head title="Prospecting Report - MSP" />

      <Sidebar
        title="Prospecting Report"
        icon={<AssessmentTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Grid container spacing={2}>
              <Grid xs={6} lg={3} item>
                <TextField
                  fullWidth
                  id="emailDomain"
                  label="Email / Domain"
                  placeholder="Enter the email or domain"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={6} lg={3} item>
                <TextField
                  fullWidth
                  id="customerName"
                  label="Customer Name"
                  placeholder="Enter the customer name"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid xs={6} lg={3} item>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Search Dark Web
                </Button>
              </Grid>
              <Grid xs={6} lg={3} item>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Previous Searches
                </Button>
              </Grid>
              <Grid xs={12} item>
                <Checkbox label="I acknowledge that I am authorised to search the Dark Web for this Email Address / Domain. The information found will not be used for malicious, illegal or illicit purposes." />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

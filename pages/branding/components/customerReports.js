import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TextField from "components/TextField";
import Button from "components/Button";
import Select from "components/Select";
import dynamic from "next/dynamic";
const Wysiwyg = dynamic(() => import("components/Wysiwyg"), { ssr: false });

export default function CustomerReports() {
  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={12} lg={4} item>
          <Select fullWidth label="Select company" />
        </Grid>
        <Grid xs={12} lg={4} item>
          <TextField
            fullWidth
            id="emailToSend"
            label="Email to Send Report to"
            placeholder="Enter the email"
            variant="outlined"
          />
        </Grid>
        <Grid xs={12} lg={4} item>
          <Button
            variant="contained"
            sx={{ height: { lg: 56, xs: "large" } }}
            fullWidth
          >
            Send Test
          </Button>
        </Grid>
        <Grid xs={12} item>
          <Typography>
            The customer monthly reports are sent on the 1st of each month and
            include a report of the last 30 days. If the customer has had
            breaches in the last 30 days then they will receive a PDF report
            with your MSP branding and details of the breaches that have
            occured. If they have not had any breaches then they will receive
            the email below for clean bill of health.
          </Typography>
          <Typography>
            You are required to set up your content for the accompanying emails
            in your branding tab.
          </Typography>
          <Typography variant="body2">
            (Monthly Customer Report Emails will be sent from:
            noreply@darkwebsecurity.cloud. Please ensure you white list this
            email address with your clients to ensure smooth delivery of the
            monthly report)
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid xs={12} lg={6} item>
                  <Typography variant="h5">Customer Report Email</Typography>
                  <TextField
                    sx={{ my: 1 }}
                    fullWidth
                    id="customerReportEmailSubject"
                    label="Customer Report Email Subject - Leave unchanged for the default subject format"
                    placeholder="Enter the email"
                    variant="outlined"
                    value="Dark Web Alert - %%companyName%% - %%firstName%% %%lastName%%"
                  />
                  <Typography>
                    Variables allowed in the subject are: %%companyName%%,
                    %%firstName%%, %%lastName%%, %%reportFrequency%%
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Typography sx={{ mb: 1 }} variant="h5">
                    Customer Report Email Body
                  </Typography>
                  <Wysiwyg />
                </Grid>
                <Grid xs={12} item>
                  <Typography sx={{ mb: 1 }} variant="h5">
                    Customer Report Clean Bill of Health Email Body
                  </Typography>
                  <Wysiwyg />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

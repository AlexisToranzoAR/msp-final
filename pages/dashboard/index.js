import Sidebar from "components/Sidebar";
import Head from "components/Head";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CardContent,
  Card,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import IconWithText from "components/IconWithText";

import { red, grey } from "@mui/material/colors";
import CrisisAlertTwoToneIcon from "@mui/icons-material/CrisisAlertTwoTone";
import FactCheckTwoToneIcon from "@mui/icons-material/FactCheckTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import CorporateFareTwoToneIcon from "@mui/icons-material/CorporateFareTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard - MSP" />

      <Sidebar title="Dashboard">
        <Grid container spacing={2}>
          <Grid xs={6} item>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Grid container>
                  <Grid xs={2} item>
                    <IconWithText
                      icon={
                        <CrisisAlertTwoToneIcon
                          sx={{ height: 50, width: 50 }}
                        />
                      }
                      backgroundColor={red[500]}
                      text="10"
                      helperText="New Breaches"
                    />
                  </Grid>
                  <Grid xs={2} item>
                    <IconWithText
                      icon={
                        <FactCheckTwoToneIcon sx={{ height: 50, width: 50 }} />
                      }
                      text="MSPDW-05"
                      helperText="Subscription"
                    />
                  </Grid>
                  <Grid xs={2} item>
                    <IconWithText
                      icon={
                        <LanguageTwoToneIcon sx={{ height: 50, width: 50 }} />
                      }
                      text="1/5"
                      helperText="Domains"
                    />
                  </Grid>
                  <Grid xs={2} item>
                    <IconWithText
                      icon={
                        <CorporateFareTwoToneIcon
                          sx={{ height: 50, width: 50 }}
                        />
                      }
                      text="2"
                      helperText="Customers"
                    />
                  </Grid>
                  <Grid xs={2} item>
                    <IconWithText
                      icon={<EmailTwoToneIcon sx={{ height: 50, width: 50 }} />}
                      text="2"
                      helperText="Emails"
                    />
                  </Grid>
                  <Grid xs={2} item>
                    <IconWithText
                      icon={
                        <AssessmentTwoToneIcon sx={{ height: 50, width: 50 }} />
                      }
                      text="2"
                      helperText="Prospecting"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} item>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Latest Breaches
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>Plain Text Password</TableCell>
                        <TableCell>Publish Date</TableCell>
                        <TableCell>Breach Source</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <TableRow key={i}>
                          <TableCell>Alexis</TableCell>
                          <TableCell>alexistoranzoar@gmail.com</TableCell>
                          <TableCell>pass****</TableCell>
                          <TableCell>2021/05/21</TableCell>
                          <TableCell>Google</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            {/* Test */}
            <div>
              <p>
                <strong>Great News for MSPs Across the Globe</strong>
              </p>
              <p>
                MSP Dark Web has launched. We are working with MSPs to provide
                Dark Web Security that completes the 3 essential criteria for
                Dark Web Breach data results:
              </p>
              <p>
                <em>
                  1. CURRENT DATA
                  <br /> 2. RELEVANT DATA
                  <br /> 3. TRULY ACTIONABLE DATA
                </em>
              </p>
              <p>
                Take a look around your portal, add your users, add your
                customers, and start your Dark Web Security today.
              </p>
              <p>
                We are here to help you through each step of our partnership.
              </p>
              <p>
                <strong>MSP Dark Web Team</strong>
              </p>
            </div>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Latest News
            </Typography>
            {[1, 2, 3].map((i) => (
              <Card key={i} sx={{ mb: 1 }}>
                <CardContent
                  sx={{
                    backgroundColor: grey[300],
                  }}
                >
                  <div>
                    <p>
                      <span style={{ fontSize: "18" }}>
                        <strong>
                          How can MSP Dark Web increase your Monthly Recurring
                          Revenue?
                        </strong>
                      </span>
                    </p>
                    <p>
                      We were using a dark web scanner that would pull back
                      results on customer breaches from 2016/17/18, what use is
                      5 year old breach data?
                    </p>
                    <p>
                      Your clients will see on their monthly breach report that
                      your are producing current, relevant data from 2021, data
                      on breaches that they can still remediate. If their email
                      and{" "}
                      <strong>PII (Personal Identifiable Information)</strong>{" "}
                      appears on a breach from October 2021, and worse still{" "}
                      <strong>
                        their password appears in plaintext along with their
                        email address
                      </strong>
                      , they can immediately change their passwords.&nbsp;
                    </p>
                    <p>
                      You are providing a{" "}
                      <strong>fantastic Dark Web Security service</strong> at a
                      single monthly cost that covers their entire email domain:{" "}
                      <strong>customer.com</strong> and you even include
                      security for up to 5 of their personal emails,{" "}
                      <strong>all for a small monthly subscription. </strong>
                    </p>
                    <p>
                      <strong>Do the Math:</strong> Your 18 customers pay your
                      monthly subscrition cost for dark web security and you are
                      paying a small percentage of that to MSP Dark Web each
                      month.&nbsp;&nbsp;
                    </p>
                    <p>
                      <strong>Example: </strong>MSPDW-20 Costs you £160 per
                      month and your 18 customers are paying you £80 a month.
                      That is £1440 MRR for your MSP, with a small monthly cost
                      of £160
                    </p>
                    <p>
                      Talk to our team if you need any support or training to
                      get the most from MSP Dark Web.
                    </p>
                    <p>
                      <span
                        style={{ color: "rgb(0,168,133)", fontSize: "18px" }}
                      >
                        <strong>The MSP Dark Web Team</strong>
                      </span>
                    </p>
                    <p>&nbsp;&nbsp;</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

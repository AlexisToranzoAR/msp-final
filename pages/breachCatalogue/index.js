import Sidebar from "components/Sidebar";
import Head from "components/Head";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PasswordTwoToneIcon from "@mui/icons-material/PasswordTwoTone";
import DeviceHubTwoToneIcon from "@mui/icons-material/DeviceHubTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import IconWithText from "components/IconWithText";

export default function BreachCatalogue() {
  return (
    <>
      <Head title="Breach Catalogue - MSP" />

      <Sidebar
        title="Breach Catalogue"
        icon={<AutoStoriesTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Grid container spacing={2}>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={<EmailTwoToneIcon sx={{ height: 50, width: 50 }} />}
                  text="29,417,134,726"
                  helperText="Emails"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={<PasswordTwoToneIcon sx={{ height: 50, width: 50 }} />}
                  text="25,271,121,010"
                  helperText="Password"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={<DeviceHubTwoToneIcon sx={{ height: 50, width: 50 }} />}
                  text="2,276,166,469"
                  helperText="IP Addresses"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={
                    <ContactMailTwoToneIcon sx={{ height: 50, width: 50 }} />
                  }
                  text="7,571,838,006"
                  helperText="Usernames"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={
                    <PersonOutlineTwoToneIcon sx={{ height: 50, width: 50 }} />
                  }
                  text="49,778,424,075"
                  helperText="PII"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={
                    <TravelExploreTwoToneIcon sx={{ height: 50, width: 50 }} />
                  }
                  text="135,397,178"
                  helperText="Geographic Location"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={
                    <LocalPhoneTwoToneIcon sx={{ height: 50, width: 50 }} />
                  }
                  text="4,190,857,407"
                  helperText="Phone Numbers"
                  fullHeight
                />
              </Grid>
              <Grid xs={4} md={3} lg={1.5} item>
                <IconWithText
                  icon={
                    <CreditCardTwoToneIcon sx={{ height: 50, width: 50 }} />
                  }
                  text="741,759,308"
                  helperText="Financial Information"
                  fullHeight
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography>ALL | PRIVATE SOURCES | PUBLIC SOURCES</Typography>
          </Grid>
          <Grid xs={12} item>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Sensitive Source
                  </Typography>
                  <Typography>blynk.io</Typography>
                  <Grid container>
                    <Grid xs={9} item>
                      <Typography>
                        This source has been marked as sensitive due to one of
                        the following reasons: Revealing the source may
                        compromise an on-going investigation. The affected site
                        is of a controversial nature but does not validate email
                        addresses and could therefore be used to tarnish an
                        employee&apos;s reputation.
                        <br />
                      </Typography>
                    </Grid>
                    <Grid xs={2} item sx={{ textAlign: "center" }}>
                      <Typography variant="h4">65,477</Typography>
                      <Typography>Number of Records</Typography>
                    </Grid>
                    <Grid xs={1} item sx={{ textAlign: "center" }}>
                      <LockIcon sx={{ height: 50, width: 50 }} />
                      <Typography>Private Data</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">
                    Published: 23th March 2022
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Sensitive Source
                  </Typography>
                  <Typography>blynk.io</Typography>
                  <Grid container>
                    <Grid xs={9} item>
                      <Typography>
                        This source has been marked as sensitive due to one of
                        the following reasons: Revealing the source may
                        compromise an on-going investigation. The affected site
                        is of a controversial nature but does not validate email
                        addresses and could therefore be used to tarnish an
                        employee&apos;s reputation.
                        <br />
                      </Typography>
                    </Grid>
                    <Grid xs={2} item sx={{ textAlign: "center" }}>
                      <Typography variant="h4">65,477</Typography>
                      <Typography>Number of Records</Typography>
                    </Grid>
                    <Grid xs={1} item sx={{ textAlign: "center" }}>
                      <LockIcon sx={{ height: 50, width: 50 }} />
                      <Typography>Private Data</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">
                    Published: 23th March 2022
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Sensitive Source
                  </Typography>
                  <Typography>blynk.io</Typography>
                  <Grid container>
                    <Grid xs={9} item>
                      <Typography>
                        This source has been marked as sensitive due to one of
                        the following reasons: Revealing the source may
                        compromise an on-going investigation. The affected site
                        is of a controversial nature but does not validate email
                        addresses and could therefore be used to tarnish an
                        employee&apos;s reputation.
                        <br />
                      </Typography>
                    </Grid>
                    <Grid xs={2} item sx={{ textAlign: "center" }}>
                      <Typography variant="h4">65,477</Typography>
                      <Typography>Number of Records</Typography>
                    </Grid>
                    <Grid xs={1} item sx={{ textAlign: "center" }}>
                      <LockIcon sx={{ height: 50, width: 50 }} />
                      <Typography>Private Data</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">
                    Published: 23th March 2022
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

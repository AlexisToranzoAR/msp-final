import Sidebar from "components/Sidebar";
import Head from "components/Head";
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function News() {
  return (
    <>
      <Head title="News - MSP" />

      <Sidebar title="News" icon={<NewspaperTwoToneIcon sx={{ mr: 1 }} />}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Typography sx={{ mb: 1 }}>ALL | NEWS</Typography>
            <Box
              sx={{
                backgroundColor: "primary.main",
                padding: 1,
                borderRadius: 2,
              }}
            >
              <Typography>NEWS</Typography>
            </Box>
          </Grid>
          {[1, 2, 3].map((i) => (
            <Grid key={i} xs={12} item>
              <Card>
                <CardContent
                  sx={{
                    backgroundColor: grey[300],
                  }}
                >
                  <div>
                    <p>
                      <span style={{ fontSize: "18px" }}>
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
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Sidebar>
    </>
  );
}

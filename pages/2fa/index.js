import { Grid, Card, CardContent, Button, Typography } from "@mui/material";
import Head from "components/Head";
import Link from "next/link";
import TextField from "components/TextField";

export default function TwoFa() {
  return (
    <>
      <Head title="2FA Login - MSP" />

      <section>
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="2faPassword"
                      label="2FA Password"
                      placeholder="Enter your 2FA password"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/dashboard">
                      <a>
                        <Button
                          color="primary"
                          fullWidth
                          type="submit"
                          variant="contained"
                        >
                          Login
                        </Button>
                      </a>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/2fa-reset">
                      <a>
                        <Typography variant="subtitle1" align="center">
                          Reset 2FA
                        </Typography>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </section>

      <style jsx>{`
        section {
          padding: 20px;
          padding-top: 10%;
        }
      `}</style>
    </>
  );
}

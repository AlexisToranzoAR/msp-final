import { Grid, Card, CardContent, Button, Typography } from "@mui/material";
import Head from "components/Head";
import Link from "next/link";
import TextField from "components/TextField";

export default function Home() {
  return (
    <>
      <Head title="Login - MSP" />

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
                  <Grid xs={12} item>
                    <TextField
                      fullWidth
                      id="username"
                      label="Username"
                      placeholder="Enter your username"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="password"
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/2fa">
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
                    <Link href="/password-reset">
                      <a>
                        <Typography variant="subtitle1" align="center">
                          Forgot password
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

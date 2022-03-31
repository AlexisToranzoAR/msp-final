import Sidebar from "components/Sidebar";
import Head from "components/Head";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import { Grid, Typography } from "@mui/material";

export default function Training() {
  return (
    <>
      <Head title="Training Material - MSP" />

      <Sidebar
        title="Training Material"
        icon={<SchoolTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md={6} lg={4} item>
            <Typography sx={{ fontWeight: 600 }}>Test Video</Typography>
            <video
              style={{ width: "100%" }}
              poster="https://staging.mspdarkweb.com/share/c4488da7bf9751d936063895d546173e.png"
              controls
              src="https://staging.mspdarkweb.com/share/8976e0feb63233601ac9d85634630137.mp4"
            />
            <Typography>Video Test</Typography>
          </Grid>
          <Grid xs={12} md={6} lg={4} item>
            <Typography sx={{ fontWeight: 600 }}>Test Video</Typography>
            <video
              style={{ width: "100%" }}
              poster="https://staging.mspdarkweb.com/share/c4488da7bf9751d936063895d546173e.png"
              controls
              src="https://staging.mspdarkweb.com/share/8976e0feb63233601ac9d85634630137.mp4"
            />
            <Typography>Video Test</Typography>
          </Grid>
          <Grid xs={12} md={6} lg={4} item>
            <Typography sx={{ fontWeight: 600 }}>Test Video</Typography>
            <video
              style={{ width: "100%" }}
              poster="https://staging.mspdarkweb.com/share/c4488da7bf9751d936063895d546173e.png"
              controls
              src="https://staging.mspdarkweb.com/share/8976e0feb63233601ac9d85634630137.mp4"
            />
            <Typography>Video Test</Typography>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

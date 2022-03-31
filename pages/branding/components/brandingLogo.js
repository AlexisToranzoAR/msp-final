import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function BrandingLogo() {
  return (
    <Box sx={{ py: 2 }}>
      <Card>
        <CardContent>
          <Grid container spacing={2} p={2}>
            <Grid xs={12} lg={6}>
              <Typography variant="h5">Branding Logo</Typography>
              <Typography>
                Upload your logo here to white label the entire platform.
              </Typography>
              <Typography>
                Your logo will then appear in the platform header.
              </Typography>
              <Box sx={{ width: "345px" }}>
                <Image
                  alt="Test image"
                  src="https://secure.mspdarkweb.com/share/4a05a7fa9688d2a90219fd883ee57c3a.png"
                  width="700px"
                  height="345px"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

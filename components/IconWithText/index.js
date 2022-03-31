import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

export default function IconWithText({
  icon,
  text,
  helperText,
  backgroundColor = "primary.main",
  fullHeight,
  sx
}) {
  return (
    <Card sx={{ minWidth: 120, maxWidth: 170, display: 'inline-block', height: fullHeight ? '100%' : 'inherit', ...sx }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "24px 0",
        }}
      >
        <Grid container spacing={1}>
          <Grid xs={12} item sx={{display: 'flex', justifyContent: 'center'}}>
            {icon ? icon : <DeviceUnknownIcon sx={{ height: 50, width: 50 }} />}
          </Grid>
          <Grid xs={12} item>
            <Box sx={{ backgroundColor, width: "100%", padding: 0.5 }}>
              <Typography textAlign="center">
                {text}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Typography textAlign="center">{helperText}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

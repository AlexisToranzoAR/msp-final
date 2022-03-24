import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgba(132, 50, 155, 0.75)",
    },
  },
});

export default function InfoBar({ children, title }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar style={{ height: 60, display: "flex", justifyContent: "center" }} elevation={2} position="static" color="primary">
          <Container
            maxWidth="xl"
          >
            <Typography variant="h6">{title}</Typography>
          </Container>
        </AppBar>
      </ThemeProvider>

      {children}

      <style jsx>{`
        .logoutContainer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logoutContainer span {
          margin-right: 10px;
          color: ${theme.palette.primary.main};
          font-size: 12px;
        }
      `}</style>
    </>
  );
}

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Icon from "../Icon";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

export default function Navbar({ children }) {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{
          borderBottom: "3px solid " + theme.palette.primary.main,
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{ height: "64px" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: "flex" }}
            >
              <Icon style={{ height: 60 }} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link href="/">
                <a>
                  <div className="logoutContainer">
                    <span>LOGOUT</span>
                    <LogoutIcon color="primary" />
                  </div>
                </a>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{ marginTop: 68 }}>{children}</div>

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

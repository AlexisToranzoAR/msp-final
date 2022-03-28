import Sidebar from "components/Sidebar";
import Head from "components/Head";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TextField from "components/TextField";
import Button from "components/Button";
import Select from "components/Select";
import PlusOneIcon from "@mui/icons-material/PlusOne";

export default function Breaches() {
  return (
    <>
      <Head title="Feature Requests - MSP" />

      <Sidebar
        title="Feature Requests"
        icon={<DashboardCustomizeTwoToneIcon sx={{ mr: 1 }} />}
      >
        <Grid container spacing={2}>
          <Grid xs={12} lg={6} item>
            <Grid container spacing={2}>
              <Grid xs={4} item>
                <TextField
                  fullWidth
                  id="title"
                  label="Title"
                  placeholder="Enter the title"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid xs={4} item>
                <Select label="Category" fullWidth size="small" />
              </Grid>
              <Grid xs={4} item>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  id="description"
                  label="Description"
                  placeholder="Enter the description"
                  multiline
                  minRows={4}
                  maxRows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h5" xs={{ mb: 1 }}>
              Waiting for MSP votes
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Feature Title</TableCell>
                    <TableCell>Feature Description</TableCell>
                    <TableCell>Request Date</TableCell>
                    <TableCell>Requests</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Alexis</TableCell>
                      <TableCell>alexistoranzoar@gmail.com</TableCell>
                      <TableCell>pass****</TableCell>
                      <TableCell>yes</TableCell>
                      <TableCell>
                        <IconButton>
                          <PlusOneIcon color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h5" xs={{ mb: 1 }}>
              Under Review
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Feature Title</TableCell>
                    <TableCell>Feature Description</TableCell>
                    <TableCell>Request Date</TableCell>
                    <TableCell>Requests</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Alexis</TableCell>
                      <TableCell>alexistoranzoar@gmail.com</TableCell>
                      <TableCell>pass****</TableCell>
                      <TableCell>yes</TableCell>
                      <TableCell>
                        <IconButton>
                          <PlusOneIcon color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h5" xs={{ mb: 1 }}>
              Approved and In Development
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Feature Title</TableCell>
                    <TableCell>Feature Description</TableCell>
                    <TableCell>Request Date</TableCell>
                    <TableCell>Requests</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Alexis</TableCell>
                      <TableCell>alexistoranzoar@gmail.com</TableCell>
                      <TableCell>pass****</TableCell>
                      <TableCell>yes</TableCell>
                      <TableCell>
                        <IconButton>
                          <PlusOneIcon color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h5" xs={{ mb: 1 }}>
              Released
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Feature Title</TableCell>
                    <TableCell>Feature Description</TableCell>
                    <TableCell>Request Date</TableCell>
                    <TableCell>Requests</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableRow key={i}>
                      <TableCell>Alexis</TableCell>
                      <TableCell>alexistoranzoar@gmail.com</TableCell>
                      <TableCell>pass****</TableCell>
                      <TableCell>yes</TableCell>
                      <TableCell>
                        <IconButton>
                          <PlusOneIcon color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

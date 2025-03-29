import { Container, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import PatientNavbar from "../components/Patient_Navbar";
import PatientSidebar from "../components/Patient_Sidebar";

const PatientDashboard = () => {
  return (
    <div>
      <PatientNavbar />
      <PatientSidebar />
      <Container sx={{ mt: 10, ml: 30 }}>
        <Typography variant="h4" gutterBottom>Welcome to Your Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#f5f5f5" }}>
              <CardContent>
                <Typography variant="h6">Upcoming Appointments</Typography>
                <Typography variant="body2">Dr. Smith - Cardiology, June 25</Typography>
                <Button sx={{ mt: 2 }} variant="contained">View Details</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#f5f5f5" }}>
              <CardContent>
                <Typography variant="h6">Medical Reports</Typography>
                <Typography variant="body2">Latest Lab Test - Available</Typography>
                <Button sx={{ mt: 2 }} variant="contained">Download</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PatientDashboard;

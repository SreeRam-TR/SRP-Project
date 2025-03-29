import { Card, CardContent, Typography, Button } from "@mui/material";

const PatientDoctorProfile = () => {
  return (
    <Card sx={{ maxWidth: 600, m: "auto", mt: 10 }}>
      <CardContent>
        <Typography variant="h5">Dr. John Doe</Typography>
        <Typography variant="subtitle1">Cardiologist</Typography>
        <Typography variant="body2">15 years of experience, works at XYZ Hospital.</Typography>
        <Button sx={{ mt: 2 }} variant="contained">Book Appointment</Button>
      </CardContent>
    </Card>
  );
};

export default PatientDoctorProfile;

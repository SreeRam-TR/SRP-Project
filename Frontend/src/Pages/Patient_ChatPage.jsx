import { Container, Typography, Paper, TextField, Button } from "@mui/material";

const PatientChatPage = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4">Chat with Doctor</Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1">Dr. John Doe</Typography>
        <TextField fullWidth multiline rows={4} placeholder="Type your message..." />
        <Button sx={{ mt: 2 }} variant="contained">Send</Button>
      </Paper>
    </Container>
  );
};

export default PatientChatPage;

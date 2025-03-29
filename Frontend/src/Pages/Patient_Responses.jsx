import { Container, Typography, Paper, List, ListItem, ListItemText, Button, Divider } from "@mui/material";
import { useState } from "react";

const PatientResponses = () => {
  const [responses] = useState([
    {
      id: 1,
      doctor: "Dr. John Doe",
      date: "March 25, 2025",
      message: "Your test results are normal. Continue your current medication.",
    },
    {
      id: 2,
      doctor: "Dr. Sarah Lee",
      date: "April 5, 2025",
      message: "Increase your water intake and take prescribed vitamin supplements.",
    },
    {
      id: 3,
      doctor: "Dr. Robert Brown",
      date: "April 12, 2025",
      message: "Follow the new diet plan and schedule a follow-up next month.",
    },
  ]);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Doctor Responses
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <List>
          {responses.map((response, index) => (
            <div key={response.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="h6">{response.doctor}</Typography>}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {response.date}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {response.message}
                      </Typography>
                    </>
                  }
                />
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  View Details
                </Button>
              </ListItem>
              {index < responses.length - 1 && <Divider sx={{ my: 2 }} />}
            </div>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default PatientResponses;

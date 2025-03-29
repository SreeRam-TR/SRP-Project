import { List, ListItem, ListItemText, Container, Typography } from "@mui/material";

const PatientHistory = () => {
  const history = [
    { date: "June 10, 2024", doctor: "Dr. Smith", diagnosis: "Flu" },
    { date: "May 20, 2024", doctor: "Dr. Brown", diagnosis: "Migraine" },
  ];

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4">Medical History</Typography>
      <List>
        {history.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.date} secondary={`${item.doctor} - ${item.diagnosis}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PatientHistory;

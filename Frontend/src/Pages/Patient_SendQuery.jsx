import { Container, Typography, TextField, MenuItem, Button, Paper, Box } from "@mui/material";
import { useState } from "react";

const PatientSendQuery = () => {
  const [query, setQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [file, setFile] = useState(null);

  const doctors = [
    { id: 1, name: "Dr. John Doe (Cardiologist)" },
    { id: 2, name: "Dr. Sarah Lee (Neurologist)" },
    { id: 3, name: "Dr. Robert Brown (General Physician)" },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Query Sent Successfully!");
    setQuery("");
    setSelectedDoctor("");
    setFile(null);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Send a Query to Doctor
      </Typography>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Select Doctor */}
          <TextField
            select
            label="Select Doctor"
            fullWidth
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            {doctors.map((doctor) => (
              <MenuItem key={doctor.id} value={doctor.name}>
                {doctor.name}
              </MenuItem>
            ))}
          </TextField>

          {/* Query Input */}
          <TextField
            label="Describe your health concern"
            multiline
            rows={4}
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />

          {/* File Upload */}
          <Button variant="contained" component="label">
            Upload Medical Report
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {file && <Typography variant="body2">Selected File: {file.name}</Typography>}

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Send Query
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PatientSendQuery;

import { useState } from "react";
import { Container, Typography, TextField, Button, Switch, FormControlLabel, Paper, Box } from "@mui/material";

const PatientSettings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    dob: "1995-05-15",
    currentPassword: "",
    newPassword: "",
    notifications: true,
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleToggle = () => {
    setUser({ ...user, notifications: !user.notifications });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Settings Updated Successfully!");
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Account Settings
      </Typography>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Personal Information */}
          <Typography variant="h6">Personal Information</Typography>
          <TextField label="Full Name" name="name" fullWidth value={user.name} onChange={handleChange} required />
          <TextField label="Email" name="email" fullWidth type="email" value={user.email} onChange={handleChange} required />
          <TextField label="Phone Number" name="phone" fullWidth type="tel" value={user.phone} onChange={handleChange} required />
          <TextField label="Date of Birth" name="dob" fullWidth type="date" value={user.dob} onChange={handleChange} InputLabelProps={{ shrink: true }} required />

          {/* Password Change */}
          <Typography variant="h6" sx={{ mt: 2 }}>Change Password</Typography>
          <TextField label="Current Password" name="currentPassword" type="password" fullWidth value={user.currentPassword} onChange={handleChange} />
          <TextField label="New Password" name="newPassword" type="password" fullWidth value={user.newPassword} onChange={handleChange} />

          {/* Notification Settings */}
          <FormControlLabel
            control={<Switch checked={user.notifications} onChange={handleToggle} />}
            label="Enable Notifications"
          />

          {/* Save Button */}
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PatientSettings;

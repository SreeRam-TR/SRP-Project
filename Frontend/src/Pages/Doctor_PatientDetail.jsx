import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import Doctor_Header from '../components/Doctor_Header';
import Doctor_Sidebar from '../components/Doctor_Sidebar';

const PatientDetail = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);

    const mockPatientData = {
        id: 1,
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        symptoms: 'Fever, Cough, Headache',
        labReports: 'Blood Test: Normal, X-Ray: Clear',
        aiOpinion: 'Possible viral infection. Hydration and rest recommended.',
        fullHistory: 'Previous cases of mild fever and cold.',
    };

    useEffect(() => {
        if (id == mockPatientData.id) {
            setPatient(mockPatientData);
        }
    }, [id]);

    if (!patient) {
        return (
            <Typography 
                align="center" 
                color="text.secondary" 
                mt={10}
            >
                Loading patient details...
            </Typography>
        );
    }

    return (
        <Box display="flex" bgcolor="#f9fafb" minHeight="100vh">
            <Doctor_Sidebar />

            <Box p={3} flex={1}>
                <Doctor_Header />
                <Typography variant="h4" fontWeight="bold" mb={3} color="text.primary">
                    Patient Details
                </Typography>

                {/* Patient Info */}
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                    <Typography>
                        <strong>Name:</strong> {patient.name}
                    </Typography>
                    <Typography>
                        <strong>Age:</strong> {patient.age}
                    </Typography>
                    <Typography>
                        <strong>Gender:</strong> {patient.gender}
                    </Typography>
                    <Typography>
                        <strong>Symptoms:</strong> {patient.symptoms}
                    </Typography>
                    <Typography>
                        <strong>Lab Reports:</strong> {patient.labReports}
                    </Typography>
                </Paper>

                {/* AI Opinion */}
                <Paper elevation={1} sx={{ padding: 3, marginBottom: 3, backgroundColor: '#f0f0f0' }}>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                        AI Opinion:
                    </Typography>
                    <Typography color="text.secondary">
                        {patient.aiOpinion}
                    </Typography>
                </Paper>

                {/* Full Medical History */}
                <Paper elevation={1} sx={{ padding: 3, marginBottom: 3, backgroundColor: '#f0f0f0' }}>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                        Full Medical History:
                    </Typography>
                    <Typography color="text.secondary">
                        {patient.fullHistory}
                    </Typography>
                </Paper>

                {/* Doctor's Opinion */}
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                        Your Opinion:
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Enter your opinion..."
                        variant="outlined"
                    />
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginRight: 1 }}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: 1 }}
                        >
                            Agree with AI
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                        >
                            Disagree with AI
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default PatientDetail;

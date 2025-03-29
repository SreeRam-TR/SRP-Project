import { Box, Typography } from '@mui/material';
import Doctor_Header from '../components/Doctor_Header';
import Doctor_Sidebar from '../components/Doctor_Sidebar';
import Doctor_PatientRequestCard from '../components/Doctor_PatientRequestCard';

const mockPatients = [
    { id: 1, name: 'John Doe', symptoms: 'Fever, Cough' },
    { id: 2, name: 'Jane Smith', symptoms: 'Headache, Nausea' }
];

const DoctorHome = () => {
    return (
        <Box display="flex" bgcolor="#f9fafb" minHeight="100vh">
            {/* Sidebar */}
            <Doctor_Sidebar />
            <Box p={3} flex={1}>
                {/* Header */}
                <Doctor_Header />
                
                <Typography variant="h4" fontWeight="bold" mb={3} color="text.primary">
                    New Patient Requests
                </Typography>
                
                {/* Patient Request Cards */}
                {mockPatients.map((patient) => (
                    <Doctor_PatientRequestCard key={patient.id} patient={patient} />
                ))}
            </Box>
        </Box>
    );
};

export default DoctorHome;

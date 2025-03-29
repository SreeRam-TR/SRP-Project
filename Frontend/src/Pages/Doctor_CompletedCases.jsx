import { Box, Typography } from '@mui/material';
import Header from '../components/Doctor_Header';
import Sidebar from '../components/Doctor_Sidebar';

const CompletedCases = () => {
    return (
        <Box display="flex" bgcolor="#f9fafb" minHeight="100vh">
            <Sidebar />
            <Box p={3} flex={1}>
                <Header />
                <Typography variant="h4" fontWeight="bold" mb={3} color="text.primary">
                    Completed Cases
                </Typography>
                {/* Add Completed Cases List Here */}
            </Box>
        </Box>
    );
};

export default CompletedCases;

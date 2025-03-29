import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const PatientRequestCard = ({ patient }) => {
    return (
        <Card 
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                boxShadow: 3,
                '&:hover': { boxShadow: 6 },
                mb: 2
            }}
        >
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {patient.name}
                </Typography>
                <Typography color="text.secondary">
                    Symptoms: {patient.symptoms}
                </Typography>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ mr: 1 }}
                    >
                        Accept
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                    >
                        Ignore
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PatientRequestCard;

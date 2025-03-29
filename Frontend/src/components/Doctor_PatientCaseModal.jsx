import { Modal, Box, Typography, Button } from '@mui/material';

const PatientCaseModal = ({ patient, onClose }) => {
    return (
        <Modal open={!!patient} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    {patient?.name}
                </Typography>
                <Typography color="text.secondary" mb={3}>
                    {patient?.details}
                </Typography>
                <Button
                    onClick={onClose}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default PatientCaseModal;

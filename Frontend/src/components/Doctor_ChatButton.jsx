import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ChatButton = () => {
    return (
        <Button
            variant="contained"
            color="primary"
            sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                borderRadius: '50%',
                boxShadow: 3,
                padding: '12px 24px',
                '&:hover': {
                    backgroundColor: '#1e40af',
                },
            }}
            component={Link}
            to="/chat"
        >
            Chat
        </Button>
    );
};

export default ChatButton;

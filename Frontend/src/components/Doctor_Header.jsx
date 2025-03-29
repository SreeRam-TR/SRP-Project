import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1f2937', boxShadow: 3 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    Doctor Dashboard
                </Typography>
                <Button
                    component={Link}
                    to="/doctor/home"
                    sx={{ color: '#d1d5db', '&:hover': { color: '#ffffff' }, marginRight: 2 }}
                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to="/doctor/accepted-cases"
                    sx={{ color: '#d1d5db', '&:hover': { color: '#ffffff' }, marginRight: 2 }}
                >
                    Accepted Cases
                </Button>
                <Button
                    component={Link}
                    to="/doctor/completed-cases"
                    sx={{ color: '#d1d5db', '&:hover': { color: '#ffffff' } }}
                >
                    Completed Cases
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

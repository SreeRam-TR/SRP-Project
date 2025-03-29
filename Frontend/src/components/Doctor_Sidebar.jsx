import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: 240,
                height: '100vh',
                bgcolor: '#f3f4f6',
                boxShadow: 3,
                p: 3
            }}
        >
            <List>
                <ListItem 
                    button 
                    component={Link} 
                    to="/doctor/home" 
                    sx={{
                        color: '#4b5563',
                        '&:hover': { color: '#3b82f6' },
                        mb: 2
                    }}
                >
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem 
                    button 
                    component={Link} 
                    to="/doctor/accepted-cases" 
                    sx={{
                        color: '#4b5563',
                        '&:hover': { color: '#3b82f6' },
                        mb: 2
                    }}
                >
                    <ListItemText primary="Accepted Cases" />
                </ListItem>
                <ListItem 
                    button 
                    component={Link} 
                    to="/doctor/completed-cases" 
                    sx={{
                        color: '#4b5563',
                        '&:hover': { color: '#3b82f6' },
                        mb: 2
                    }}
                >
                    <ListItemText primary="Completed Cases" />
                </ListItem>
                <ListItem 
                    button 
                    component={Link} 
                    to="/doctor/settings" 
                    sx={{
                        color: '#4b5563',
                        '&:hover': { color: '#3b82f6' }
                    }}
                >
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;

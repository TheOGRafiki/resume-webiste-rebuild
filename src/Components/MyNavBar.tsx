import { AppBar, Button, Toolbar } from '@mui/material';

const MyNavBar = () => {
    return (
        // <AppBar color="transparent" elevation={0}>
        <AppBar>
            <Toolbar>
                <Button color="error">About Me</Button>
                <Button color="error">Resume</Button>
                <Button color="error">Contact Me</Button>
                <Button color="error">Projects</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MyNavBar;

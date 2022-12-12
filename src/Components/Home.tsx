import { Box, Paper } from '@mui/material';

const Home = () => {
    const Image_URL =
        'https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

    return (
        <Box
            style={{ backgroundImage: `url(${Image_URL})` }}
            sx={{ height: '50vh', width: '100%' }}
        >
            <h1>Ahmed Al Busaidi</h1>
            <p>
                I am a software engineer with a passion for building web
                applications.
            </p>
        </Box>
    );
};

export default Home;

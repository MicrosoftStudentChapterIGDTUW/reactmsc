import React from "react";
import { Container, Box, Typography, Button } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubmissionRedirect = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box 
        my={4} 
        className="flex flex-col items-center justify-center min-h-[70vh] text-center"
        data-aos="fade-up"
      >
        <Typography 
          variant="h3" 
          component="h1" 
          className="text-darkblue font-bold mb-6"
        >
          Submissions Closed
        </Typography>
        
        <Typography 
          variant="h6" 
          className="text-gray-900 mb-8 text-center"
        >
          Thank you to all participants for your incredible submissions! 
          The submission period for this hackathon has now ended.
        </Typography>
        
        <Box className="flex space-x-4">
          <Button 
            variant="contained" 
            color="primary" 
            href="/" 
            className="bg-blue-600 text-white hover:bg-blue-600 px-6 rounded-xl"
          >
            Return to Home
          </Button>
          
          <Button 
            variant="outlined" 
            color="primary" 
            href="/past-events" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 rounded-xl"
          >
            View Past Events
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SubmissionRedirect;
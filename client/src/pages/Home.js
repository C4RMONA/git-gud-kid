import React,  { useState } from 'react';
import { Box, useTheme, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { maxHeight, maxWidth } from '@mui/system';

const images = [
  {
    label: 'sciencefair',
    imgPath:
      '../assets/sciencefair.jpg',
    ext: 'jpg'
  },
  {
    label: 'classroom-pet-ideas',
    imgPath:
      '../assets/classroom-pet-ideas',
    ext: 'jpg'
  },
  {
    label: 'blogskillingit',
    imgPath:
      '../assets/blogskillingit',
    ext: 'jpg'
  },
  {
    label: '6764759_orig',
    imgPath:
      '../assets/6764759_orig.png',
    ext: 'png'
  },
];



const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className='homecarousel' sx={{ maxWidth: maxWidth, flexGrow: 1, height: maxHeight }} align="center">
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 0 ? (
              <Box
                className='carousel-imgs'
                component="img"
                sx={{
                  height: '500px',
                  paddingTop: '2%',
                  display: 'block',
                  maxWidth: "50%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={require(`../assets/${step.label}.${step.ext}`)}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      <MobileStepper
      className='carousel-steppers'
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1,  backgroundColor: 'black'}}
        nextButton={
          <Button className='carousel-btn' size="small" sx={{ color: 'white'}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button className='carousel-btn' size="small" sx={{ color: 'white'}} onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>

        }
      />
    </Box>
  );
}

export default Home;
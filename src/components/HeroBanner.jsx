import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position='relative'
      p='20px'>
      <Typography color='rgb(221, 25, 25)' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb='23px'
        mt='30px'>
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize='22px' fontFamily='Alegreya' lineHeight='35px'>
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href='#exercises'
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#b31818",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}>
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}>
        Exercise
      </Typography>
      <img
        src='https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt='hero-banner'
        className='hero-banner-img'
      />
    </Box>
  );
};

export default HeroBanner;

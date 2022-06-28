import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box bgcolor='#f9f8f890'>
    <Stack
      gap='40px'
      sx={{ alignItems: "center" }}
      flexWrap='wrap'
      px='40px'
      pt='24px'>
      <Typography
        variant='h2'
        sx={{
          fontSize: {
            lg: "45px",
            xs: "37px",
            letterSpacing: 7,
            fontWeight: 700,
          },
        }}>
        Flex Gym
      </Typography>
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: "28px", xs: "20px", letterSpacing: 4 } }}
      mt='30px'
      textAlign='center'
      pb='40px'>
      Made by Abdul
    </Typography>
  </Box>
);

export default Footer;

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <Typography variant="body2">
        Desenvolvido por Clecio Antao - {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;

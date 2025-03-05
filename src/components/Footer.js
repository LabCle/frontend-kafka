import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="body2">
        Desenvolvido por Clecio Antao - {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;

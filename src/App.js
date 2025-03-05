import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import ClienteList from "./components/ClienteList";
import ClienteForm from "./components/ClienteForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      
      {/* Cabeçalho Fixado */}
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: "#1976d2", 
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)"
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6">Gestão de Clientes</Typography>
        </Toolbar>
      </AppBar>

      {/* Ajuste do Conteúdo para não ficar atrás do cabeçalho */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          paddingTop: "64px", // Compensa a altura do AppBar fixo
          paddingBottom: "50px", // Evita sobreposição com o rodapé
        }}
      >
        <Container style={{ marginTop: "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<ClienteList />} />
            <Route path="/clientes/novo" element={<ClienteForm />} />
            <Route path="/clientes/editar/:id" element={<ClienteForm />} />
          </Routes>
        </Container>
      </Box>

      {/* Rodapé Fixado */}
      <Footer />
    </Router>
  );
};

export default App;

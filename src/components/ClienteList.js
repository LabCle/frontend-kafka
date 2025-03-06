import React, { useEffect, useState } from "react";
import { getClientes, deleteCliente } from "../api";
import { useNavigate } from "react-router-dom";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Button, Typography, Container, Box 
} from "@mui/material";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getClientes().then((response) => setClientes(response.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteCliente(id);
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Box 
        sx={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center",
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "15px", textAlign: "center", fontWeight: "bold" }}>
          Lista de Clientes
        </Typography>
        
        <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/clientes/novo")}>
            Adicionar Cliente
          </Button>
          <Button variant="contained" color="secondary" onClick={() => navigate("/dashboard")}>
            📊 Kafka Dashboard
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell align="center">{cliente.id}</TableCell>
                  <TableCell align="center">{cliente.nome}</TableCell>
                  <TableCell align="center">{cliente.email}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" onClick={() => navigate(`/clientes/editar/${cliente.id}`)} sx={{ marginRight: "8px" }}>
                      Editar
                    </Button>
                    <Button variant="contained" color="error" onClick={() => handleDelete(cliente.id)}>
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ClienteList;

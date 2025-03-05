import React, { useState, useEffect } from "react";
import { addCliente, updateCliente, getClienteById } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const ClienteForm = () => {
  const [cliente, setCliente] = useState({ nome: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getClienteById(id).then((response) => setCliente(response.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCliente(id, cliente);
    } else {
      await addCliente(cliente);
    }
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h6">{id ? "Editar Cliente" : "Novo Cliente"}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="Nome" name="nome" value={cliente.nome} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Email" name="email" value={cliente.email} onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ClienteForm;

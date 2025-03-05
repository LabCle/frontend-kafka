import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const KafkaDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [event.data, ...prevMessages]);
    };

    socket.onclose = () => {
      console.log("WebSocket fechado");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Painel de Mensagens Kafka
      </Typography>
      <Paper style={{ padding: "20px", maxHeight: "400px", overflowY: "auto" }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default KafkaDashboard;

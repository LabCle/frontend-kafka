import React, { useState, useEffect } from 'react';
import { addCliente, updateCliente, getClienteById } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const ClienteForm = () => {
  const [cliente, setCliente] = useState({ nome: '', email: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getClienteById(id)
        .then((response) => {
          if (response.data) {
            setCliente(response.data); // Atualiza o estado com os dados do cliente
          }
        })
        .catch((error) => console.error('Erro ao buscar cliente:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clienteData = { ...cliente };

    try {
      if (id) {
        await updateCliente(Number(id), clienteData); // Garante que o ID seja um número
      } else {
        await addCliente(clienteData);
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Cliente' : 'Novo Cliente'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={cliente.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={cliente.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default ClienteForm;

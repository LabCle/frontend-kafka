import React, { useEffect, useState } from 'react';
import { getClientes, deleteCliente } from '../api';
import { useNavigate } from 'react-router-dom';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await getClientes();
      setClientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      await deleteCliente(id);
      fetchClientes();
    }
  };

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <button onClick={() => navigate('/novo')}>Adicionar Cliente</button>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email}
            <button onClick={() => navigate(`/editar/${cliente.id}`)}>Editar</button>
            <button onClick={() => handleDelete(cliente.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;

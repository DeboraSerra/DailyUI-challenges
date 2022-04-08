import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

const ContextProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const clients = JSON.parse(localStorage.getItem('clientList')) || [];
    setClients(clients);
  }, [])

  useEffect(() => {
    localStorage.setItem('clientList', JSON.stringify(clients));
  }, [clients])

  const setNewClient = (client) => {
    if (!clients.some(({ email }) => email === client.email)) {
      setClients([...clients, client]);
    }
  }

  const contextValue = {
    clients,
    saveClient: setNewClient,
  }

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider;

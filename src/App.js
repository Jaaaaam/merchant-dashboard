import React from 'react';
import Router from './routes';
import { AuthProvider } from './contexts/Auth';
import './assets/scss/main.scss';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;

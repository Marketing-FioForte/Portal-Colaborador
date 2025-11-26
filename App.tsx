import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Trainings from './pages/Trainings';
import HealthSafety from './pages/HealthSafety';
import RHDocuments from './pages/RHDocuments';
import Profile from './pages/Profile';
import QuickProof from './pages/QuickProof';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/acesso" element={<Login />} />
        <Route path="/comprovante" element={<QuickProof />} />
        
        {/* Protected Routes wrapped in Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/acesso" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="treinamentos" element={<Trainings />} />
          <Route path="saude-seguranca" element={<HealthSafety />} />
          <Route path="documentos-rh" element={<RHDocuments />} />
          <Route path="perfil" element={<Profile />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/acesso" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
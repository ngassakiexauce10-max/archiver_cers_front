import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import CerList from './components/CerList';
import CreateCer from './components/CreateCer';
import EditCer from './components/EditCer';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cers" element={<PrivateRoute><CerList /></PrivateRoute>} />
        <Route path="/cers/create" element={<PrivateRoute><CreateCer /></PrivateRoute>} />
        <Route path="/cers/:id/edit" element={<PrivateRoute><EditCer /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/cers" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

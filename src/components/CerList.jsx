import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../axiosConfig';

function CerList() {
  const [cers, setCers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCers = async () => {
      try {
        const result = await api.get('/cers');
        setCers(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/cers/${id}`);
      setCers(cers.filter((cer) => cer.id !== id));
      alert('Cer supprimé avec succès !');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la suppression du Cer.');
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/logout');
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem('auth_token');
    navigate('/login');
  };

  return (
    <div>
      <h2>Mes Cers</h2>
      <p>
        <Link to="/cers/create">+ Nouveau Cer</Link>{' '}
        <button onClick={handleLogout}>Se déconnecter</button>
      </p>
      <ul>
        {cers.map((cer) => (
          <li key={cer.id}>
            {cer.title} - {cer.path}{' '}
            <Link to={`/cers/${cer.id}/edit`}>Modifier</Link>{' '}
            <button onClick={() => handleDelete(cer.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CerList;

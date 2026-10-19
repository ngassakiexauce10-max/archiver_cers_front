import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig';

function CreateCer() {
  const [title, setTitle] = useState('');
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/cers', { title, path });
      alert('Cer créé avec succès !');
      navigate('/cers');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la création du Cer.');
    }
  };

  return (
    <div>
      <h2>Créer un nouveau Cer</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Titre : </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Chemin : </label>
          <input type="text" value={path} onChange={(e) => setPath(e.target.value)} required />
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
}

export default CreateCer;

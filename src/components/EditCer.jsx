import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../axiosConfig';

function EditCer() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCer = async () => {
      try {
        const result = await api.get(`/cers/${id}`);
        setTitle(result.data.title);
        setPath(result.data.path);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCer();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/cers/${id}`, { title, path });
      alert('Cer mis à jour avec succès !');
      navigate('/cers');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la mise à jour du Cer.');
    }
  };

  return (
    <div>
      <h2>Modifier le Cer</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Titre : </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Chemin : </label>
          <input type="text" value={path} onChange={(e) => setPath(e.target.value)} required />
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default EditCer;

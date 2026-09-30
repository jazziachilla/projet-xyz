import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Page introuvable</p>
      <Link to="/" style={{ color: '#1d9bf0', textDecoration: 'none', fontWeight: 'bold' }}>
        Retour à l'accueil
      </Link>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Page introuvable');
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Page introuvable</p>
      <Link to="/" style={{ color: '#1d9bf0', textDecoration: 'none', fontWeight: 'bold' }}>
        Retour à l'accueil
      </Link>
    </div>
  );
}
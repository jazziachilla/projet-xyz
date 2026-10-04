import { useParams, Link } from 'react-router-dom';
import { TweetPreview } from '../components/TweetPreview';
import { TweetsList } from '../components/TweetsList';
import { TweetsContext } from '../contexts/TweetsContext';
import { useContext } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function TweetDetailsPage() {
  // recup id 
  const { id } = useParams<{ id: string }>();

  // recherche tab statique du tweet principal qui correspond à cet id
  const { tweets, toggleLike } = useContext(TweetsContext)!;
  const tweet = tweets.find((t) => t.id === id);

  // utilisation hook titre de la page
  useDocumentTitle(tweet ? `Discussion de ${tweet.authorName}` : 'Tweet introuvable');

  // en cas d'erreur : pas id
  if (!tweet) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Ce tweet n'existe pas.</p>
        <Link to="/" style={{ color: '#1d9bf0', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  // recherche réponses
  const replies = tweets.filter((t) => t.parentId === id);

  // affichage tweet principal
  return (
    <div style={{ padding: '20px' }}>
      {/* Lien de retour vers le fil principal */}
      <p>
        <Link to="/" style={{ color: '#1d9bf0', textDecoration: 'none' }}>
          Retour au fil
        </Link>
      </p>

      <h2>Discussion</h2>

      {/* affichage tweet principal */}
      <TweetPreview tweet={tweet} linkToDetail={false} onToggleLike={toggleLike} />

      <h3 style={{ marginTop: '30px' }}>Réponses</h3>

      {/* si vide, afficher avec tweetlist ou un message */}
      {replies.length > 0 ? (
        <TweetsList tweets={replies} onToggleLike={toggleLike} />
      ) : (
        <p style={{ color: '#666', fontStyle: 'italic' }}>Aucune réponse pour le moment.</p>
      )}
    </div>
  );
}
import { useState } from 'react';
import type { Tweet } from '../types/Tweet';
import { Link } from 'react-router-dom'; 

export function TweetPreview(props: { tweet: Tweet; linkToDetail?: boolean; onToggleLike: (id: string) => void }) {
  const t = props.tweet;
  const linkToDetail = props.linkToDetail ?? true;
  //date
  const formatDate = new Date(t.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

  //etat : ouvert/fermé
  const [isExpanded, setIsExpanded] = useState(false);

  //180 caractères
  const limite = 180;
  const estTropLong = t.content.length > limite;

  //texte qu'on doit afficher sur l'écran
  const texteAAfficher = isExpanded || !estTropLong 
    ? t.content 
    : t.content.slice(0, limite) + '...'; //decoupe le texte + ...

  return (
    <div style={{ border: `1px solid #e6e6e6`, padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{t.authorName} (@{t.authorHandle})</h3>
      
      {/* on affiche le texte du tweet */}
      <p>{texteAAfficher}</p>

      {/* bouton voir plus/ voir moins  */}
      {estTropLong && ( //si le texte trop est trop long ca s'affiche 
        <button 
          //inverse la derniere valeur de l'interrupteur
          onClick={() => setIsExpanded((ancienneValeur) => !ancienneValeur)}
          style={{ background: 'none', border: 'none', color: '#57606a', cursor: 'pointer', padding: 0, marginBottom: '10px' }}
        >
          {/* si ouvert, on affiche voir moins, sinon voir plus */}
          {isExpanded ? 'Voir moins' : 'Voir plus'}
        </button>
      )}
      
     {/* affichage de l'image, ajout du link 02.4 */}
     {t.image && (
        linkToDetail ? (
          <Link to={`/tweets/${t.id}`}>
            <img 
              src={t.image.url} 
              alt={t.image.alt} 
              style={{ maxWidth: '100%', borderRadius: '6px', marginTop: '10px', display: 'block' }} 
            />
          </Link>
        ) : (
          <img 
            src={t.image.url} 
            alt={t.image.alt} 
            style={{ maxWidth: '100%', borderRadius: '6px', marginTop: '10px', display: 'block' }} 
          />
        )
      )}

      {/* date  */}
      <p style={{ fontSize: '0.85em', color: '#000000' }}>{formatDate}</p>

      {/* bouton like + compteur et inscription J'aime */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
        <button
          onClick={() => props.onToggleLike(t.id)}
          style={{
            background: 'none',
            border: 'none',
            color: t.likedByMe ? '#e52e62' : '#000000',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: '4px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {/* cœur : noir si non liké, rose/magenta si liké */}
          <span style={{ fontSize: '1.2em', color: t.likedByMe ? '#ff4370' : '#000000' }}>{t.likedByMe ? '♥' : '♡'}</span>
          
          {/* Le nombre de likes au milieu en noir */}
          <span style={{ fontSize: '0.9em', color: '#000000' }}>{t.likes}</span>
          
          {/* L'inscription J'aime / Je n'aime plus en noir */}
          <span>{t.likedByMe ? 'Je n\'aime plus' : 'J\'aime'}</span>
        </button>
      </div>

      {/* lien vers la page de détails */}
      {linkToDetail && (
        <Link to={`/tweets/${t.id}`} style={{ color: '#000000', textDecoration: 'none', fontSize: '0.9em', fontWeight: 'bold', display: 'block' }}>
          Voir la discussion
        </Link>
      )}
    
    </div>
    
  );
}
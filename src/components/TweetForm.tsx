import { useState } from 'react';
import type { SubmitEvent } from 'react';

//def type
type TweetFormProps = {
    onSubmit: (content: string) => void;
};

const CONTENT_MAX_LENGTH = 280; //contante globale ( en dehors de la fonction)

//recup les prop du composant
export function TweetForm(props: TweetFormProps) {
  const [content, setContent] = useState<string>('');
  //longueur actuelle - limite max --> reavtualise a chauqe fois que content change
  const charactersRemaining = CONTENT_MAX_LENGTH - content.length;

  //bouton de soumission

  // efface les espaces aux extrémités avec .trim()
  const trimmedContent = content.trim();
  // verif si le contenu nettoyé est vide
  const isEmpty = trimmedContent === '';
  // verif si la longueur dépasse la limite autorisée
  const isTooLong = content.length > CONTENT_MAX_LENGTH;
  // bouton désactivé si le texte est vide/trop long
  const isDisabled = isEmpty || isTooLong;

  //gestionnaire de soumission 
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    // pas par défaut
    event.preventDefault();
    // si formulaire désactivé : fait rien 
    if (isDisabled) {
      return;
    }
    // contenu nettoyé
    props.onSubmit(trimmedContent);

    //reinitialise le champ
    setContent('');
  };


    //  {/* quand utilisateur valide formulaire, execute la fonction */}
    return (
    <form onSubmit={handleSubmit}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px', 
        border: `1px solid #e6e6e6`, 
        padding: '15px', 
        margin: '10px 0', 
        borderRadius: '8px',
        backgroundColor: '#fff'
      }}
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Quoi de neuf ?"
        rows={2}
        style={{ 
          width: '100%', 
          boxSizing: 'border-box', // Empêche le textarea de dépasser de sa boîte
          padding: '10px', 
          borderRadius: '6px', 
          border: `1px solid #e6e6e6`, 
          fontSize: '14px',
          fontFamily: 'inherit',
          resize: 'none' 
        }}
      />

      {/* Conteneur pour aligner le compteur à gauche et le bouton à droite */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* nb caractères restants */}
        <span style={{ fontSize: '12px', color: '#57606a' }}>
          {charactersRemaining} caractères restants
        </span>

        {/* ajout du bouton */}
        <button 
          type="submit" 
          disabled={isDisabled} // Désactivé si le texte est vide ou trop long
          style={{
            backgroundColor: isDisabled ? '#e6e6e6' : '#6ec7ea', 
            color: isDisabled ? '#8c959f' : 'white',
            border: 'none',
            padding: '6px 14px',
            borderRadius: '16px', // Forme arrondie type "pillule"
            fontSize: '13px',
            fontWeight: '600',
            cursor: isDisabled ? 'not-allowed' : 'pointer' // Change le curseur de la souris
          }}
        >
          Publier
        </button>
      </div>
    </form> 
  );
}
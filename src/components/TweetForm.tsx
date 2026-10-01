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

  return (
    //  {/* quand utilisateur valide formulaire, execute la fonction */}
    <form onSubmit={handleSubmit}> 
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Quoi de neuf ?" //twitter
      />
      <div>
        {/* caractères restants affichage */}
        <span>{charactersRemaining} caractères restants</span> 
        {/* ajout du bouton, Disabled : isEmpty et isTooLong */}
        <button type="submit" disabled={isDisabled}>
          Publier
        </button>
      </div>
    </form> 
  );
}
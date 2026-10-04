import { useContext } from 'react';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetForm } from '../components/TweetForm';
import { TweetPreview } from '../components/TweetPreview'; //chemin vers aperçus de tweets
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function TweetsMasterPage() {
  useDocumentTitle('Accueil | XYZ ');
  const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;

  return (
    <div>
      {/* affiche le formulaire + transmet addTweet */}
      <TweetForm onSubmit={addTweet} />

      {/* liste les tweets existants */}
      <div>
        {tweets.map((tweet) => (
          <TweetPreview key={tweet.id} tweet={tweet} onToggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
}
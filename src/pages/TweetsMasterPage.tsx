import { useContext } from 'react';
import { TweetsContext } from '../contexts/TweetsContext';
import { TweetForm } from '../components/TweetForm';
import { TweetPreview } from '../components/TweetPreview'; // Ou le chemin vers vos aperçus de tweets

export function TweetsMasterPage() {
  const { tweets, addTweet } = useContext(TweetsContext)!;

  return (
    <div>
      {/* affiche le formulaire + transmet addTweet */}
      <TweetForm onSubmit={addTweet} />

      {/* liste les tweets existants */}
      <div>
        {tweets.map((tweet) => (
          <TweetPreview key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
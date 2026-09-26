import type { Tweet } from '../types/Tweet';

type TweetPreviewProps = {
  tweet: Tweet;
};

export const TweetPreview = ({ tweet }: TweetPreviewProps) => {
  return (
    <article className="tweet-preview">
      <div className="tweet-header">
        <span className="author-name">{tweet.authorName}</span>
        <span className="author-handle">@{tweet.authorHandle}</span>
        <span className="tweet-date">{new Date(tweet.createdAt).toLocaleDateString()}</span>
      </div>
      
      {/* Affichage conditionnel de l'image (Étape 3 du TD) */}
      {tweet.image && (
        <img 
          src={tweet.image.url} 
          alt={tweet.image.alt} 
          className="tweet-image"
        />
      )}

      <p className="tweet-content">{tweet.content}</p>
    </article>
  );
};
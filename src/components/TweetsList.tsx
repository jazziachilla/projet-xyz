import type { Tweet } from '../types/Tweet';
import { TweetPreview } from './TweetPreview';

type TweetsListProps = {
  tweets: Array<Tweet>;
};

export function TweetsList(props: TweetsListProps) {
  return (
    <div>
      {props.tweets.map((t) => (
        <TweetPreview key={t.id} tweet={t} />
      ))}
    </div>
  );
}
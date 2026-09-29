import { initialTweets } from '../data/tweets';
import { TweetsList } from '../components/TweetsList';

export function TweetsMasterPage() {
    //on filtre parce que que les tweets parent 
    const mainTweets = initialTweets.filter((t) => !t.parentId);
  return (
    <div>
      <TweetsList tweets={mainTweets} />
    </div>
  );
}
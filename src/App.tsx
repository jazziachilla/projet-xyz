import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { initialTweets } from './data/tweets';
import type { Tweet } from './types/Tweet';
import { TweetsContext, type TweetsContextValue } from './contexts/TweetsContext';

//on eleve tweetlist parce que plus dans App 
export function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  // Fonction d'ajout d'un nouveau tweet
  const addTweet = (content: string): void => {
    const newTweet: Tweet = {
      id: crypto.randomUUID(),
      author: "Vous",
      username: "vous",
      content: content,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  // On expose addTweet dans le contexte
  const context: TweetsContextValue = { tweets, addTweet };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h1>Mon fil d'actualité</h1>
      </header>
      <TweetsContext.Provider value={context}>
        <Outlet />
      </TweetsContext.Provider>
    </div>
  );
}
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { initialTweets } from './data/tweets';
import type { Tweet } from './types/Tweet';
import { TweetsContext, type TweetsContextValue } from './contexts/TweetsContext';

//on eleve tweetlist parce que plus dans App 
export function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  // fonction ajout d'un nouveau tweet
  const addTweet = (content: string): void => {
    const newTweet: Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content: content,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  // fonction ajouter ou retirer un j'aime
  const toggleLike = (id: string): void => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.id === id) {
          const newLikedByMe = !tweet.likedByMe;
          return {
            ...tweet,
            likedByMe: newLikedByMe,
            likes: newLikedByMe ? tweet.likes + 1 : tweet.likes - 1,
          };
        }
        return tweet;
      })
    );
  };

  // addTweet et toggleLike dans le contexte
  const context: TweetsContextValue = { tweets, addTweet, toggleLike };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
       <img src="/favicon-96x96.png" alt="Logo de l'application XYZ" style={{ width: '40px', height: '40px' }} />
        <h1 style={{ margin: 0 }}>Mon fil d'actualité</h1>
      </header>
      <TweetsContext.Provider value={context}>
        <Outlet />
      </TweetsContext.Provider>
    </div>
  );
}
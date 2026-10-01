import { createContext } from 'react';
import type { Tweet } from '../types/Tweet';

export type TweetsContextValue = {
  tweets: Array<Tweet>;
  addTweet: (content: string) => void; //ajout de addTweet (erreur de compilation)
};

export const TweetsContext = createContext<TweetsContextValue | undefined>(
  undefined
);
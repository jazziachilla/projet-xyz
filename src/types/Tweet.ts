export type Tweet = {
    id: string; 
  authorName: string;
  authorHandle: string; // sans le @
  content: string;
  image?: TweetImage; // optionnel
  createdAt: string;
  parentId?: string; // id du tweet auquel le tweet courant répond.
}

export type TweetImage = {
  url: string;
  alt: string;
};
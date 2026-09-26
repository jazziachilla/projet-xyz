export type Tweet = {
    id: string; 
  authorName: string;
  authorHandle: string; // sans le @
  content: string;
  image?: TweetImage; // optionnel
  createdAt: string;
}

export type TweetImage = {
  url: string;
  alt: string;
};
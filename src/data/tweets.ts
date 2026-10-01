import type { Tweet } from '../types/Tweet';

export const initialTweets: Array<Tweet> = [
  {
    id: "1",
    authorName: "Ada Lovelace",
    authorHandle: "ada",
    content: "La machine analytique n'a nullement la prétention de créer quoi que ce soit. Elle peut exécuter tout ce que nous savons lui ordonner d'exécuter.",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
      alt: "Portrait d'Ada Lovelace"
    },
    createdAt: "2026-09-01T11:12:00.00Z",
    parentId:'9',
    likes : 156,
    likedByMe : false
  },
  {
    id: "2",
    authorName: "Tim Berners-Lee",
    authorHandle: "timbl",
    content: "La puissance d'un lien hypertexte tient à ce que tout doit pouvoir être relié à tout. Cela exige que toute chose puisse être publiée sur le Web.",
    createdAt: "2026-07-06T22:00:00.000Z",
    likes : 287,
    likedByMe : true
  },
  {
    id: "3",
    authorName: "Linus Torvalds",
    authorHandle: "torvalds",
    content: "Je pouvais faire mieux en deux semaines, et c'est ce que j'ai fait.",
    createdAt: "2026-07-06T12:10:00.000Z",
    likes : 51,
    likedByMe : true
  },
  {
    id: "4",
    authorName: "John von Neumann",
    authorHandle: "jvonneumann",
    content: "Le seul fait certain est que les difficultés proviennent d'une évolution qui, bien qu'utile et constructive, est également dangereuse.",
    createdAt: "2026-07-05T15:05:00.000Z",
    likes : 34,
    likedByMe : false
  },
  {
    id: "5",
    authorName: "Radia Perlman",
    authorHandle: "rperlman",
    content: "L'algorithme de l'arbre couvrant était un bricolage que je considérais comme une mauvaise idée.",
    createdAt: "2026-07-05T09:40:00.000Z",
    likes : 467,
    likedByMe : false
  },
  {
    id: "6",
    authorName: "Donald Knuth",
    authorHandle: "dknuth",
    content: "Nous devrions oublier les petits gains d'efficacité, environ 97 % du temps : l'optimisation prématurée est la racine de tous les maux. Pourtant, nous ne devons pas laisser passer l'opportunité de structurer proprement notre code.",
    createdAt: "2026-07-04T20:15:00.000Z",
    likes : 320,
    likedByMe : true
  },
  {
    id: "7",
    authorName: "Barbara Liskov",
    authorHandle: "bliskov",
    content: "J'ai eu l'idée de l'abstraction de données. C'était une idée merveilleuse. Elle est sortie de nulle part.",
    createdAt: "2026-07-04T11:50:00.000Z",
    likes : 22,
    likedByMe : false
  },
  //faux tweets faits par l'ia 
  {
    id: "8",
    authorName: "Margaret Hamilton",
    authorHandle: "mhamilton",
    content: "Il n'y avait pas de choix, il fallait que ça marche du premier coup pour le système de guidage d'Apollo.",
    createdAt: "2026-07-03T14:30:00.000Z",
    likes : 67,
    likedByMe : false
  },
  {
    id: "9",
    authorName: "Alan Turing",
    authorHandle: "aturing",
    content: "Nous ne pouvons voir que peu de choses devant nous, mais nous pouvons voir qu'il y reste beaucoup à faire.",
    createdAt: "2026-07-03T08:15:00.000Z",
    likes : 26,
    likedByMe : false
  },
  {
    id: "10",
    authorName: "Guido van Rossum",
    authorHandle: "gvanrossum",
    content: "La lisibilité du code compte énormément. Un code est lu bien plus souvent qu'il n'est écrit.",
    createdAt: "2026-07-01T15:20:00.000Z",
    parentId:'7',
    likes : 96,
    likedByMe : true
  }
];
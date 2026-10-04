# Projet individuel - XYZ

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : Jazzia
- Nom : CHILLA
- Adresse mail universitaire : jazzia.chilla1@etu.univ-lorraine.fr
- Groupe de TD : A3
- Adresse du dépôt GitHub privé : jazzia.chilla1@etu.univ-lorraine.fr

## TD 01

### TD 01 - Élements réalisés

- J'ai initialisé mon projet.
- J'ai modélisé mes types de données (`Tweet` et `TweetImage`) pour structurer proprement les informations d'un tweet et de ses images.
- J'ai créé un petit jeu de données de test dans `src/data/tweets.ts`.
- J'ai codé le composant `TweetPreview` pour afficher les tweets, en gérant l'affichage conditionnel des images et l'affichage du texte limité à 180 caractères avec un bouton "Voir plus / Voir moins".
- J'ai assemblé le tout dans `TweetsList` en affichant ma collection avec `.map()` et des clés.

### TD 01 - Bonus réalisés

- Aucun

### TD 01 - Élements non réalisés

- Aucun

### TD 01 - Difficultés rencontrées + Solutions appliquées

- **Difficulté :** Au début, j'ai eu un peu du mal à gérer l'état d'ouverture du texte ("Voir plus") pour que chaque tweet se comporte de façon indépendante sans perturber les autres.
  - **Solution :** J'ai bien isolé l'état `isExpanded` à l'intérieur même du composant `TweetPreview` pour que chaque carte gère son propre affichage de manière autonome.

### TD 01 - Savoir expliquer

- **Le trajet d'un tweet :** Le tweet part des données de base, passe par la liste qui les découpe une par une, et arrive dans le composant d'affichage pour montrer l'auteur et le message.
- **L'image optionnelle :** Comme certains tweets n'ont pas d'image, on utilise une condition (`&&`) pour afficher la balise `img` uniquement si l'image existe vraiment, évitant ainsi de laisser un espace vide.
- **Le choix de l'ID comme clé (`key`) :** On utilise l'ID unique du tweet plutôt que son numéro de ligne pour aider React à reconnaître chaque carte sans se tromper si l'ordre change.
- **Pourquoi `isExpanded` est un état React :** Une simple variable ne suffit pas à rafraîchir l'écran. En utilisant `useState`, on prévient React que l'affichage doit changer instantanément quand on clique sur "Voir plus" ou "Voir moins".

### TD 01 - Déclaration d'usage de l'IA générative

- Je me suis servi de l'IA pour m'aider à structurer le code de base et vérifier la syntaxe TypeScript de mes types. J'ai également créé des tweets présant dans `data/tweets.ts`. Enfin, je m'en suis aidé pour que la strcuture du code soit la plus ressemblante possible à celle de Twitter. 

---

## TD 02

### TD 02 - Élements réalisés

- J'ai installé `react-router-dom` pour transformer mon application en une vraie SPA.
- J'ai transformé `App.tsx` en layout partagé avec le header et un `<Outlet />` pour garder une structure propre pendant la navigation.
- J'ai configuré toutes mes routes dans `main.tsx` : la page d'accueil (`TweetsMasterPage`), la page de détail dynamique (`tweets/:id`), et une page `NotFoundPage` pour gérer les erreurs.
- J'ai structuré la logique d'affichage : le fil principal ne montre que les tweets de premier niveau, et la page de détail récupère les tweets réponses.
- J'ai ajouté une prop `linkToDetail` pour éviter qu'un tweet principal ne contienne un lien vers sa propre page lorsqu'on est déjà dessus.

### TD 02 - Bonus réalisés

- Aucun

### TD 02 - Élements non réalisés

- Aucun

### TD 02 - Difficultés rencontrées + Solutions appliquées

- **Difficulté :** Je me suis retrouvé avec des tweets enfants qui s'affichaient directement sur le fil d'actualité principal, ce qui cassait la logique de navigation.
  - **Solution :** J'ai remis en place le filtre `!t.parentId` directement dans `TweetsMasterPage` pour m'assurer qu'on n'y voit que les publications de premier niveau. J'ai aussi veillé à bien utiliser les composants `Link` pour éviter les rechargements de page inutiles.

### TD 02 - Savoir expliquer

- **`Link` vs balise `<a>` :** Un lien classique `<a>` recharge toute la page web en repartant du serveur. Le composant `Link`, lui, change juste ce qu'il faut sur la page de façon fluide, sans tout recharger (c'est le principe de la SPA).
- **Le rôle de `App`, `Outlet` et des pages :** `App` fait office de cadre fixe (le header). L'`Outlet` est la zone vide au milieu qui change selon l'adresse où l'on se trouve, et les pages viennent s'y insérer.
- **Route inconnue vs tweet introuvable :** Une route inconnue mène à une page 404 car l'adresse n'existe pas du tout. Un tweet introuvable signifie que l'adresse est bonne, mais que l'ID demandé ne correspond à aucun tweet dans la base.

### TD 02 - Déclaration d'usage de l'IA générative

- L'IA m'a aidé à ajuster la logique de routage et à replacer correctement le filtre des tweets parents/enfants.

---

## TD 03

### TD 03 - Élements réalisés

- J'ai fait évoluer mon modèle de données pour intégrer la gestion des likes avec `likes` et `likedByMe`.
- J'ai remonté l'état global des tweets dans `App.tsx` et mis en place un contexte React (`TweetsContext`) pour partager proprement les données entre les pages.
- J'ai créé le composant de formulaire contrôlé `TweetForm` qui gère la limite des 280 caractères, désactive le bouton si besoin, et se vide après l'envoi.
- J'ai implémenté les fonctions `addTweet` (pour publier) et `toggleLike` (pour aimer ou retirer son like de façon immuable).
- J'ai créé un hook personnalisé `useDocumentTitle` basé sur `useEffect` pour adapter dynamiquement le titre de l'onglet du navigateur selon la page active.
- J'ai appliqué la charte graphique et la palette de couleurs officielle de l'application (bleu clair, bleu gris, gris clair, rose, magenta et noir).

### TD 03 - Bonus réalisés

- Aucun

### TD 03 - Élements non réalisés

- Aucun

### TD 03 - Difficultés rencontrées + Solutions appliquées

- **Difficulté :** J'ai dû prendre le temps d'harmoniser toutes les petites couleurs (les teintes de gris, les textes secondaires, les boutons) pour que l'interface respecte exactement la palette graphique demandée sans fausse note visuelle.
  - **Solution :** J'ai repris calmement composant par composant (`TweetForm`, `TweetPreview`, etc.) pour uniformiser les codes couleur et obtenir un rendu propre.
- **Difficulté :** J'ai eu beaucoup de mal à comprendre comment connecter le formulaire de saisie au reste de l'application pour que le nouveau tweet apparaisse directement en haut du fil sans casser l'état global et en respectant l'immutabilité du tableau.
  - **Solution :** J'ai pris le temps de bien structurer la fonction addTweet dans `App.tsx` en utilisant la forme `setTweets` pour ajouter le nouveau tweet au tout début du tableau, puis j'ai proprement transmis cette fonction via le contexte jusqu'au composant `TweetForm`.

### TD 03 - Savoir expliquer

- **Pourquoi l'état `tweets` est dans `App` :** Vu que le fil d'actualité et la page de détail ont besoin d'accéder aux mêmes tweets et de les modifier, on place cet état au plus haut (dans le parent commun `App`) pour que tout le monde partage la même source de vérité.
- **Le trajet des fonctions (`addTweet` et `toggleLike`) :** Elles sont créées tout en haut dans `App` et descendent de composant en composant jusqu'au bouton cliqué. Quand on clique, l'ordre remonte pour modifier l'état global.
- **Rendu React vs `useEffect` :** Le rendu calcule ce qui s'affiche à l'écran. `useEffect` s'occupe des petits à-côté, comme modifier le titre de l'onglet du navigateur, juste après que l'affichage a eu lieu.

### TD 03 - Déclaration d'usage de l'IA générative

- J'ai utilisé l'IA pour valider la structure du contexte React, écrire proprement les fonctions de mise à jour d'état immuables, et m'aider à appliquer les codes de la palette graphique.
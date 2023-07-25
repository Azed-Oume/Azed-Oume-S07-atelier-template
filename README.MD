# O'Playlist

O'Playlist est un projet de site web permettant de créer des playlists de musique à partir de vidéos Youtube.

## Objectifs

Vos objectif durant cette atelier sont les suivants :

- Récupérer et installer le projet
- Mettre en place la base de données
- Implémenter les fonctionnalité de base de l'application

## Fonctionnalités

- Lister toutes les playlists
- Afficher la liste des vidéos d'une playlist
- Ajouter une playlist
- Ajouter une vidéo à une playlist

## Etape :one: - Récupérer et installer le projet

1 - Vous devez désormais cloner le projet et isntaller ses dépendances.
Attention, le projet risque d'avoir besoin d'autres dépendances que celles déjà présentes dans le fichier `package.json`. Il faudra donc les installer au fur et à mesure.

2 - Vous devez ensuite remplir le fichier `.env` avec vos informations de connexion à la base de données. Attention, ce fichier ne doit pas être versionné et donc n'existe pas sur votre version cloner du dépot. Un fichier exemple est fourni dans le dépot.


## Etape :two: - Mettre en place la base de données

La base de données de notre application est celle que nous avons déjà créé lors d'un exercice précédent. Vous pouvez donc vous référer à ce dernier pour vous aider. Un fichier SQL est fourni dans le dépot au cas où cette base n'éxisterait plus chez vous. Il vous suffit de l'importer dans votre base de données.

## Etape :three: - Implémenter les fonctionnalité de base de l'application

Les pages web nécessaire a l'implémentation sont déjà prête ainsi que les routes associées. Seuls les controlles sont un peu vides pour le moment. Il vous faudra donc les implémenter.
Afin de mieux maintenir l'application, il est demandé de faire les développement en suivant le pattern ActiveRecord. 

Vous aurez donc deux modèles à créer : `Playlist` et `Song`. 

### Playlist

Pour le modèle `Playlist`, vous aurez besoin de créer les méthodes suivantes :

- `findAll()` : Récupère toutes les playlists
- `save()` : Sauvegarde la playlist en base de données.


### Song

Pour le modèle `Song`, vous aurez besoin de créer les méthodes suivantes :

- `findAllByPlaylistId()` : Récupère toutes les chansons d'une playlist
- `addSongToPlaylist()` : Ajoute une chanson à une playlist


Une fois les modèles mis en place, on peut les importer dans le controller et remplacer les méthodes pour relier la BDD à l'application

## Bonus 

### Supprimer une chanson dans une playlist

Si vous avez encore du temps, vous pouvez ajouter une fonctionalité permettant la suppression d'une chanson dans une playlist. 

Il faudra penser à ajouter un bouton dans la page de la playlist pour pouvoir supprimer une chanson.

### Compter les chanson d'une playlist

Sur la page des playlists, vous pouvez ajouter un compteur de chanson pour chaque playlist.

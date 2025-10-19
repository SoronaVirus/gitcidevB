MARTINEAU / BEAUFILS--VANNIER

Voici notre repository de notre projet GitHub.

Nous avons utilisés des commandes comme : 

-git branch
-git checkout -b
-git commit -m
-git status
-git add .
-git push -u origin
-git pull origin

Switch est beaucoup plus concentré sur les branches. Il va se focaliser sur le changement de branche, contrairement à checkout qui certes se concentre sur les branches,
mais il peut aussi faire d'autres choses, comme restaurer des fichiers.

Pull va merge tout le contenu du git avec le projet local, et fetch fait presque la même chose, juste il ne merge pas tout le contenu, mais juste les modifications.

Rebase c'est pour ré-organiser ses commits. Et revert c'est pour revenir en arrière, dans les commits sans le retirer de l'historique.

Tag est une étiquette qu'on peut mettre sur des commits, pour mieux se retrouver.

Stash, c'est pour sauvegarder ce qu'on fait, dans un autre endroit et revenir avant les modifications dans la sauvegarde. Ça sert à repartir de "0"
sans avoir supprimer nos modifications.

Release est utilisé après un tag. Il permet de rendre une version complète et fonctionnelle. C'est juste pour sortir une version après un tag.
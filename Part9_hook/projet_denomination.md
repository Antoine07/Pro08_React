# Projet dénomination

Dans ce projet vous n'utiliserez pas Redux mais uniquement context API pour gérer un store. On essayera de refaire également ce projet avec Redux dans un deuxième temps.

## Partie 1

Vous allez créer une petite application qui permet de saisir un montant donné et qui fournit la monnaie token que l'on peut rendre par rapport à ce montant.

Vous devez utiliser le module react-router pour gérer le menu. Pensez également aux redirections et à la gestion du state pour re-présenter le calcul d'un nouveau montant.

Voici les dénominations, c'est-à-dire les tokens que l'on pourra rendre en fonction d'un montant :

```js

const denominations = [1, 5, 10, 20, 50, 100]

```

Vous devrez développer une petite interface permettant de saisir le montant et de rendre les dénominations. Vous utiliserez le bootstrap Twitter et les notions de composition pour gérer l'affichage.

Un squelette d'application sera fait avec create-react-app.

Voici des wireframes qui vous permettrons de développer ce projet :

## Wireframe 1 saisir le montant

```txt

Donner un montant [ 250 ]

[ Denomination ]

```

## Wireframe 2 afficher les tokens en fonction du montant

```txt

Vous avez demandé la monnaie sur 250 :

token 100 : 2

token 20 : 2

token 10 : 1

```

## Part 2 configuration des dénominations

Vous devez configurez votre reducer pour gérer cette partie, il contiendra la partie algorithmique et configuration.

Créez un menu permettant d'afficher la page principale avec notre système de dénomination et une page supplémentaire pour proposer la configuration des dénominations, vous proposerez deux types de dénomination.

Si on saisit un montant et que l'on valide on affiche les dénominations et un lien pour re-saisir un autre montant à calculer si besoin.

Voyez pour vous aider les wireframes suivants :

- Rendre les tokens en utilisant l'une des listes suivantes, une fois valider vous retournerez sur la page principale **[ Tokens ]** :

```txt

    [ Tokens ] [ Configuration token]

    choisir une des deux dénominations ci-dessous :

    - [ 1, 2, 3, 5, 10 ]  choix 1 []

    - [1, 5, 10, 20, 50, 100]  choix 2 []

    [valider]

```

- Une fois que l'on a configuré le rendu des tokens on se retrouve sur la page d'accueil, mentionnez alors le choix que l'on a fait dans la configuration :

```txt

    [ Tokens ] [ Configuration token]

    vous avez choisi la liste des tokens : 1,2,3,5,10

    Donner un montant [ 253 ]

    [ Denomination ]

```

Et une fois validé comme dans la partie 1 on affiche le résultat avec un lien pour saisir un autre montant. Ce lien conduira à la page de saisi d'un montant page Tokens :

```txt

Vous avez demandé la monnaie sur 253 :

token 10 : 25

token 1 : 3

[saisir un autre montant]

```

*Welcome to my humble Potfolio

[lien de deploiement](https://ounissasadaoui.github.io/Portfolio/)
**Moi c'est Ounissa!

***Etapes de réalisation:

1-création du dossier, 
j'ai pour ça choisi une palette de couleurs d'automne, en utilisant le site "coolers" i think, d'après l'image de Dean Winchester dans Blood Lust, saison 2.

Ensuite, sur figma, j'ai fait la mauquette, de ce que je veux avoir comme résultat, pour l'instant, j'ai la page d'accueil, le menu, la page de contact, ainsi que la page du projet.

 Voilà à ce que ça va ressembler:
 favicon:
 
 ![favicon](./asset/apple-touch-icon%201.png)
 
 ma page d'accueil:
 ![icones](./asset/page-acceuil.png)

le style général de mon menu:
![favicon](./asset/page_menu_déroulé.png)

ce qu'il me faut encore:
  la page des compétences
  celle éducation
  une image pour ma page d'accueil, 

utiliser une icone dans html: how to:

j'étais partie sur une bibliothèque d'icones de flaticons, mais je vais plus partir sur fontAwesome, qui est plus simple et facile à utiliser   
donc les étapes, c'est on copie dans le head cette ligne de code:
```
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

```

puis pour chaque icone utilisée, dans une balise i, ou span , on met son code 
```
 <i class="fa-solid fa-house"alt="icone maison"></i> 
 ```

d'ailleurs, ma bibliothèque d'icones:
```html
  <i class="fa-solid fa-house"></i> //home
  <i class="fa-solid fa-book"></i>  //compétences
  <i class="fa-solid fa-mobile-retro"></i> //contact
  <i class="fa-solid fa-gears"></i> //projets
  <i class="fa-solid fa-person-biking"></i> //agilité
  <i class="fa-solid fa-eye"></i> //accessibilié
  <i class="fa-brands fa-html5"></i> //html
  <i class="fa-brands fa-css3-alt"></i> //CSS
  <i class="fa-brands fa-js"></i> //js
  <i class="fa-brands fa-java"></i> //java
  <i class="fa-solid fa-signs-post"></i> //i really don't remember, should've done it eralier
  <i class="fa-solid fa-code" style="color: #000000;"></i> //programmation
  <i class="fa-brands fa-sketch" style="color: #000000;"></i>//design graphique

```

pour la page de contact, je vais faire un simple formulaire de contact

## Etapes de la création:
### Ma navbar:
Au début, je voulais partir sur un menu burger, sur le côté, révélant mes sections, mais j'ai finalement, jusqu'ici du moins, choisi de garder une nav bar tout en haut de la page
 * le but est quand meme que ça reste visible tout au long de la navigation

c'est une navbar classique, avec des icones à droite et à gauche, dans le header, les icones sont bien évidement cliquables, d'où les class et les href:
``` html
    <div class="navbar_droite">
     <a href="#"><i class="fa-solid fa-book" style="color: #000000;"></i></a>

```
### Ma section Compétences:
on utilise l'id "competences" utilisé plus haut, pour que le tout soit cohérent et surtout pour que quand on appuis sur le bouton, ça nous emmène à la section voulue.

<b>On fera la même chose pour toutes les sections </b>
<i>  Essai de faire une font pour les titres <i>
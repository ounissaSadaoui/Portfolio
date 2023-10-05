*Welcome to my humble Potfolio

[lien de deploiement](https://ounissasadaoui.github.io/Portfolio/)
**Moi c'est Ounissa!

***Etapes de réalisation:

1-création du dossier, 
j'ai pour ça choisi une palette de couleurs d'automne, en utilisant le site "coolers" i think, d'après l'image de Dean Winchester dans Blood Lust, saison 2.

Ensuite, sur figma, j'ai fait la mauquette, de ce que je veux avoir comme résultat, pour l'instant, j'ai la page d'accueil, le menu, la page de contact, ainsi que la page du projet.

 Voilà à ce que ça va ressembler:
 favicon: 
 ![favicon]("./asset/apple-touch-icon 1.png")
 
 ma page d'accueil:
 ![icones]("./asset/page-acceuil.png")

le style général de mon menu:
![favicon]("./asset/page_menu_déroulé.png")

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
```
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
  <i class="fa-solid fa-signs-post"></i>

```

pour la page de contact, je vais faire un simple formulaire de contact
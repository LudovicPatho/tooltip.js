# tooltip.js

Demo visible :  https://ludovicpatho.github.io/tooltip.js/

## Comment Utiliser Tooltip.js ? 

```
Tooltip.wrap(element, position);
```

| option       |     type     |   description      |
| ------------- | -------------   | ---------      |
| element       |     $string      |      Il s'agit du sélécteur css à qui on attribue le tooltip. Tous les sélecteurs css sont valables   |
| position      |     $string      |      Il s'agit de la postion du tool tip. 4 choix sont possibles. 'top', 'left', 'right', 'bottom' Par défaut, la position est 'top' |


### Exemple
Téléchargez le fichier ![fichier](https://github.com/LudovicPatho/tooltip.js/blob/master/tooltip.zip) et placez le juste avant la balise de fermeture body.
```html
<script src="tooltip.js"></script>
```

Vous pouvez aussi charger le css 
```html
 <link rel="stylesheet" href="assets/css/toolptip.css">
``` 

Donnez une class à votre élément et remplissez le avc la balise title :
```html
<img class="item1" src="http://via.placeholder.com/350x150" alt="" title="Ceci un tool tip">
```

Vous pouvez aussi injecter du html dans le tooltip :
```html
<img class="item4" src="http://via.placeholder.com/350x150" alt="" data-tooltip="#tool-tip__container">
```
Dans ce cas, vous devez mettre l'attribut id au conteneur & mettre l'attribut ```data-tooltip``` avec l'id conteneur que vous souhaitez injecter dans le tooltip.
```html
<div id="tool-tip__container" class="tool-tip__container">
  <h2>Ceci est une tool tip en html</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</p>
  <img src="http://lorempicsum.com/futurama/380/200/2" alt="" title="Ceci est un tooltip">
</div>
```



La class tooltip s'initialise en lancant la fonction Tooltip.wrap() dans votre fichier javascript;

```javascript
 Tooltip.wrap('.item1', 'right');
 Tooltip.wrap('.item4', 'top');
```





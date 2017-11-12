# tooltip.js

Demo visible :  https://ludovicpatho.github.io/tooltip.js/

## Comment Utiliser Tooltip.js ? 

```
Tooltip.wrap(element, position);
```

| option       |     type     |   description      |
| ------------- | -------------   | ---------      |
| element       |     string      |      Il s'agit du sélécteur css à qui on attribue le tooltip. Tous les sélecteurs css sont valable   |
| position      |     string      |      Il s'agit de la postion du tool tip. 4 choix sont possibles. 'top', 'left', 'right', 'bottom' |


## Chargement du fichier 
Téléchargez le fichier ![fichier](https://github.com/LudovicPatho/tooltip.js/blob/master/tooltip.zip) et placez le juste avant la balise body.
```html
<script src="tooltip.js"></script>
```
Donnez une class à votre élément et remplissez le avc la balise title :
```html
<img class="item1" src="http://via.placeholder.com/350x150" alt="" title="Ceci un tool tip">
```



La class tooltip s'initialise en lancant la fonction Tooltip.wrap();

```javascript
 Tooltip.wrap('.item1', 'right')
```





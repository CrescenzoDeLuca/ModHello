const express = require('express');
const app = express();
const lista = [
              'pizza fritta',
              'frustino fritto',
              'pollo fritto',
              'spaghetti fritti',
              'fritto fritto'
      ]

app.set('views', __dirname+'/index');
app.set('view engine', 'ejs');

app.get('/list', function(req, res) {

        res.render('list', {
          lista:lista
        });

});


app.get('/saluta/:nome', function (req, res) {
       const nome = req.params.nome

       res.render('index', {
           Saluto: nome
       });
});



app.listen(3000 || process.env.PORT);

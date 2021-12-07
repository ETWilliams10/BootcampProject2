const express = require('express');
const routes = require('./controllers');
const { engine } = require('express-handlebars');


const app = express();
let port = process.env.PORT || 3001;






app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


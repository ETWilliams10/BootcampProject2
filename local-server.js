const express = require('express');
const { engine } = require('express-handlebars');
const routes = require('./controllers');

let port = process.env.PORT || 3001;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


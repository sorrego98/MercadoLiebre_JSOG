const express = require(`express`);
const app = express();
const path = require(`path`);

const port = 3030;
const publicPath = path.resolve(__dirname, `../public`);
const homePath = path.resolve(__dirname, `./views/home.html`)

app.get(`/home`, (req, res) => res.sendFile(homePath));
app.use(express.static(publicPath));

app.listen(port, () => console.log(`Server done`));
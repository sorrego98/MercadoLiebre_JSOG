const express = require(`express`);
const app = express();
const path = require(`path`);

const port = process.env.PORT || 3001;
const publicPath = path.resolve(__dirname, `../public`);
const homePath = path.resolve(__dirname, `./views/home.html`)
const registerPath = path.resolve(__dirname, `./views/register.html`)
const loginPath = path.resolve(__dirname, `./views/login.html`)
app.use(express.static(publicPath));

app.get(`/`, (req, res) => res.sendFile(homePath));
app.get(`/register`, (req, res) => res.sendFile(registerPath));
app.get(`/login`, (req, res) => res.sendFile(loginPath));


app.listen(port, () => console.log(`Server Running in ${port}`));
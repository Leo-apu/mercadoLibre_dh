const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3300;

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post(["/login", "/signup"], (req, res) => {
    res.redirect("/");
});
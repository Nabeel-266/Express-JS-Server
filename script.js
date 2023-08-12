import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.status(200).send("Welcome to Home page");
})

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to About page");
})

app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to Contact page");
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})
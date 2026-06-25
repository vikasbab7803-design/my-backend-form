const express = require('express');
const app = express();
const path = require('path');

// Form data ko read karne ke liye middleware
app.use(express.urlencoded({ extended: true }));

// 1. Jab browser par localhost:3000 khule, toh HTML file dikhe
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '1st.html'));
});

// 2. Submit karne par data yahan aayega
app.post('/submit-form', (req, res) => {
    console.log("--- AA GAYA DATA TERMINAL MEIN! ---");
    console.log(req.body); // Yeh line terminal mein aapka data print karegi
    
    res.send(`<h1 style="color: green; text-align: center; margin-top: 50px;">🎉 congratulation please check your account🎉</h1>`);
});

app.listen(3000, () => {
    console.log("Server running at: http://localhost:3000");
});
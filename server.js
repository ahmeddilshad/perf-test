const express = require("express");
const app = express();


const serviceMethod = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("He There!");
        }, 1000);
    });
};

app.get('/get', async (req, res) => {
    return res.send(await serviceMethod());
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
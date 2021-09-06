const cors = require('cors');
const express = require("express");
const app = express();
app.use(cors());
app.options('*', cors());


const serviceMethod = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("He There!");
        }, 500);
    });
};

app.get('/get', async (req, res) => {
    return res.send(await serviceMethod());
});

app.get('/get/one', async (req, res) => {
    return res.send(await serviceMethod());
});

app.get('/get/two', async (req, res) => {
    return res.send(await serviceMethod());
});

app.get('/get/three', async (req, res) => {
    return res.send(await serviceMethod());
});

app.get('/get/four', async (req, res) => {
    return res.send(await serviceMethod());
});

app.get('/get/five', async (req, res) => {
    return res.send(await serviceMethod());
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});

require('dotenv').config();

const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios")
const app = express();

app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const request = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": process.env.CHAT_ENGINE_API_KEY } }
        )
        return res.status(request.status).json(request.data)
    } catch (e) {
        return res.status(e.response).json(e.response)
    }
})
app.listen(3001)
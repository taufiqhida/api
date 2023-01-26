const express = require('express')
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Hello Word`)
})

app.post('/', (req, res) => {
    const input = req.body
    res.json({
        data : input
    })
})

app.listen(3000, () => {
    console.log(`Server berjalan di port 3000`)
})
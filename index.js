const express = require('express')
const app = express();
const userRouters = require('./routes/user')

app.use(express.json())

app.use('/users', userRouters)

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
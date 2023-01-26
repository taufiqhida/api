const express = require('express')
const router = express.Router()

let GetResponse = (status, message, data) => {
    let response ={
        status,
        message,
        data
    }
    return response
}

router.get('/', (req, res) => {
    let response = GetResponse(
        200,
        "Berhasil",
        [
            {
                "id" : 1,
                "username" : "taufiq",
                "password" : "taufiq123"
            },
            {
                "id" : 2,
                "username" : "nisrina",
                "password" : "nisrina123"
            }
        ]
    )
    res.status(200).json(response)
})

router.post('/', (req, res) => {
    const response = GetResponse(
        202,
        "Berhasil Menginpukan Data",
        req.body
    )
    res.status(202).json(response)
})

module.exports = router
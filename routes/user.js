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

module.exports = router
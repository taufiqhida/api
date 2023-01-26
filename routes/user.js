const express = require('express')
const router = express.Router()

let response = {
    "code": 200,
    "message": "Berhasil Mengirim Data",
    "data":[
        {
            "id": 1,
            "username": "taufiq",
            "password" : "taufiq123"
        },
        {
            "id": 2,
            "username": "nisrina",
            "password" : "nisrina123"
        }
    ]
}

router.get('/', (req, res) => {

})

module.exports = router
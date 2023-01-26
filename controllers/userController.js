let GetResponse = (status, message, data) => {
    let response ={
        status,
        message,
        data
    }
    return response

}

module.exports.getAllData = (req, res) => {
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
}

module.exports.insertData = (req, res) => {
    const response = GetResponse(
        201,
        "Berhasil Menginpukan Data",
        req.body
    )
    
    res.status(201).json(response)
}
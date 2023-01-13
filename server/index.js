const express = require('express')

const app = express()
const PORT = 4000;

app.get('/', (req, res) => {
    let listings = [
        {
            "title": "Digital Marketer",
            "description": "lorem ipsum"
        },
        {
            "title": "Internship",
            "description": "lorem ipsum"
        },
    ]
    res.json(listings)
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})

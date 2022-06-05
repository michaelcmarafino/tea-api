const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const tea = {
    oolong: {
        type: "black",
        origin: "Yo momma's house",
        waterTemp: 200,
        steepTimeSeconds: 120,
        caffinated: true,
        flavor: "delicious",
    },
    matcha: {
        type: "green",
        origin: "Your mother",
        waterTemp: 220,
        steepTimeSeconds: 180,
        caffinated: false,
        flavor: "delicious",
    },
    unknown: {
        type: "unknown",
        origin: "unknown",
        waterTemp: 0,
        steepTimeSeconds: 0,
        caffinated: false,
        flavor: "unknow",
    },
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req, res) => {
    const teaName = req.params.name.toLowerCase()
    if (tea[teaName]) {
        res.json(tea[teaName])
    } else {
        res.json(tea["unknown"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

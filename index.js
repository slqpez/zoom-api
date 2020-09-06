const app = require("./app.js")

app.listen(app.get("port"), () => {
    console.log(`Server runing on http://localhost:${app.get("port")}`)
})
const express = require("express");
const app = express();
const home = require("./routes/home.js")

const port = process.env.PORT || 3000;


app.set('views', './views')
app.set('view engine', 'pug')



//Routes
app.use(home)


app.listen(port, () => {
    console.log(`Server runing on http://localhost:${port}`)
})
const express = require("express");
const router = express.Router();


router.get('/', function (req, res) {
    res.send("Página principal");
});

router.get('/otra', function (req, res) {
    res.send("Esta esla otra página");
});

module.exports = router;
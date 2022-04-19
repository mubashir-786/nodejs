const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    const ads = [{
        "id": 1,
        "title": "ye posts ha",
        "body": "ye post ki body ha"
    }, {
        "id": 2,
        "title": "Kanpein tang rahi hain",
        "body": "Kanpein tang rahi hain, Jab barish hoti to pani ata hai"
    }]
    res.send(ads);
})

module.exports = router;
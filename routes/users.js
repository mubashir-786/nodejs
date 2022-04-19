const express = require('express');
const router = express.Router();

const userData =[
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
    {
        id: 3,
        name: 'Jack ',
    },
]

router.get('/all', (req, res) => {
    res.send(userData);
}
)

router.get('/firstUser', (req, res) => {
    res.send(userData[0]);
}
)

router.post('/addUser', (req, res) => {
    // const newUser = req.body;
    userData.push(req.body);
    res.send({
        message: 'User added successfully',
        data: newUser
    });
})

module.exports = router;


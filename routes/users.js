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

router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    userData.forEach((user, index) => {
        if (user.id === id) {
            userData[index] = newUser;
        }
    });
    res.send({
        message: 'User updated successfully',
        data: newUser
    });
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    userData.forEach((user, index) => {
        if (user.id === id) {
            userData.splice(index, 1);
        }
    });
    res.send({
        message: 'User deleted successfully',
        data: id
    });
}
)
module.exports = router;


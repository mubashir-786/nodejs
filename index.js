const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.use(express.json())
app.use('/', require('./routes'))


// app.use('/posts',(req,res) => {
//     const posts = [{
//         "id": 1,
//         "title": "ye posts ha",
//         "body": "ye post ki body ha"
//       }, {
//         "id": 2,
//         "title": "Kanpein tang rahi hain",
//         "body": "Kanpein tang rahi hain, Jab barish hoti to pani ata hai"
//       }]
//       res.send(posts);
// })
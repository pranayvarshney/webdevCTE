const express = require('express')
const router = express.Router()
const User = require("./models/userSchema")


router.get('/', (req, res) => {
    User.find({}).then(users => {
        res.send(users)
    }).catch(error => {
        res.send(error)
    })
    // User.findById({ _id: "1754g" }).then(users => {
    //     res.send(users)
    // }).catch(error => {
    //     res.send(error)
    // })
})

router.post('/v1', (req, res) => {
    const info = {
        name: req.body.name,
        _id: req.body._id,
        hostel_name: req.body.hostel_name,
        hostel_number: req.body.hostel_number
    }
    const user = new User(info)
    user.save().then((user) => {
        res.status(200).send(user)
    }).catch(error => {
        console.log(error)
    })



})

//  complete the put request look at the solution later
router.put('/v1/:id', (req, res) => {
    console.log(req.params)
    res.send("Put request")
})
// solution
// router.put('/v1/:id', (req, res) => {
//    const info = {
//         name: req.body.name,
//         _id: req.body._id,
//         hostel_name: req.body.hostel_name,
//         hostel_number: req.body.hostel_number
//     }
//    User.findByIdAndUpdate({_id : req.params.id},info).then(user=>{
//     res.send(user)
//    }).catch(error =>{ 
//     res.send(error)
//    })
//  })





router.delete('/v1/:id', (req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }).then(user => {
        res.send(user)
    }).catch(error => {
        console.log(error)
    })
})




module.exports = router
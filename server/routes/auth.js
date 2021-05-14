const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User  = mongoose.model("User");
const {JWT_SECRET} = require('../keys');

const requireLogin = require('../middlewares/requirelogin');

router.get('/protected',requireLogin, (req, res)=>{
    res.json({message : "hello user"});
});


router.post('/signup', (req, res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error : "please enter all the fields "});
    }
    User.findOne({email  : email})
    .then(savedUser => {
        if(savedUser){
           return  res.status(422).json({error : "The User with given email already exist in the database"});
        }
        else{
            bcrypt.hash(password, 12)
            .then(hashedpassword =>{
                const user = new User({
                    email, 
                    password : hashedpassword,
                    name
                });
                
                user.save()
                .then(user =>{
                    res.json({message : "User Saved Successfully!"});
                })
                .catch(err =>{
                    console.log(err);
                })

            })  
        }

    })
    .catch(err =>{
        console.log(err);
    })
})

router.post('/signin', (req, res)=>{
    const {email, password} =  req.body ;
    if(!email || !password ){
        return res.status(422).json({
            error : "please provide all the required fields"
        })
    }
    User.findOne({email : email})
    .then(savedUser =>{
        if(!savedUser){
            return res.status(422).json({
                error : "please enter valid email or password"
            })
        }
        bcrypt.compare(password, savedUser.password)
        .then(matched =>{
            if(matched){
               const token = jwt.sign({_id : savedUser._id}, JWT_SECRET);
               const {_id,name, email, password} = savedUser;
               res.json({token, user:{_id, email, password}});
            }
            else{
                return res.status(500).json({
                    error : "Please enter a valid email or password"
                });
            }
        })
        .catch(err =>{
            console.log(err);
        })
    })
    .catch(err =>{
        console.log(err);
    })

})

module.exports = router;

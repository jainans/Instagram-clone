const express = require("express");
const mongoose = require("mongoose");
const requirelogin = require("../middlewares/requirelogin");
const router = express.Router();
const requireLogin = require('../middlewares/requirelogin');
const Post = mongoose.model("Post");

router.get('/allposts',requireLogin, (req ,res)=>{
    Post.find()
    .populate("postedBy", "_id name email")
    .then(posts=>{
        res.json({posts});
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/myposts', requireLogin, (req, res)=>{
    Post.find({postedBy : req.user._id})
    .populate("postedBy", "_id name email")
    .then(posts =>{
        res.json({
            posts
        })
    })
    .catch(err=>{
        console.log(err);
    })
})


router.post('/createpost', requireLogin, (req, res)=>{
    const {title, body, photo} = req.body;
    console.log(title, body, photo);
    if(!title || !body || !photo){
        return res.status(422).json({error : "please enter all the fields"});

    }
    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        photo,
        postedBy : req.user

    });

    post.save()
    .then(dat=>{
        res.json({post : dat})
    })
    .catch(err =>{
        console.log(err);
    })


})

module.exports = router;
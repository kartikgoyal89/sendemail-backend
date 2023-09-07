const express = require('express');

const router = express.Router();


router.post('http://localhost:5000/register',(req,res)=>{
    console.log(req.body);
})
module.exports = router;

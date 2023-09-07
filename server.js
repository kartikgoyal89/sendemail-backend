const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const colors = require('colors');
const sendEmail = require('./utils/sendEmail')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

// Routes
app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.post('/api/sendemail',async(req,res)=>{
    const {email} = req.body;
    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Thank you Message from Kartik";
        const message = `
        <h3>Hello Kartik</h3>
        <p>Thank you for the tutorial</p>
        <p> Regards... </p>
        `

        await sendEmail(subject,message,send_to,sent_from,reply_to)
        res.status(200).json({success: true,message: "Email Sent!"})
    } catch (error) {
        res.status(500).json(error.message)
        console.log(error);
    }
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`.bgCyan.white);
})


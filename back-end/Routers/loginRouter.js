import express from 'express';
import { users } from '../data.js'

export const loginRouter = express.Router();

loginRouter.use(express.json({type: '*/*'}));
loginRouter.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

//signup
loginRouter.post('/signUp',(req, res)=>{
        users.push(req.body);
        res.status(200).send();
        console.log('Successfully signed up'); 
        console.log(users)
    }
)

//login
loginRouter.get('/login',(req, res)=>{
    res.send(users);
})
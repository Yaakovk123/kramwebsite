import express from 'express';
import { users } from './data.js';
import { loginRouter } from './Routers/loginRouter.js';



const app = express();
const PORT = process.env.PORT || 4000;




//Routes
app.use('/login', loginRouter);


app.listen(PORT, ()=>console.log( `listening on ${PORT}`));
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRouter')



const app = express();
app.use(express.json());


app.use('/api/user', authRoutes)
app.use('/api/auth',userRoutes)

mongoose.connect(process.env.MONGO_URI, {
    
    useUnifiedTopology: true
})
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));




    
const PORT = process.env.PORT;

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
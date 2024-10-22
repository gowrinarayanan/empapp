const express=require('express')
const app=new express();
const morgan=require('morgan')
app.use(morgan('dev'))
const cors=require('cors')
app.use(cors())
const user_route=require('./routes/user')
const employeeroutes=require('./routes/empRoutes')
app.use('/employee',employeeroutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');

app.use("/user",user_route)

app.listen(PORT,()=>{
    console.log(`server is running on the PORT ${PORT}`)
})
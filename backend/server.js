// importing express module
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'

//  import files
import connectDB from './config/db.js'

// import rotes
import authRoutes from './routes/authRoutes.js'
import testRouters from './routes/testRouters.js'

//  dotenv configuration
dotenv.config()

// database connection callingś
connectDB();

const app = express();
app.use(cors())
app.use(morgan('dev'))


// app.get("/", (req,res) =>{
//     res.send("Hello World");
// })

// Middleware to parse JSON bodies
app.use(express.json())

//  to create routes 
app.use('/api/v1/test', testRouters);
app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log(`Server is running in ${process.env.DEV_MODE} mode on port no. ${PORT}`)
})


import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose'
import premiereLeague from './routes/premiereRoutes.mjs';
import laLiga from './routes/laligaRoutes.mjs';
import seriaA from './routes/seriaRoutes.mjs';



const app = express();
const PORT = process.env.PORT || 3000;   
const MONGO_URL = process.env.MONGO_URL


const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // 
};

app.use(express.json());
app.use(requestLogger);

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.get('/', (req, res) => {
    res.send("HELLO");
});

app.use("/premiere", premiereLeague);
app.use("/laliga", laLiga);
app.use("/seriaa", seriaA);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

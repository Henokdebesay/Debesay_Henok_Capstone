import '/Users/macuser/Documents/github/capstone/.env';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

import premiereLeague from './routes/premiereRoutes.mjs';
import laLiga from './routes/laligaRoutes.mjs';
import seriaA from './routes/seriaRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

mongoose.set("strictQuery", false);
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

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

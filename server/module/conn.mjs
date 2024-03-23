import { MongoClient } from 'mongodb';
import '/Users/macuser/Documents/github/capstone/server/.env';


const url = MONGO_URL;
const dbName = 'Football_Leagues';
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}

export { connect };

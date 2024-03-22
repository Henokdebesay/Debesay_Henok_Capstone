import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://henokdebesay1:henokdebesay1@cluster0.jme2bid.mongodb.net/';
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

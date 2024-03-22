import express from "express";
import { connect } from "../module/conn.mjs";
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("Premiere_League");
        const results = await collection.find({}).toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("Premiere_League");
        const newData = req.body; 
        await collection.insertOne(newData);
        res.status(201).send("Data added successfully");
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("Premiere_League");
        const id = req.params.id;
        const updatedData = req.body; 
        await collection.updateOne({ _id: new ObjectId(id)}, { $set: updatedData });
        res.status(200).send("Data updated successfully");
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("Premiere_League");
        const id = req.params.id;
        await collection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).send("Data deleted successfully");
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;

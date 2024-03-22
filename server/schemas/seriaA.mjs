import mongoose from 'mongoose';

const seriaSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'seriaTeams' });

const SeriaModel = mongoose.model('seriaModel', seriaSchema);

const newTeam = new SeriaModel({
    "name": "Juventus",
    "founded": 1897,
    "stadium": "Allianz Stadium",
    "city": "Turin, Italy"
});

SeriaModel.createCollection();

export default SeriaModel;

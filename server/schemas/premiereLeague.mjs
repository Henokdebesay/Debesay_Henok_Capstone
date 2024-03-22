import mongoose from 'mongoose';

const premiereSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'seriaTeams' });

const premiereModel = mongoose.model('premiereModel', premiereSchema);

const newTeam = new premiereModel({
    "name": "Juventus",
    "founded": 1897,
    "stadium": "Allianz Stadium",
    "city": "Turin, Italy"
});

premiereModel.createCollection();

export default premiereModel;

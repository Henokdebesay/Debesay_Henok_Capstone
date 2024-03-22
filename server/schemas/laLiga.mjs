import mongoose from 'mongoose';

const laLigaSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'seriaTeams' });

const laLigaModel = mongoose.model('laLigaModel', laLigaSchema);

const newTeam = new laLigaModel({
    "name": "Juventus",
    "founded": 1897,
    "stadium": "Allianz Stadium",
    "city": "Turin, Italy"
});

laLigaModel.createCollection();

export default laLigaModel;

import mongoose from 'mongoose';

const seriaSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'seriaTeams' });

const SeriaModel = mongoose.model('seriaModel', seriaSchema);

const newTeam = new SeriaModel({
    
      name: {
        type: String,
        required: true,
      },
      founded: {
        type: Number,
        min: 0,
        required: true,
      },
      stadium: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      league: {
        type: String,
        required: true,
      },
      nickname: {
        type: String,
        required: true,
      },
});

SeriaModel.createCollection();

export default SeriaModel;

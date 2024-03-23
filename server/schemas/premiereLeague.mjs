import mongoose from 'mongoose';

const premiereSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'premiereTeams' });

const premiereModel = mongoose.model('premiereModel', premiereSchema);

const newTeam = new premiereModel({

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

premiereModel.createCollection();

export default premiereModel;

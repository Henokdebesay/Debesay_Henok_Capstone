import mongoose from 'mongoose';

const laLigaSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'laLigaTeams' });

const laLigaModel = mongoose.model('laLigaModel', laLigaSchema);

const newTeam = new laLigaModel({

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



laLigaModel.createCollection();

export default laLigaModel;

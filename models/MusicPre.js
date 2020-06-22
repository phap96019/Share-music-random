const mongoose = require('mongoose');
const MusicPreSchema = mongoose.Schema({
  link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('MusicPre', MusicPreSchema);

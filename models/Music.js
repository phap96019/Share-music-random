const mongoose = require('mongoose');
const MusicSchema = mongoose.Schema({
  link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Music', MusicSchema);

const formidable = require('formidable');
const Music = require('../models/Music');
const MusicPre = require('../models/MusicPre');
module.exports.index = async (req, res) => {
  // const product = 'https://www.youtube.com/watch?v=SzfQzYQPLsQ';
  // res.render('index', { product: product });
  Music.countDocuments({}, async (err, count) => {
    if (err) res.json(erro);
    const randomNumber = Math.random() * count;
    const song = await Music.findOne().skip(randomNumber);
    res.render('index', { product: song.link });
  });
};
module.exports.post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    try {
      const newMusic = new Music({
        link: fields.link,
      });
      const SongExist = await Music.findOne({ link: fields.link });
      if (!SongExist) {
        const saveMusic = await newMusic.save();
        res.json(saveMusic);
      } else res.json('Song is exist');
    } catch (err) {
      res.json({ message: err });
    }
  });
};

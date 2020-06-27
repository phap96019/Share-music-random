const formidable = require('formidable');
const Music = require('../models/Music');
const MusicPre = require('../models/MusicPre');
module.exports.index = async (req, res) => {
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
      const newMusic = new MusicPre({
        link: fields.link,
      });
      const songExist = await Music.findOne({ link: fields.link });
      const songPre = await MusicPre.findOne({ link: fields.link });

      if (!songExist && !songPre) {
        const saveMusic = await newMusic.save();
        res.render('thanksPage');
      } else res.render('thanksPage');
    } catch (err) {
      res.json({ message: err });
    }
  });
};
module.exports.getPostForm = async (req, res) => {
  res.render('post');
};

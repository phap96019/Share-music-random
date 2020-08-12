const Admin = require('../model/Admin');
module.exports.authMiddleware = async (req, res, next) => {
  if (!req.cookies.userID) {
    res.redirect('/admin/login');
    return;
  } else {
    const adminExist = await Admin.findOne({ _id: req.cookies.adminId });
    if (adminExist) return next();
  }
};

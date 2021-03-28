const User = require("../../models/User");
const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");
const utils = require("../../utils");

const createUser = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user with that email already exists." });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      newUser
        .save()
        .then((user) => {
          const jwt = utils.createToken(user);
          res.cookie("jwt", jwt.token, { httpOnly: true, maxAge: jwt.expires });
          return res.json({
            userId: user._id,
            username: user.username,
          });
        })
        .catch((err) => res.json(err));
    }
  });
};

const loginUser = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      errors.push("This user does not exist");
      return res.status(404).json(errors);
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) {
          errors.push(err);
          return res.status(404).json(errors);
        }

        if (isMatch) {
          const jwt = utils.createToken(user);
          res.cookie("jwt", jwt.token, { httpOnly: true, maxAge: jwt.expires });
          return res.json({
            userId: user._id,
            username: user.username,
          });
        } else {
          errors.push("Invalid credentials");
          return res.status(404).json(errors);
        }
      });
    }
  });
};

const logoutUser = (req, res) => {
  res.cookie("jwt", "", { maxAge: -1 });
  res.redirect("/");
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};

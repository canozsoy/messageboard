let express = require('express');
let router = express.Router();

const messages = [
  {
    text: "I am your father!",
    user: "Darth Vader",
    added: new Date()
  },
  {
    text: "Hello there!",
    user: "Obi-Wan Kenobi",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board' , messages: messages});
});

router.post("/new", (req, res, next) =>  {
  const newMessageUser = req.body.name;
  const newMessageText = req.body.message;
  messages.push({text: newMessageText, user: newMessageUser, added: new Date()});
  res.redirect("/");
});

module.exports = router;

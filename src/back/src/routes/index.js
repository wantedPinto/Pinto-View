const express =  require('express');
const router = express.Router();
const { v4 : uuidV4 } = require('uuid');

router.get('/chatting', (req, res) => {
    res.redirect(`/${uuidV4()}`);
});

router.get('/chatting/:room', (req, res) => {
    res.render('index', {roomId: req.params.room});
});



module.exports = router;
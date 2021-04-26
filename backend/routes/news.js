const express = require('express');
const firebase = require('../firebase')
const router = express.Router();

router.get('/', async (req, res, next) => {
    const db = firebase.firestore();
    db.collection('news').get().then((snapshot) => {
        const news = snapshot.docs.map((doc) => doc.data());
        return res.send({ news });
    });
})

module.exports = router;
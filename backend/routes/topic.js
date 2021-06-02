const express = require('express');
const nodemailer = require('nodemailer')
const firebase = require('../firebase')
const authMiddleware = require('../middlewares/auth-middleware');

const db = firebase.firestore();

const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'recycle.smtp@gmail.com',
        pass: '123123123_'
    },
    tls: { rejectUnauthorized: false }
});

const sendMailToAdmin = async (body) => {
    const { keyword, text } = body;
    const { id } = await db.collection('topics').add({
        keyword, text, verified: false
    });
    return await transporter.sendMail({
        from: 'recycle.smtp@gmail.com',
        to: 'mahseeen@gmail.com',
        subject: `Новая статья по переработке "${keyword}"`,
        html: `
             <div style="display: flex; flex-direction: column">
                 <div>Новая статья по переработке "${keyword}"</div>
                 <div>${text}</div>
                 <div>
                     <a style="color: green" href="http://localhost:5500/topic/${id}/verify">Запостить</a>
                     <a style="color: red" href="http://localhost:5500/topic/${id}/delete">Удалить</a>
                 </div>
            </div>
        `,
    });
};

router.get('/', async (req, res) => {
    const { topicId } = req.params;
    try {
        const snapshot = await db.collection('topics').get();
        const allTopics = snapshot.docs.map((doc) => {
            const data = doc.data() || {};
            const { id } = doc;
            return { id, ...data }
        });
        return res.send({ topics: allTopics.filter(({ verified }) => verified) });
    } catch (error) {
        return res.status(500).send({ error });
    }
})
router.get('/:topicId/verify', async (req, res) => {
    const { topicId } = req.params;
    try {
        const { id } = await db.collection('topics')
            .doc(topicId)
            .set({ verified: true }, { merge: true });
        return res.send({ verified: true });
    } catch (error) {
        return res.status(500).send({ error });
    }
})
router.get('/:topicId/delete', async (req, res) => {
    const { topicId } = req.params;
    try {
        const { id } = await db.collection('topics')
            .doc(topicId)
            .delete();
        return res.send({ deleted: true });
    } catch (error) {
        return res.status(500).send({ error });
    }
})

router.use('/', authMiddleware);

router.post('/create', async (req, res) => {
    try {
        const result = await sendMailToAdmin(req.body);
        return res.send({ result });
    } catch (error) {
        return res.status(500).send({ error });
    }
})
module.exports = router;
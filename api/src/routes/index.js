const express = require('express');
const webpush = require('web-push');

const router = express.Router();

const dotenv = require('dotenv');

dotenv.config();

const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
};
console.log('----vapidKeys---', vapidKeys);
webpush.setVapidDetails('mailto:email@domain.com', vapidKeys.publicKey, vapidKeys.privateKey);

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});

router.post('/notification', (req, res) => {
  const subscription = req.param('subscription');
  const message = req.param('message');

  setTimeout(() => {
    webpush.sendNotification(
      subscription,
      message,
    );
  }, 0);

  res.sendStatus(202);
});

module.exports = router;

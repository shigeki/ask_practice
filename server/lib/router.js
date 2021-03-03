const router = require('express').Router();
const handler = (req, res) => {
  if (!req.query.name) {
    res.send(`利用方法が違うようです。<a href="https://github.com/shigeki/ask_practice/tree/WIP/manual">https://github.com/shigeki/ask_practice/tree/WIP/manual</a> を参照の上、再度アクセスしてください。`);
    return;
  }
  const name = req.query.name;
  res.send(`${name}様: 申し訳ございません。システムに問題が発生しましたので <a href="https://github.com/shigeki/ask_practice/issues">https://github.com/shigeki/ask_practice/issues</a> までお問い合わせください。`);
};
router.get('/ask_practice', (req, res) => handler(req, res));
router.get('/', (req, res) => handler(req, res));
module.exports = router;

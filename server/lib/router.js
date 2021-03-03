const router = require('express').Router();
const getHandler = (req, res) => {
  if (!req.query.name) {
    res.send(`利用方法が違うようです。<a href="https://github.com/shigeki/ask_practice/tree/WIP/manual">https://github.com/shigeki/ask_practice/tree/WIP/manual</a> を参照の上、再度アクセスしてください。`);
    return;
  }
  const name = req.query.name;
  res.header('Content-Type', 'text/html;charset=utf-8');
  res.send(`${name}様: 申し訳ございません。システムに問題が発生しましたので <a href="https://github.com/shigeki/ask_practice/issues">https://github.com/shigeki/ask_practice/issues</a> までお問い合わせください。github使いたくない、もしくはアカウントのない方は <a href="https://html5.ohtsu.org/question.html">https://html5.ohtsu.org/question.html</a> までお問い合わせください`);
};
const postHandler = (req, res) => {
  const message = req.body.message;
  console.log('message:', message);
  res.header('Content-Type', 'text/html;charset=utf-8');
  res.send('問い合わせありがとうございました。');
};
router.get('/ask_practice', (req, res) => getHandler(req, res));
router.get('/', (req, res) => getHandler(req, res));
router.post('/ask_practice', (req, res) => postHandler(req, res));
router.post('/', (req, res) => postHandler(req, res));

module.exports = router;

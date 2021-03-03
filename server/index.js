const app = require('express')();
const router = require('./lib/router');
app.use('/ask_practice', router);
app.use('/', router);
app.listen(9876, '127.0.0.1', () => {
  console.log(`Listening on 9876`);
});

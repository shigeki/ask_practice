const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./lib/router');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use('/ask_practice', router);
app.use('/', router);
app.listen(9876, '127.0.0.1', () => {
  console.log(`Listening on 9876`);
});

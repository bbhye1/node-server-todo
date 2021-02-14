const app = require('./src/app');

const { log: print } = console;

const port = 3000;

app.listen(port, () => {
  print(`This app listening at http://localhost:${port}`);
});

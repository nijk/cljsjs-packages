var config = require('./webpack.config.js');

module.exports = Object.assign({}, config, {
  mode: 'production',
  output: {
    filename: 'react-popper.min.js'
  }
});

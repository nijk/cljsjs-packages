var path = require('path');

module.exports = {
  entry: './lib/react-popper.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-popper.js',
    libraryTarget: 'var',
    library: 'ReactPopper'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'popper.js': 'Popper'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { 'modules': false }], 'stage-2', 'react']
          }
        }
      }
    ]
  }
};

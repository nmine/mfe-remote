const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'fe1',
  filename: 'remoteEntry.js',
  exposes: {
    './routes': './src/app/app.routes.ts',
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  }),
  output: {
    publicPath: 'http://localhost:4201/',
  },
});

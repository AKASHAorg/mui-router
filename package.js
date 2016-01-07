Package.describe({
  name:          'akasha:mui-router',
  version:       '0.0.1',
  // Brief, one-line summary of the package.
  summary:       '',
  // URL to the Git repository containing the source code for this package.
  git:           '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "externalify":            "0.1.0",
  'react-router':           '1.0.3',
  'material-ui':            '0.14.1',
  'react-tap-event-plugin': '0.2.1',
  'history':                '1.17.0'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.use(['react@0.14.1_1']);
  api.use(['cosmos:browserify@0.9.2']);

  api.add_files([
    'package.browserify.options.json',
    'package.browserify.js'
  ]);

  api.export(["MUI", "injectTapEventPlugin", "ReactRouter"]);
  api.export('ReactRouter');
});

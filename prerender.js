var requirejs = require('requirejs');
var React = require('react/addons');
var path = require('path');
var fs = require('fs');

var rootComponentPath = 'js/layout/App';
var buildProfilePath = path.join(__dirname, 'build.js');
var file = path.join(__dirname, 'src/index.json');

var buildProfile = fs.readFileSync(buildProfilePath, 'utf-8');
var buildConfig = eval(buildProfile);

requirejs.config({
  baseUrl: path.join(__dirname, buildConfig.baseUrl),
  paths: buildConfig.paths,
  // Stub any modules that require any esri or dojo modules since they wont be resolved by require
  map: {
    '*': {
      'js/actions/MapActions': 'js/config'
    }
  },
  nodeRequire: require
});

var reactApp = React.createFactory(requirejs(rootComponentPath).App);
var markup = React.renderToString(reactApp());

var json = JSON.parse(fs.readFileSync(file, 'utf-8'));
json.markup = markup;
fs.writeFile(file, JSON.stringify(json, null, 2), function (writeErr) {
  if (writeErr) { console.error(writeErr); return; }
  console.log('Successfully prerendered components to ' + file);
});


// var React = require('react/addons');
// var path = require('path');
// var fs = require('fs');
//
// // Filepaths
// var base = path.join(__dirname, '/src/');
// var file = path.join(base, 'index.json');
// var rootComponentPath = path.join(base, 'js/layout/App');
//
// // Enable ES6
// require('babel/register');
//
// // Generate string markup to be placed into index.json, which gets compiled with index.jade
// var reactApp = React.createFactory(require(rootComponentPath).App);
// var markup = React.renderToString(reactApp());
//
// fs.readFile(file, 'utf-8', function (err, data) {
//   if (err) { console.error(err); }
//   var json = JSON.parse(data);
//   json.markup = markup;
//   fs.writeFile(file, JSON.stringify(json, null, 2), function (writeErr) {
//     if (writeErr) {
//       console.error(writeErr);
//       return;
//     }
//     console.log('Successfully prerendered to ' + file);
//   });
// });

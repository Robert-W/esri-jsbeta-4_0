var React = require('react/addons');
var path = require('path');
var fs = require('fs');

// Filepaths
var outputFilename = path.join(__dirname, 'index.json');
var rootComponentPath = path.join(__dirname, 'js/layout/App');

// Enable ES6
require('babel/register');

// Generate string markup to be placed into index.json, which gets compiled with index.jade
var reactApp = React.createFactory(require(rootComponentPath).App);
var markup = React.renderToString(reactApp());

fs.readFile(outputFilename, 'utf-8', function (err, data) {
  if (err) { console.error(err); }
  var json = JSON.parse(data);
  json.markup = markup;
  fs.writeFile(outputFilename, JSON.stringify(json, null, 2), function (writeErr) {
    if (writeErr) {
      console.error(writeErr);
      return;
    }
    console.log('Successfully prerendered to ' + outputFilename);
  });
});

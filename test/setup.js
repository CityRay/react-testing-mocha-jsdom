// var jsdom = require('jsdom');

// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.parentWindow;


var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};
require('react/lib/ExecutionEnvironment').canUseDOM = true;


import {JSDOM} from 'jsdom';

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

const jsdom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>', {
  url: 'http://test.page'
});
global.jsdom = jsdom;
global.window = jsdom.window;
global.document = jsdom.window.document;
global.self = global.window;
global.navigator = global.window.navigator;

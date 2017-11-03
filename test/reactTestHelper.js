import jsdom from "jsdom"

if (typeof document === 'undefined') {
	const { JSDOM } = jsdom;
  	const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
  	global.window = dom.window;
	global.document = dom.window.document;
	global.navigator = dom.window.navigator;
}

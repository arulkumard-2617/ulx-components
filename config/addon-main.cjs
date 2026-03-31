const path = require('path');
const { addonV1Shim } = require('@embroider/addon-shim');

module.exports = addonV1Shim(path.join(__dirname, '..'));

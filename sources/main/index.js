"use strict";

module.exports = {
    version: require('../../package.json').version,
    nekoAPIError: require('../utils/nekoError.js').nekoAPIError,
    nekoError: require('../utils/nekoError.js').nekoError,
    Messages: require('../utils/messages.js'),
    RestApiv1: require('../fetch/apiRest.js').RestApiv1,
    RestApiv2: require('../fetch/apiRest.js').RestApiv2,
    SFW: require('./sfw.js'),
    NSFW: require('./nsfw.js')
}
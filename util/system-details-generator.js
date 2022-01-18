const ip = require("ip");
const os = require('os');

const systemIp = ip.address();
const systemHostName = os.hostname();

module.exports = {systemIp , systemHostName};
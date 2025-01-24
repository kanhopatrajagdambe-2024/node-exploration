
const os = require('os')


console.log("Platform", os.platform());
console.log("user", os.arch());
console.log("frememory", os.freemem(), 'bytes');
console.log("total memory", os.totalmem(), 'bytes');
console.log("Uptime", os.uptime());
console.log("Hostname", os.hostname());
console.log("Default Directory for temprary files", os.tmpdir());
console.log("UserInformation:", os.userInfo());

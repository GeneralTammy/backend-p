/*get system info */
const os = require('os');
console.log('OS platform', os.platform());
console.log('CPU cores', os.cpus().length);
console.log('Free memories', os.freemem());


const fs = require('fs');

WebAssembly
    .instantiate(fs.readFileSync('./hello.wasm'))
    .then(({ instance }) => {
      console.log(instance.exports.main());
    });
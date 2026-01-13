WebAssembly
  .instantiateStreaming(fetch('log.wasm'), {
    js: { log: console.log }
  })
  .then(({instance}) => {
    instance.exports.logIt();
  });
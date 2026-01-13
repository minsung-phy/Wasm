var mem = new WebAssembly.Memory({initial:1});

WebAssembly
  .instantiateStreaming(fetch('mem1.wasm'), {
    js: { mem }
  })
  .then(({instance}) => {
    var length = instance.exports.memtest();
    var bytes = new Uint8Array(mem.buffer, 0, length);
    var string = new TextDecoder('utf8').decode(bytes);

    console.log(string);  // "Hello"
  });
WebAssembly
  .instantiateStreaming(fetch('mem2.wasm'))
  .then(({instance}) => {
    var memory = instance.exports.mem;

    var length = instance.exports.memtest();
    var bytes = new Uint8Array(memory.buffer, 0, length);
    var string = new TextDecoder('utf8').decode(bytes);

    console.log(string);  // "Hello"
  });
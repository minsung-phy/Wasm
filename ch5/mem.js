var mem = new WebAssembly.Memory({initial:1});

WebAssembly 
    .instantiateStreaming(fetch('mem.wasm'), {
        js: {
            mem,
            log: (offset, length) =>
                logMemory(mem, offset, length)
        }
    })
    .then(({instance}) => {
        instance.exports.logIt();
    });

function logMemory(memory, offset, length) {
    var bytes = new Uint8Array(memory.buffer, offset, length);
    var str = new TextDecoder('utf8').decode(bytes);

    console.log(str);
}
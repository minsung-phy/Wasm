const fs = require('fs');
const { WASI } = require('wasi');

const wasi = new WASI({
    version: 'preview1',
    args: process.argv,
    env: process.env,
    preopens: {
        '/sandbox': '/Users/minsung/Documents/SV Lab/26년 1학기/wasm/ch7'
    }
});

const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

(async () => {
    const wasm = await WebAssembly
        .compile(fs.readFileSync('wasi.wasm'));

    const instance = await WebAssembly
        .instantiate(wasm, importObject);

    wasi.start(instance);
})();
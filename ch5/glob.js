// 변경 가능한 전역 변수, 기본값 2
var glob = new WebAssembly.Global(
    { value: "i32", mutable: true },
    2
);

WebAssembly
    .instantiateStreaming(fetch('glob.wasm'), {
        js: { glob }
    })
    .then(({instance}) => {
        console.log(instance.exports.getGlobal()); // 출력 : 2

        glob.value = 3;
        console.log(instance.exports.getGlobal()); // 출력 : 3

        instance.exports.setGlobal(4);
        console.log(instance.exports.getGlobal()); // 출력 : 4
    });
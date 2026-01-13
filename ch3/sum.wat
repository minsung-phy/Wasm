(module
  (func (export "sum")
        (param $a i32) ;; 매개변수 받기
        (param $b i32)
        (result i32) ;; 결과 타입은 32비트 정수
    local.get $a ;; 변수 $a 값을 스택에 push
    local.get $b
    i32.add ;; 스택 상단 두 값을 pop, 더한 뒤 결과를 다시 push
    return))

;; wasm-interp sum.wasm -r "sum" -a "i32:7" -a "i32:35"로 실행
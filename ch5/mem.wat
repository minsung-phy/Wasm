(module
    (import "js" "log"
        (func $log (param i32 i32)))
        
    (import "js" "mem" (memory 1))
    (data (i32.const 0) "Hello")

    (func (export "logIt")
        i32.const 0 ;; 출력할 데이터의 시작 위치
        i32.const 5 ;; 출력할 데이터 길이
        call $log))
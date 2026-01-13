(module
    (global $g (import "js" "glob") (mut i32))
    
    (func (export "getGlobal")
          (result i32)
      global.get $g) ;; 전역변수 g 값을 stack에 push

    (func (export "setGlobal")
          (param $value i32)
        local.get $value ;; 변수 value 값을 stack에 push
        global.set $g) ;; stack에서 값을 꺼내서 g에 저장
)